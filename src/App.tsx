import React from 'react';
import Header from './components/Header';
import ImpactChart from './components/ImpactChart';
import ProgramExplorer from './components/ProgramExplorer';
import MentorshipMatcher from './components/MentorshipMatcher';
import DonationSimulator from './components/DonationSimulator';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { testimonialsData } from './data';
import { 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Quote 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<string>('dashboard');
  const [selectedPrefillProgram, setSelectedPrefillProgram] = React.useState<string>('');
  
  // Testimonial slider index
  const [testiIndex, setTestiIndex] = React.useState(0);

  const prevTesti = () => {
    setTestiIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTesti = () => {
    setTestiIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handleApplyToProgram = (programTitle: string) => {
    setSelectedPrefillProgram(programTitle);
    setActiveTab('contact');
    // Scroll window to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/10 selection:text-indigo-900 relative">
      
      {/* Decorative background grid lights */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-70 z-0" />

      {/* Corporate Header Nav */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Dynamic Workspace Section */}
      <main className="flex-grow z-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
        
        {/* TAB 1: DASHBOARD HUB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-12">
            
            {/* Immersive Hero intro block */}
            <section className="text-center max-w-4xl mx-auto py-6 sm:py-10 space-y-6">
              
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100/50 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '8s' }} />
                <span>2026 Virtual Platform Showcase</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] max-w-2xl mx-auto">
                Bridging the Gender Gap in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Tech & Leadership</span>
              </h1>

              <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                She Can Foundation provides qualified, high-velocity technical courses, micro-incubators, and private Board advisor alignments for emerging women leaders.
              </p>

              {/* Live KPI Statistics Row */}
              <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto pt-6">
                
                <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs text-center flex flex-col justify-center">
                  <span className="text-xl sm:text-2xl font-black text-indigo-600">1,450+</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold mt-1">Scholars Trained</span>
                </div>

                <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs text-center flex flex-col justify-center">
                  <span className="text-xl sm:text-2xl font-black text-pink-600">115+</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold mt-1">Founders Backed</span>
                </div>

                <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-180 text-center flex flex-col justify-center">
                  <span className="text-xl sm:text-2xl font-black text-emerald-600">110+</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold mt-1">Board Advisories</span>
                </div>

              </div>

              {/* Call-to-actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => setActiveTab('programs')}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white hover:bg-slate-855 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                >
                  Explore Incubator Programs
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="w-full sm:w-auto px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 focus:outline-none"
                >
                  Apply Directly
                </button>
              </div>

            </section>

            {/* Custom Interactive SVG Chart Segment */}
            <section className="animate-fade-in">
              <ImpactChart />
            </section>

            {/* Testimonials Quote Slider Slider segment */}
            <section className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
              
              <div className="flex items-center gap-2 pb-4 border-b border-indigo-50">
                <Quote className="w-5 h-5 text-indigo-500 fill-indigo-50" />
                <h3 className="font-serif text-lg font-bold text-slate-900">Empowerment Storybooks</h3>
              </div>

              <div className="min-h-[160px] flex flex-col justify-between">
                <div>
                  <p className="text-sm sm:text-base italic text-slate-700 leading-relaxed font-serif">
                    "{testimonialsData[testiIndex].quote}"
                  </p>
                  <p className="text-xs text-indigo-700 font-semibold mt-4">
                    Impact Check: {testimonialsData[testiIndex].impactStory}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100/60 mt-4">
                  <div>
                    <span className="font-bold text-slate-850 block leading-tight text-sm">
                      {testimonialsData[testiIndex].name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                      {testimonialsData[testiIndex].role} &mdash; Class of {testimonialsData[testiIndex].program}
                    </span>
                  </div>

                  {/* Carousel navigation buttons */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevTesti}
                      className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200/50 rounded-lg text-slate-600 focus:outline-none"
                      aria-label="Previous testimonial story"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTesti}
                      className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200/50 rounded-lg text-slate-600 focus:outline-none"
                      aria-label="Next testimonial story"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </section>

          </div>
        )}

        {/* TAB 2: PROGRAMS EXPLORER */}
        {activeTab === 'programs' && (
          <section className="animate-fade-in">
            <ProgramExplorer onSelectProgram={handleApplyToProgram} />
          </section>
        )}

        {/* TAB 3: MENTORSHIP MATCHER */}
        {activeTab === 'matcher' && (
          <section className="animate-fade-in">
            <MentorshipMatcher />
          </section>
        )}

        {/* TAB 4: SUPPORT SIMULATOR */}
        {activeTab === 'support' && (
          <section className="animate-fade-in">
            <DonationSimulator />
          </section>
        )}

        {/* TAB 5: APPLICATION CONTACT FORM */}
        {activeTab === 'contact' && (
          <section className="animate-fade-in">
            <ContactForm prefilledProgram={selectedPrefillProgram} />
          </section>
        )}

      </main>

      {/* Styled corporate footer */}
      <Footer />

    </div>
  );
}
