import React from 'react';
import { Sparkles, Menu, X, Landmark, GraduationCap, Compass, BookOpen } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Impact Hub', icon: Compass },
    { id: 'programs', label: 'Programs Explorer', icon: BookOpen },
    { id: 'matcher', label: 'Mentorship Matcher', icon: Sparkles },
    { id: 'support', label: 'Support & Donate', icon: Landmark },
    { id: 'contact', label: 'Apply / Contact', icon: GraduationCap },
  ];

  return (
    <header id="appHeader" className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand Logo Container */}
          <button 
            onClick={() => { setActiveTab('dashboard'); setIsOpen(false); }}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="She Can Foundation Portal Dashboard"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md transition-all duration-300 group-hover:scale-105">
              <span>S</span>
            </div>
            <div className="text-left">
              <span className="font-serif text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                She Can <span className="text-pink-600">.</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block">
                Empowerment Hub
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600 animate-pulse' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburguer Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-200 py-3 px-4 flex flex-col gap-1 transition-all">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-left transition-all ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
