import { BuildingOffice2Icon, ShieldCheckIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const STATS = [
  {
    icon: BuildingOffice2Icon,
    value: "2006",
    label: "Established Year",
    description: "20+ years of real estate & construction excellence",
  },
  {
    icon: SparklesIcon,
    value: "2 Years",
    label: "Typical Completion",
    description: "Standard timeframe for commercial plaza delivery",
  },
  {
    icon: ShieldCheckIcon,
    value: "3-Year",
    label: "Flexible Payment Plan",
    description: "25% advance with quarterly shop installment options",
  },
  {
    icon: UserGroupIcon,
    value: "2 Cities",
    label: "Primary Service Hubs",
    description: "Serving Lahore & Islamabad market regions",
  },
];

export function AboutStatsBanner() {
  return (
    <div className="bg-white text-slate-900 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-slate-200">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="flex flex-col p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300 transition-all duration-300 group shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-[#1a2b4a] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-display font-extrabold text-3xl md:text-4xl text-[#1a2b4a] tracking-tight">
                  {stat.value}
                </span>
              </div>
              <h4 className="font-sans font-extrabold text-sm text-[#1a2b4a] mb-1">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
