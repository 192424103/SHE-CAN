import React from 'react';
import { Gift, Heart, ShieldCheck, Landmark } from 'lucide-react';

export default function DonationSimulator() {
  const [amount, setAmount] = React.useState<number>(50);
  const [customVal, setCustomVal] = React.useState<string>('');
  const [simulated, setSimulated] = React.useState(false);

  const presets = [25, 50, 100, 250];

  const handlePresetSelect = (val: number) => {
    setAmount(val);
    setCustomVal('');
    setSimulated(false);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    setCustomVal(rawValue);
    if (rawValue) {
      setAmount(parseInt(rawValue, 10));
    } else {
      setAmount(0);
    }
    setSimulated(false);
  };

  const calculateImpact = () => {
    if (amount <= 0) {
      return 'Join our mailing lists to advocate and circulate support!';
    } else if (amount < 40) {
      return `Provides a full pack of advanced study manuals and specialized technical journals for one female scholar.`;
    } else if (amount < 80) {
      return `Sponsors 4 weeks of high-speed learning laboratory internet access and professional workbook bundles.`;
    } else if (amount < 180) {
      return `Covers a full, specialized 12-week front-end programming stipend and transportation costs for a high school coder.`;
    } else if (amount < 500) {
      return `Directly funds business formation fees, legal coaching registers, and boardroom materials for an early female startup founder.`;
    } else {
      return `Establishes a dedicated endowment, providing laptops, private cloud storage nodes, and personal 1-to-1 advisor sessions for 5 distinct scholars.`;
    }
  };

  return (
    <div id="donationSimulator" className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8">
      
      {/* Title Header */}
      <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-100">
        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
          <Heart className="w-5 h-5 text-indigo-600 fill-indigo-100 animate-bounce" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-slate-900">
            Interactive Support Simulator
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Visualize the exact community footprint made by different virtual sponsorship levels securely.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Input sliders & Preset cards */}
        <div className="flex flex-col gap-5">
          
          {/* Preset buttons */}
          <div>
            <span className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-500 mb-2.5">
              Select Sponsorship Level:
            </span>
            <div className="grid grid-cols-4 gap-2">
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePresetSelect(p)}
                  className={`py-3 px-1 rounded-xl text-sm font-bold border transition-all duration-200 focus:outline-none ${
                    amount === p && !customVal
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  ${p}
                </button>
              ))}
            </div>
          </div>

          {/* Custom field */}
          <div>
            <span className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-500 mb-2">
              Or Input Custom Amount ($):
            </span>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
              <input
                type="text"
                placeholder="Other amount..."
                value={customVal}
                onChange={handleCustomChange}
                className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all duration-250"
              />
            </div>
          </div>

          {/* Slider input */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-400 mb-1.5">
              <span>$10 Minimum</span>
              <span>$1,000 Maximum</span>
            </div>
            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={amount}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                setAmount(val);
                setCustomVal('');
                setSimulated(false);
              }}
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>

        </div>

        {/* Real-time Dynamic Impact Card and CTA */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/50 p-6 flex flex-col justify-between min-h-[220px]">
          
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-indigo-700 block">
              Direct Contribution Value
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-4xl font-serif font-black text-slate-900">${amount}</span>
              <span className="text-xs text-slate-500 font-semibold">One-time Support</span>
            </div>
            
            <p className="text-sm text-slate-750 font-medium leading-relaxed mt-4 pt-4 border-t border-slate-200/50">
              {calculateImpact()}
            </p>
          </div>

          {/* Action CTA simulator */}
          <div className="mt-5">
            {simulated ? (
              <div className="text-center py-2 bg-emerald-50 text-emerald-800 border border-emerald-100/60 rounded-xl text-xs font-bold animate-fade-in">
                Contribution Sim Completed ✅
              </div>
            ) : (
              <button
                onClick={() => setSimulated(true)}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none flex items-center justify-center gap-1.5"
              >
                <Gift className="w-3.5 h-3.5" />
                Simulate Direct Impact
              </button>
            )}
            
            <div className="flex items-center justify-center gap-1 mt-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span>Simulated gateway for proof-of-concept preview</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
