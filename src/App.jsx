import React from 'react';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Industries from './components/Industries';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-white antialiased">
      <Hero />
      <Partners />
      <Industries />
      <Pricing />
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#00D4FF] to-[#FFD700] shadow-[0_0_30px_rgba(0,212,255,0.5)]" />
              <span className="font-semibold tracking-tight">Neo AI Calling Agents</span>
            </div>
            <p className="text-sm text-white/70 mt-3">The Voice of the Future</p>
          </div>
          <div className="text-sm text-white/70">
            <p>Contact</p>
            <p className="mt-2">hello@neoagent.agency</p>
            <p>+1 (415) 555-0199</p>
          </div>
          <div className="text-sm text-white/60">
            <p>© {new Date().getFullYear()} Neo AI Calling Agents. All rights reserved.</p>
            <p className="mt-2">SOC 2 Type II • HIPAA • GDPR • 256-bit SSL</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
