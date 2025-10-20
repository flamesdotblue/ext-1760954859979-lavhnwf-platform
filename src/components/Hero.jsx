import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Play, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/40 via-[#0A1628]/60 to-[#0A1628] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#00D4FF] animate-pulse shadow-[0_0_12px_2px_rgba(0,212,255,0.8)]" />
            <span className="text-xs text-white/80">Trusted by 200+ US Businesses • 50K+ Calls/Month • 98% Satisfaction</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl leading-tight font-semibold tracking-tight">
            Unlock 24/7 AI Calling Power for Your Business
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            Enterprise-grade voice agents that never sleep, never miss a call, never lose a lead.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#34bfff] text-[#0A1628] font-semibold px-6 py-3 shadow-[0_10px_30px_rgba(0,212,255,0.35)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.55)] transition-all">
              Start Free Demo
              <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur px-6 py-3 hover:bg-white/10 transition">
              <Play className="h-5 w-5 mr-2" /> Watch How It Works
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Uptime', value: '99.9%' },
            { label: 'Avg. Response', value: '800ms' },
            { label: 'Languages', value: '28+' },
            { label: 'Integrations', value: '50+' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
