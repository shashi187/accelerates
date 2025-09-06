export function CTAButton({ href = "#contact", children, variant = "primary" }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all ${
        variant === "primary"
          ? "bg-white text-slate-900 hover:shadow-elevate hover:-translate-y-0.5"
          : "border border-white/20 text-white hover:bg-white/10"
      }`}
    >
      {children}
      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-extrabold">{value}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
}