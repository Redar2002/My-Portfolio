import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-xl shadow-md border-b border-border"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
  href="#hero"
  className="text-2xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 text-gradient ml-2 opacity-0 animate-fade-in-delay-2"
>
          Reda<span className="text-foreground">Tech</span>
        </a>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={cn(
                "relative text-foreground/80 hover:text-primary transition duration-300",
                active === item.name && "text-primary font-semibold"
              )}
            >
              {item.name}
              {/* underline animé */}
              <span
                className={cn(
                  "absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300",
                  active === item.name && "w-full"
                )}
              />
            </a>
          ))}
        </div>

        {/* Boutons à droite */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-30 flex flex-col items-center justify-center transition-transform duration-500 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-8 text-2xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setIsMenuOpen(false);
                setActive(item.name);
              }}
              className={cn(
                "text-foreground/80 hover:text-primary transition duration-300",
                active === item.name && "text-primary font-semibold"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
