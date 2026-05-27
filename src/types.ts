export interface Program {
  id: string;
  title: string;
  category: 'Tech' | 'Entrepreneurship' | 'Leadership';
  description: string;
  duration: string;
  audience: string;
  skillsAcquired: string[];
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  expertise: string[];
  bio: string;
  avatarSeed: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  program: string;
  quote: string;
  impactStory: string;
}

export interface ContactFormInput {
  fullName: string;
  email: string;
  programOfInterest: string;
  message: string;
  receiveNewsletter: boolean;
}
