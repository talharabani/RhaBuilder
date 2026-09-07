import { cn, getStatusLabel } from "@/lib/utils";

interface BadgeProps {
  status: "ongoing" | "completed" | "planned";
  className?: string;
}

export function StatusBadge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold font-sans tracking-wider uppercase rounded-full shadow-md backdrop-blur-md transition-all border",
        status === "ongoing" && "bg-slate-950/90 text-amber-300 border-amber-500/50 shadow-black/40",
        status === "completed" && "bg-slate-950/90 text-emerald-300 border-emerald-500/50 shadow-black/40",
        status === "planned" && "bg-slate-950/90 text-blue-300 border-blue-500/50 shadow-black/40",
        className
      )}
    >
      <span
        className={cn(
          "w-2 h-2 rounded-full inline-block shrink-0",
          status === "ongoing" && "bg-amber-400 animate-pulse",
          status === "completed" && "bg-emerald-400",
          status === "planned" && "bg-blue-400"
        )}
        aria-hidden="true"
      />
      {getStatusLabel(status)}
    </span>
  );
}

interface TypeBadgeProps {
  type: string;
  className?: string;
}

export function TypeBadge({ type, className }: TypeBadgeProps) {
  const labels: Record<string, string> = {
    residential: "Residential",
    commercial: "Commercial",
    "mixed-use": "Mixed Use",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[11px] font-bold font-sans tracking-wider uppercase rounded-full bg-slate-950/90 text-white border border-white/30 shadow-md backdrop-blur-md shadow-black/40",
        className
      )}
    >
      {labels[type] ?? type}
    </span>
  );
}
