import React, { useMemo, useState } from 'react';
import { Check, Calculator } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$250/mo',
    features: ['Up to 1,000 calls', 'Standard voices', 'Basic analytics', 'Email support'],
    cta: 'Start Free Demo',
  },
  {
    name: 'Growth',
    price: '$450/mo',
    features: ['Up to 3,000 calls', 'Premium voices', 'Advanced analytics', 'CRM sync + webhooks'],
    cta: 'Upgrade to Growth',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited scale', 'SOC 2 Type II / HIPAA', 'Dedicated CSM', 'SLA + SSO + SSO SCIM'],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  const [volume, setVolume] = useState(2000); // calls/mo
  const [duration, setDuration] = useState(3); // min
  const [costPerMin, setCostPerMin] = useState(0.6); // $ per min human
  const [missed, setMissed] = useState(8); // %
  const [leadValue, setLeadValue] = useState(75); // $ per lead

  const roi = useMemo(() => {
    const humanCost = volume * duration * costPerMin;
    const neoCost = 450; // assume Growth
    const savings = Math.max(humanCost - neoCost, 0);
    const recovered = (missed / 100) * volume * 0.25 * leadValue; // 25% lead conversion from recovered calls
    const totalBenefit = savings + recovered;
    const paybackDays = Math.max(Math.round((neoCost / Math.max(totalBenefit, 1)) * 30), 1);
    const roiPct = Math.round(((totalBenefit - neoCost) / Math.max(neoCost, 1)) * 100);
    return { humanCost, neoCost, savings, recovered, totalBenefit, paybackDays, roiPct };
  }, [volume, duration, costPerMin, missed, leadValue]);

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Pricing & ROI</h2>
            <p className="text-white/70 mt-2">74%+ savings vs legacy call centers. Transparent, scalable plans.</p>
          </div>
          <div className="flex items-center text-sm text-white/60 gap-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> SOC 2 Type II • HIPAA • GDPR • 256-bit SSL
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-3xl border bg-white/5 backdrop-blur p-6 ${p.highlighted ? 'border-[#00D4FF]/40 shadow-[0_10px_40px_rgba(0,212,255,0.25)]' : 'border-white/10'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.highlighted && (
                  <span className="text-xs px-2 py-1 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/40 text-[#00D4FF]">Most Popular</span>
                )}
              </div>
              <div className="mt-2 text-3xl font-semibold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/80">
                    <Check className="h-4 w-4 mt-0.5 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#34bfff] text-[#0A1628] font-semibold py-2.5 hover:shadow-[0_12px_40px_rgba(0,212,255,0.45)] transition">
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <div className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-[#00D4FF]" />
            <h3 className="font-semibold">Interactive ROI Calculator</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-5">
              <Slider label={`Monthly call volume: ${volume.toLocaleString()}`} min={100} max={10000} step={100} value={volume} setValue={setVolume} />
              <Slider label={`Avg call duration (min): ${duration}`} min={1} max={15} step={1} value={duration} setValue={setDuration} />
              <Slider label={`Human cost per min ($): ${costPerMin.toFixed(2)}`} min={0.2} max={2} step={0.05} value={costPerMin} setValue={setCostPerMin} />
              <Slider label={`Missed calls (%): ${missed}%`} min={0} max={30} step={1} value={missed} setValue={setMissed} />
              <Slider label={`Lead value ($): ${leadValue}`} min={10} max={500} step={5} value={leadValue} setValue={setLeadValue} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Stat title="Legacy Cost (monthly)" value={`$${Math.round(roi.humanCost).toLocaleString()}`} />
              <Stat title="Neo Cost (Growth)" value={`$${roi.neoCost.toLocaleString()}`} />
              <Stat title="Direct Savings" value={`$${Math.round(roi.savings).toLocaleString()}`} positive />
              <Stat title="Recovered Revenue" value={`$${Math.round(roi.recovered).toLocaleString()}`} positive />
              <Stat title="ROI" value={`${roi.roiPct}%`} positive={roi.roiPct >= 0} />
              <Stat title="Payback Period" value={`${roi.paybackDays} days`} positive />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, min, max, step, value, setValue }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm text-white/80">
        <span>{label}</span>
        <span className="text-white/60">{typeof value === 'number' ? '' : ''}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
        className="w-full mt-2 accent-[#00D4FF]"
      />
    </div>
  );
}

function Stat({ title, value, positive }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs text-white/60">{title}</div>
      <div className={`mt-1 text-2xl font-semibold ${positive ? 'text-emerald-400' : ''}`}>{value}</div>
    </div>
  );
}
