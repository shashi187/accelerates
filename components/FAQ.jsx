"use client";
import { useState, useMemo } from "react";

const data = [
  {
    q: "What services does Accelerates Online provide?",
    a: "We specialize in next-level website development, AI integrations, e-commerce, SEO optimization, and custom-coded solutions tailored for growth-focused businesses.",
  },
  {
    q: "Do you build SEO-optimized websites?",
    a: "Yes. Every website we deliver comes with full SEO optimization, schema, speed performance improvements, and Google indexing setup.",
  },
  {
    q: "Can you create e-commerce and custom coded websites?",
    a: "Absolutely. We develop scalable e-commerce platforms, custom-coded web apps, and portfolio websites with advanced features as per client needs.",
  },
  {
    q: "Do you provide support after website launch?",
    a: "Yes. We provide ongoing maintenance, SEO monitoring, and growth consulting to ensure your website consistently performs.",
  },
  {
    q: "Can you redesign or fix my existing website instead of starting from scratch?",
    a: "Absolutely. We can audit, optimize, and redesign existing websites to improve performance, speed, and SEO without losing your current brand identity.",
  },
  {
    q: "Do you handle hosting and domain setup?",
    a: "Yes, we help clients with hosting, domain purchase, SSL setup, and deployment so everything is handled under one roof.",
  },
  {
    q: "Will my website be mobile-friendly and fast?",
    a: "Yes, every site we build is mobile-first, responsive, and optimized for speed — Google PageSpeed benchmarks are part of our process.",
  },
  {
    q: "Do you integrate tools like Google Analytics and Search Console?",
    a: "Yes. We integrate Google Analytics, Search Console, and tracking pixels so you can measure growth and conversions from day one.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(-1);

  // JSON-LD for FAQ schema
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  }), []);

  return (
    <div className="card">
      <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>

      <div className="space-y-3">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition cursor-pointer"
            onClick={() => setOpen(open === idx ? -1 : idx)}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">{item.q}</h4>
              <span className="text-white/70">{open === idx ? "−" : "+"}</span>
            </div>
            {open === idx && <p className="mt-2 text-white/80 text-sm">{item.a}</p>}
          </div>
        ))}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}