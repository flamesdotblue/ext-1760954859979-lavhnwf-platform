import React, { useEffect, useRef } from 'react';

const LOGOS = [
  'Twilio',
  'OpenAI',
  'Google Cloud',
  'ElevenLabs',
  'n8n',
  'Zapier',
  'HubSpot',
  'Salesforce',
  'Google Sheets',
  'Microsoft Azure',
];

export default function Partners() {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let start = 0;
    let raf;
    const step = (t) => {
      start += 0.2;
      el.style.transform = `translateX(-${start}px)`;
      if (start >= el.scrollWidth / 2) start = 0;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <p className="text-center text-white/70 text-sm mb-6">Powered by Industry-Leading Technology Partners</p>
          <div className="relative overflow-hidden">
            <div className="flex gap-10 will-change-transform" ref={trackRef} onMouseEnter={() => (trackRef.current.style.animationPlayState = 'paused')} onMouseLeave={() => (trackRef.current.style.animationPlayState = 'running')}>
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div key={i} className="shrink-0"> 
                  <div className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/80 hover:text-white cursor-default">
                    {logo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
