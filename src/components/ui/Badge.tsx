import { cn, getStatusLabel } from "@/lib/utils";

interface BadgeProps {
  status: "ongoing" | "completed" | "planned";
  className?: string;
}

export function StatusBadge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold font-sans tracking-wider uppercase rounded-full shadow-sm backdrop-blur-md transition-all border",
        status === "ongoing" && "bg-white/90 text-amber-600 border-amber-200",
        status === "completed" && "bg-white/90 text-emerald-600 border-emerald-200",
        status === "planned" && "bg-white/90 text-blue-600 border-blue-200",
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
        "inline-flex items-center px-2.5 py-1 text-[11px] font-bold font-sans tracking-wider uppercase rounded-full bg-white/90 text-[#1a2b4a] border border-slate-200 shadow-sm backdrop-blur-md",
        className
      )}
    >
      {labels[type] ?? type}
    </span>
  );
}
