import React from 'react';
import { programsData } from '../data';
import { Search, GraduationCap, Briefcase, UserCheck, Calendar, Users, ChevronRight } from 'lucide-react';

interface ProgramExplorerProps {
  onSelectProgram: (title: string) => void;
}

export default function ProgramExplorer({ onSelectProgram }: { onSelectProgram: (title: string) => void }) {
  const [selectedCategory, setSelectedCategory] = React.useState<'All' | 'Tech' | 'Entrepreneurship' | 'Leadership'>('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPrograms = programsData.filter((program) => {
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          program.skillsAcquired.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: 'Tech' | 'Entrepreneurship' | 'Leadership') => {
    switch (category) {
      case 'Tech':
        return <GraduationCap className="w-4 h-4 text-indigo-600" />;
      case 'Entrepreneurship':
        return <Briefcase className="w-4 h-4 text-pink-600" />;
      case 'Leadership':
        return <UserCheck className="w-4 h-4 text-emerald-600" />;
    }
  };

  const getCategoryBadgeColor = (category: 'Tech' | 'Entrepreneurship' | 'Leadership') => {
    switch (category) {
      case 'Tech':
        return 'bg-indigo-50 text-indigo-800 border-indigo-100/50';
      case 'Entrepreneurship':
        return 'bg-pink-50 text-pink-850 border-pink-100/50';
      case 'Leadership':
        return 'bg-emerald-50 text-emerald-850 border-emerald-100/50';
    }
  };

  return (
    <div id="programsExplorer" className="max-w-6xl mx-auto">
      
      {/* Title block */}
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Programs Academic Incubators
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mt-2.5 text-base sm:text-lg">
          Filter and explore curated growth tracks explicitly structured for female learners, creators, and professionals.
        </p>
      </div>

      {/* Control Filters and Search Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {(['All', 'Tech', 'Entrepreneurship', 'Leadership'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 focus:outline-none ${
                selectedCategory === cat
                  ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search programs, domains, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all duration-200"
          />
        </div>

      </div>

      {/* Programs Card Grid */}
      {filteredPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div 
              key={program.id}
              className="bg-white rounded-2xl border border-slate-250/80 hover:border-indigo-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div className="p-6">
                
                {/* Card Title & Category Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryBadgeColor(program.category)}`}>
                    {getCategoryIcon(program.category)}
                    {program.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
                  {program.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {program.description}
                </p>

                {/* Subinfo Grid (Audience & Duration) */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-600 leading-none">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span><strong className="font-semibold">Duration:</strong> {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 leading-none">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span><strong className="font-semibold">Target:</strong> {program.audience}</span>
                  </div>
                </div>

              </div>

              {/* Skills Footer section */}
              <div className="bg-slate-50/50 px-6 py-4 rounded-b-2xl border-t border-slate-100 flex flex-wrap gap-1.5">
                {program.skillsAcquired.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-white px-2 py-1 rounded-md text-[10px] font-mono font-medium text-slate-600 border border-slate-200/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Ribbon Button */}
              <div className="px-6 pb-6 pt-2 bg-slate-50/50 rounded-b-2xl flex">
                <button
                  onClick={() => onSelectProgram(program.title)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 bg-white hover:bg-indigo-600 text-indigo-700 hover:text-white border border-indigo-100 hover:border-indigo-600 rounded-xl text-xs font-bold shadow-sm hover:shadow transition-all duration-200 focus:outline-none"
                >
                  Apply to this Cohort
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm">
          <p className="text-slate-500 font-medium text-base">
            No programs match your search parameters.
          </p>
          <button 
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-3 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 focus:outline-none"
          >
            Clear Search Filters
          </button>
        </div>
      )}

    </div>
  );
}
