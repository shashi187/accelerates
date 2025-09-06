"use client";
import { motion } from "framer-motion";

export default function Section({ id, kicker, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`}>
      <div className="container py-14">
        {(kicker || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            {kicker && (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wider uppercase text-white/80">
                {kicker}
              </div>
            )}
            {title && <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">{title}</h2>}
            {subtitle && <p className="mt-3 max-w-3xl text-base sm:text-lg text-white/70">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}