"use client";

import { useEffect, useRef } from "react";

/**
 * Animation du hero : des points dispersés (données brutes) se relient en réseau,
 * s'alignent en flux (ETL), puis convergent vers un tableau de bord (KPI).
 * Pause hors écran ; image fixe si prefers-reduced-motion.
 */
const LANES = 7;
const FRAME_MS = 1000 / 30; // 30 images/s suffisent pour un mouvement lent

type P = { t: number; speed: number; lane: number; sx: number; sy: number; drift: number; size: number };

function smooth(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

export function HeroPipeline() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Générateur pseudo-aléatoire déterministe : même rendu à chaque chargement.
    let seed = 42;
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

    const count = window.innerWidth < 768 ? 70 : 130;
    const particles: P[] = Array.from({ length: count }, () => ({
      t: rand(),
      speed: 0.018 + rand() * 0.02,
      lane: Math.floor(rand() * LANES),
      sx: rand() * 0.3,
      sy: 0.08 + rand() * 0.84,
      drift: rand() * Math.PI * 2,
      size: 0.8 + rand() * 1.4,
    }));

    let w = 0;
    let h = 0;
    let colors = { accent: "#5fd4ea", line: "#2a3746", muted: "#9aa8b6" };
    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      colors = {
        accent: cs.getPropertyValue("--accent").trim() || colors.accent,
        line: cs.getPropertyValue("--line-strong").trim() || colors.line,
        muted: cs.getPropertyValue("--muted").trim() || colors.muted,
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const laneY = (lane: number) => h * (0.14 + (lane / (LANES - 1)) * 0.72);
    const boxX = () => w * 0.93;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      const bx = boxX();

      // Couloirs (lignes de flux)
      ctx.lineWidth = 1;
      for (let l = 0; l < LANES; l++) {
        const y = laneY(l);
        const g = ctx.createLinearGradient(w * 0.42, 0, bx, 0);
        g.addColorStop(0, "transparent");
        g.addColorStop(1, colors.line);
        ctx.strokeStyle = g;
        ctx.beginPath();
        ctx.moveTo(w * 0.42, y);
        ctx.lineTo(bx, y);
        ctx.stroke();
      }

      // Tableau de bord d'arrivée
      ctx.strokeStyle = colors.muted;
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.roundRect(bx - 6, h * 0.06, 32, h * 0.88, 8);
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Positions
      const pts = particles.map((p) => {
        const u = (p.t + time * p.speed) % 1;
        const align = smooth(0.32, 0.55, u);
        const wobble = Math.sin(time * 0.6 + p.drift) * 10 * (1 - align);
        const scatterX = (p.sx + u * 0.9) * w;
        const x = scatterX * (1 - align) + u * bx * align;
        const y = (p.sy * h + wobble) * (1 - align) + laneY(p.lane) * align;
        return { x: Math.min(x, bx), y, u, align, size: p.size };
      });

      // Réseau des données brutes
      ctx.strokeStyle = colors.muted;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        if (a.align > 0.4) continue;
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          if (b.align > 0.4) continue;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 70) {
            ctx.globalAlpha = (1 - d / 70) * 0.25;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Points
      for (const p of pts) {
        ctx.globalAlpha = 0.35 + p.align * 0.65;
        ctx.fillStyle = p.align > 0.5 ? colors.accent : colors.muted;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + p.align * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    let started = false;
    let last = 0;
    const start = performance.now();
    const loop = (now: number) => {
      if (now - last >= FRAME_MS) {
        last = now;
        draw((now - start) / 1000 + 4);
      }
      if (visible && !reduced) raf = requestAnimationFrame(loop);
    };

    // Démarre après le chargement de la page, quand le navigateur est inactif.
    const begin = () => {
      if (started) return;
      started = true;
      readColors();
      resize();
      draw(4);
      if (!reduced) raf = requestAnimationFrame(loop);
    };
    const idle = (cb: () => void) =>
      "requestIdleCallback" in window ? window.requestIdleCallback(cb, { timeout: 2500 }) : setTimeout(cb, 1200);
    if (document.readyState === "complete") idle(begin);
    else window.addEventListener("load", () => idle(begin), { once: true });

    const ro = new ResizeObserver(() => {
      if (!started) return;
      resize();
      if (reduced || !visible) draw(4);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (started && visible && !reduced) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    const mo = new MutationObserver(() => {
      readColors();
      if (started && reduced) draw(4);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="h-56 w-full md:h-64" />;
}
