import React from 'react';
import { Building, Stethoscope, ShoppingCart, Sun } from 'lucide-react';

const industries = [
  {
    key: 'real-estate',
    icon: Building,
    title: 'Real Estate',
    benefits: ['24/7 inquiries', 'Lead scoring', 'Smart scheduling', 'Multilingual', 'CRM integration'],
    price: '$380/mo (1,500 calls)',
    cta: 'Book Real Estate Demo',
  },
  {
    key: 'health',
    icon: Stethoscope,
    title: 'Healthcare & Clinics',
    benefits: ['HIPAA-compliant', 'Appointment booking', 'Rx reminders', 'EHR integration', 'Secure consent'],
    price: '$450/mo (1,200 calls)',
    cta: 'Schedule Healthcare Demo',
  },
  {
    key: 'ecom',
    icon: ShoppingCart,
    title: 'E-Commerce',
    benefits: ['Order updates', 'Abandoned cart recovery', 'Returns processing', 'Shopify/Woo integration', 'CS automation'],
    price: '$320/mo (2,000 calls)',
    cta: 'Try E-Commerce Demo',
  },
  {
    key: 'solar',
    icon: Sun,
    title: 'Solar Energy',
    benefits: ['Lead generation', 'Consultation scheduling', 'ROI calculators', 'CRM integration', 'Geo-qualification'],
    price: '$420/mo (1,000 calls)',
    cta: 'Request Solar Demo',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Built for Your Industry</h2>
            <p className="text-white/70 mt-2">Deploy voice agents tailored to your workflows and systems.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ key, icon: Icon, title, benefits, price, cta }) => (
            <div key={key} className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#00D4FF]/70 to-[#FFD700]/60 shadow-[0_0_20px_rgba(0,212,255,0.4)] grid place-items-center">
                  <Icon className="h-5 w-5 text-[#0A1628]" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.6)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-white/60">{price}</div>
              <a href="#pricing" className="mt-4 inline-flex items-center justify-center w-full rounded-xl bg-white/10 border border-white/15 py-2.5 hover:bg-white/20 transition">
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
