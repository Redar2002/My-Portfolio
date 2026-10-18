import type { ProjectStatus } from "@/content/projects";
import type { Dictionary } from "@/content/i18n/fr";

export function StatusBadge({ status, dict }: { status: ProjectStatus; dict: Dictionary }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
      <span
        aria-hidden="true"
        className={status === "poc" ? "size-1.5 rounded-full border border-accent" : "size-1.5 rounded-full bg-accent"}
      />
      {dict.status[status]}
    </span>
  );
}
