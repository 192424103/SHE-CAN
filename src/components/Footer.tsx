import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="appFooter" className="bg-slate-900 text-slate-400 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Core footer layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-slate-800">
          
          {/* Logo brand label */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="font-serif text-lg font-bold text-white tracking-tight">
              She Can <span className="text-pink-500">.</span>
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-450">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Association</span>
            <span className="cursor-pointer hover:text-white transition-colors">NGO Directory</span>
            <span className="cursor-pointer hover:text-white transition-colors">Volunteerships</span>
          </div>

        </div>

        {/* Authorship credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs font-medium">
          
          <p className="text-slate-500 font-mono">
            &copy; {currentYear} She Can Foundation. Preserving academic alignment.
          </p>

          <p className="text-slate-500 tracking-wide">
            Developed by{' '}
            <span className="text-indigo-400 font-bold relative group inline-block">
              Nithya
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-indigo-400 to-pink-400 transform scaleX(0) group-hover:scaleX(1) origin-left transition-transform duration-300" />
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}
