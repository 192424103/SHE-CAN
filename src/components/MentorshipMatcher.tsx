import React from 'react';
import { mentorsData } from '../data';
import { Sparkles, ArrowRight, UserCheck, Compass, CheckCircle2, Award } from 'lucide-react';

export default function MentorshipMatcher() {
  const [focusArea, setFocusArea] = React.useState<'Tech' | 'Entrepreneurship' | 'Leadership'>('Tech');
  const [level, setLevel] = React.useState<string>('Academic');
  const [selectedTopic, setSelectedTopic] = React.useState<string>('Coding Core');
  const [matchResult, setMatchResult] = React.useState<any[] | null>(null);
  const [isMatching, setIsMatching] = React.useState(false);

  const levelOptions = [
    { id: 'Academic', label: 'Student / Academics' },
    { id: 'Founder', label: 'Aspiring Entrepreneur' },
    { id: 'CareerChanger', label: 'Career Switcher' },
    { id: 'Executive', label: 'Corporate Management' },
  ];

  const getTopicOptions = () => {
    switch (focusArea) {
      case 'Tech':
        return ['Coding Core', 'System Architecture', 'AI/ML Foundations', 'Product Direction'];
      case 'Entrepreneurship':
        return ['Seed Pitchings', 'Go-to-market Strategy', 'Legal Formations', 'Cash Bookkeep'];
      case 'Leadership':
        return ['Wages Negotiation', 'Boardroom Advocacy', 'Public Speaking', 'Campaign Planning'];
    }
  };

  React.useEffect(() => {
    setSelectedTopic(getTopicOptions()[0]);
  }, [focusArea]);

  const handleRunMatch = () => {
    setIsMatching(true);
    setMatchResult(null);

    setTimeout(() => {
      // Find matches from mentorsData
      const matches = mentorsData.filter((mentor) => {
        // Simple logic:
        // Tech matches Sarah (m1) or Nandini (m3)
        // Entrepreneurship matches Elena (m2)
        // Leadership matches Amara (m4) or Sarah (m1)
        if (focusArea === 'Tech') {
          return mentor.id === 'm1' || mentor.id === 'm3';
        } else if (focusArea === 'Entrepreneurship') {
          return mentor.id === 'm2' || mentor.id === 'm3';
        } else {
          return mentor.id === 'm4' || mentor.id === 'm1';
        }
      });

      setMatchResult(matches);
      setIsMatching(false);
    }, 1000); // 1000ms simulation
  };

  return (
    <div id="mentorshipMatcher" className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-205 shadow-md p-6 sm:p-8">
      
      <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-100">
        <div className="p-2 bg-pink-50 text-pink-600 rounded-xl">
          <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-slate-900">
            Interactive Mentorship Matcher
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Input your career stage and aspirations to dynamically align with an industry-expert Board advisor.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Wizard Panel Inputs */}
        <div className="flex flex-col gap-6">
          
          {/* Question 1: Focus Area */}
          <div>
            <label className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-500 mb-2.5">
              1. What is your primary domain of interest?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Tech', 'Entrepreneurship', 'Leadership'] as const).map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => setFocusArea(area)}
                  className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all duration-200 focus:outline-none ${
                    focusArea === area
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Career Level */}
          <div>
            <label className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-500 mb-2.5">
              2. Describe your current professional level:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {levelOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setLevel(opt.id)}
                  className={`py-2 px-3 rounded-xl text-left text-xs font-semibold border transition-all duration-200 focus:outline-none ${
                    level === opt.id
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-800'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Dynamic Specialization Dropdown */}
          <div>
            <label className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-500 mb-2">
              3. Which high-impact skill is most critical to your journey?
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full bg-slate-50 select-field px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            >
              {getTopicOptions().map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Action Block */}
          <button
            onClick={handleRunMatch}
            disabled={isMatching}
            className="w-full mt-2 py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
          >
            {isMatching ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Calculating Best Mentor Fit...
              </span>
            ) : (
              <>
                Compute Match Fit
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

        </div>

        {/* Wizard Panel Output Display */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/50 p-6 flex flex-col justify-center min-h-[320px] relative overflow-hidden">
          
          {isMatching ? (
            <div className="text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 animate-pulse">
                <Compass className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <h4 className="text-sm font-bold text-slate-800">Reviewing board expert availability...</h4>
              <p className="text-xs text-slate-500 max-w-xs">
                Scanning mentorship matrices to identify aligned skill matches, corporate profiles, and session slots...
              </p>
            </div>
          ) : matchResult ? (
            <div className="flex flex-col gap-6">
              
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-100">
                  <CheckCircle2 className="w-3 h-3" />
                  Successful Aligned Match Found
                </span>
              </div>

              {matchResult.map((mentor) => (
                <div key={mentor.id} className="bg-white rounded-xl border border-slate-200/70 p-4 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                  {/* Avatar badge */}
                  <div className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg border-2 border-white shadow">
                    {mentor.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">
                      {mentor.name}
                    </h4>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {mentor.role} at <strong className="font-semibold text-slate-700">{mentor.company}</strong>
                    </span>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {mentor.bio}
                    </p>
                    {/* Aligned expertise tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {mentor.expertise.map((exp: string, i: number) => (
                        <span key={i} className="bg-slate-50 px-2 py-0.5 rounded text-[9px] font-semibold text-indigo-700 border border-indigo-100/50">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <p className="text-[10px] text-slate-500 leading-tight text-center mt-2">
                *Matches simulate availability according to real-time NGO workloads. Proceed to Apply to initiate formal intros.
              </p>

            </div>
          ) : (
            <div className="text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-800">Your Advisor Match Canvas</h4>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Complete the selection questions to matching indicators and retrieve professional portfolios.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
