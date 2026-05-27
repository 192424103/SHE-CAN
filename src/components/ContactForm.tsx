import React from 'react';
import { Mail, User, MessageSquare, GraduationCap, Send, CornerUpLeft, Check } from 'lucide-react';

interface ContactFormProps {
  prefilledProgram?: string;
}

export default function ContactForm({ prefilledProgram = '' }: ContactFormProps) {
  // Setup fields state
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [programOfInterest, setProgramOfInterest] = React.useState(prefilledProgram);
  const [message, setMessage] = React.useState('');
  const [newsletter, setNewsletter] = React.useState(false);

  // Focus and touched state
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (prefilledProgram) {
      setProgramOfInterest(prefilledProgram);
    }
  }, [prefilledProgram]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!message.trim()) {
      newErrors.message = 'Message text is required.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log('Sending React contact form data:', {
        fullName,
        email,
        programOfInterest,
        message,
        newsletter
      });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setProgramOfInterest('');
    setMessage('');
    setNewsletter(false);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div id="contactFormContainer" className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-205 shadow-xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
      
      {/* Banner / Title Header */}
      <div className="text-center mb-6">
        <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
          Initiate Enrollment Access
        </h2>
        <p className="text-sm text-slate-500 max-w-xs mx-auto mt-1">
          Complete the validated portfolio registry below to submit your application details.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        
        {/* Full Name field */}
        <div>
          <label htmlFor="reactFullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name
          </label>
          <div className="relative flex items-center">
            <User className={`absolute left-3.5 w-4.5 h-4.5 transition-colors ${errors.fullName ? 'text-red-500' : 'text-slate-400'}`} />
            <input
              type="text"
              id="reactFullName"
              placeholder="Nithya Sharma"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) setErrors(prev => ({ ...prev, fullName: '' }));
              }}
              className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-4 transition-all ${
                errors.fullName
                  ? 'border-red-500 bg-red-50/20 focus:ring-red-500/10'
                  : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-505/10'
              }`}
            />
          </div>
          {errors.fullName && (
            <span role="alert" className="block text-[11px] font-semibold text-red-650 mt-1">
              {errors.fullName}
            </span>
          )}
        </div>

        {/* Email Address field */}
        <div>
          <label htmlFor="reactEmail" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <div className="relative flex items-center">
            <Mail className={`absolute left-3.5 w-4.5 h-4.5 transition-colors ${errors.email ? 'text-red-500' : 'text-slate-400'}`} />
            <input
              type="email"
              id="reactEmail"
              placeholder="nithya@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
              }}
              className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-4 transition-all ${
                errors.email
                  ? 'border-red-500 bg-red-50/20 focus:ring-red-500/10'
                  : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-505/10'
              }`}
            />
          </div>
          {errors.email && (
            <span role="alert" className="block text-[11px] font-semibold text-red-650 mt-1">
              {errors.email}
            </span>
          )}
        </div>

        {/* Program of Interest dropdown */}
        <div>
          <label htmlFor="reactProgramSelect" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Path of Interest (Optional)
          </label>
          <div className="relative flex items-center">
            <GraduationCap className="absolute left-3.5 w-4.5 h-4.5 text-slate-400" />
            <select
              id="reactProgramSelect"
              value={programOfInterest}
              onChange={(e) => setProgramOfInterest(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 select-field bg-slate-50/50 border border-slate-205 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-505/10 transition-all"
            >
              <option value="">General Support / Inquire</option>
              <option value="STEM Forward Academy">STEM Forward Academy</option>
              <option value="Women in Code Boot Camp">Women in Code Boot Camp</option>
              <option value="She Incubator and Accelerator">She Incubator and Accelerator</option>
              <option value="Micro-Finance Business Lab">Micro-Finance Business Lab</option>
              <option value="Executive Leadership Circle">Executive Leadership Circle</option>
              <option value="Community Advocates Pathway">Community Advocates Pathway</option>
            </select>
          </div>
        </div>

        {/* Message Input text field */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label htmlFor="reactMessage" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Personal Statement / Message
            </label>
            <span className={`text-[10px] font-mono font-medium ${message.length > 450 ? 'text-red-500 font-bold' : 'text-slate-400'}`}>
              {message.length} / 500
            </span>
          </div>
          <div className="relative flex items-start">
            <MessageSquare className={`absolute left-3.5 top-3 w-4.5 h-4.5 transition-colors ${errors.message ? 'text-red-500' : 'text-slate-400'}`} />
            <textarea
              id="reactMessage"
              placeholder="Briefly state your requirements or learning interest here..."
              value={message}
              maxLength={500}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
              }}
              rows={4}
              className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-xl text-sm text-slate-800 focus:outline-none resize-none focus:ring-4 transition-all ${
                errors.message
                  ? 'border-red-500 bg-red-50/20 focus:ring-red-500/10'
                  : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-505/10'
              }`}
            />
          </div>
          {errors.message && (
            <span role="alert" className="block text-[11px] font-semibold text-red-650 mt-1">
              {errors.message}
            </span>
          )}
        </div>

        {/* Newsletter checkbox */}
        <div className="flex items-center gap-2 mt-1 py-1">
          <input
            type="checkbox"
            id="reactNewsletter"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-505/20 focus:ring-offset-0 focus:outline-none"
          />
          <label htmlFor="reactNewsletter" className="text-xs text-slate-500 font-semibold cursor-pointer select-none">
            Keep me updated on upcoming foundation application cohorts & events
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-750 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
        >
          <span>Submit Register Details</span>
          <Send className="w-3.5 h-3.5" />
        </button>

      </form>

      {/* SUCCESS OVERLAY PANEL MODAL */}
      {isSubmitted && (
        <div className="absolute inset-0 bg-white z-50 flex flex-col justify-center items-center p-6 text-center animate-fade-in" role="dialog" aria-modal="true">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm mb-4">
            <Check className="w-8 h-8 font-black" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1.5">
            Entry Registry Complete
          </h3>
          <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
            Thank you for reaching out, <strong className="font-bold text-slate-700">{fullName}</strong>! Our academic alignment leads will verify your details and connect via <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-indigo-700 font-semibold">{email}</span> within 48 hours.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-100 hover:bg-slate-205 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            <CornerUpLeft className="w-3.5 h-3.5" />
            Submit a New Statement
          </button>
        </div>
      )}

    </div>
  );
}
