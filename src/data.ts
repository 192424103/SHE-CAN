import { Program, Mentor, Testimonial } from './types';

export const programsData: Program[] = [
  {
    id: 'prog1',
    title: 'STEM Forward Academy',
    category: 'Tech',
    description: 'A cohort-based programming and computer engineering school equipping young girls with fundamental web development, Python, and data analytics skills.',
    duration: '12 Weeks (Part-Time)',
    audience: 'High school girls (Ages 14-18)',
    skillsAcquired: ['HTML/CSS', 'Javascript', 'Python Core', 'Technical Problem Solving']
  },
  {
    id: 'prog2',
    title: 'Women in Code Boot Camp',
    category: 'Tech',
    description: 'An immersive workforce placement bootcamp instructing collegiate and non-traditional learners on modern full-stack developer frameworks.',
    duration: '24 Weeks (Full-Time)',
    audience: 'College students & career switchers',
    skillsAcquired: ['React.js', 'Node.js/Express', 'Databases', 'Git & CI/CD workflow']
  },
  {
    id: 'prog3',
    title: 'She Incubator and Accelerator',
    category: 'Entrepreneurship',
    description: 'A startup hatchery providing early-stage female-founded micro-ventures with initial seed funding resources, legal formation guidance, and business plan coaching.',
    duration: '6 Months',
    audience: 'Aspiring female business founders',
    skillsAcquired: ['Financial Forecasting', 'Pitch Presentations', 'Legal Formations', 'Go-To-Market Strategy']
  },
  {
    id: 'prog4',
    title: 'Micro-Finance Business Lab',
    category: 'Entrepreneurship',
    description: 'Practical, highly tactile business clinics helping localized self-employed female vendors elevate operations via basic accounting, inventory, and online sales tools.',
    duration: '6 Weeks',
    audience: 'Local small business owners',
    skillsAcquired: ['Cash Flow Management', 'Digital Ledger Systems', 'Micro-advertising', 'Inventory Ops']
  },
  {
    id: 'prog5',
    title: 'Executive Leadership Circle',
    category: 'Leadership',
    description: 'High-impact development pipeline designed to promote mid-career professional women into corporate boardrooms, public speaking panels, and senior executive suites.',
    duration: '9 Months',
    audience: 'Mid-level female managers & leads',
    skillsAcquired: ['Negotiation Strategy', 'Public Speaking', 'Executive Aura', 'Strategic Planning']
  },
  {
    id: 'prog6',
    title: 'Community Advocates Pathway',
    category: 'Leadership',
    description: 'Empowering local community organizers to address gender parity issues, drive non-profit initiatives, and lead public policy advocacy frameworks.',
    duration: '16 Weeks',
    audience: 'Civic minds & localized advocates',
    skillsAcquired: ['Policy Analysis', 'Campaign Design', 'Coalition Building', 'Public Relations']
  }
];

export const mentorsData: Mentor[] = [
  {
    id: 'm1',
    name: 'Sarah Jenkins',
    role: 'Principal Software Engineer',
    company: 'Google Cloud Platform',
    expertise: ['AI/ML Systems', 'System Architecture', 'Career Pivoting'],
    bio: 'Sarah has over 12 years of experience leading scale system engineering workflows and passionate about onboarding high school women into computing sciences.',
    avatarSeed: 'sarah'
  },
  {
    id: 'm2',
    name: 'Elena Rostova',
    role: 'Venture Capital Partner',
    company: 'Aura Capital Ventures',
    expertise: ['Angel Investing', 'Pitch Decks', 'Seed Funding'],
    bio: 'Elena is a champion for female founders, having facilitated over $45M in early-stage investment portfolios focusing on sustainable technology integrations.',
    avatarSeed: 'elena'
  },
  {
    id: 'm3',
    name: 'Nandini Iyer',
    role: 'Director of Product Innovation',
    company: 'Stripe Payments',
    expertise: ['Product Leadership', 'Agile Operations', 'Public Speaking'],
    bio: 'Nandini bridges design, engineering, and commerce. She is dedicated to guiding first-generation collegiate women into secure tech project leadership positions.',
    avatarSeed: 'nandini'
  },
  {
    id: 'm4',
    name: 'Dr. Amara Okoro',
    role: 'Full Professor of Public Policy',
    company: 'State University',
    expertise: ['Civic Leadership', 'Policy Writing', 'Conflict Advocacy'],
    bio: 'Dr. Okoro provides foundational strategies in negotiation and grass-roots communication to the emerging female advocates throughout the community.',
    avatarSeed: 'amara'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Amina Al-Mansoor',
    role: 'Junior Full Stack Developer',
    program: 'Women in Code Boot Camp',
    quote: 'The mentor guidance and cohort support completely transformed my career trajectory. I went from retail ops to coding cloud infrastructure within a year!',
    impactStory: 'Amina now works at a scaling FinTech start-up, mentoring incoming high school girls.'
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    role: 'Co-Founder & CEO',
    program: 'She Incubator and Accelerator',
    quote: 'Establishing a corporate business plan felt insurmountable until the incubator team systematically evaluated my financial model and legal outline step-by-step.',
    impactStory: 'Priya successfully raised $150K seed funding for her female wellness app.'
  },
  {
    id: 't3',
    name: 'Clara Dupond',
    role: 'Senior Project Manager',
    program: 'Executive Leadership Circle',
    quote: 'This circle gave me the vocabulary and psychological safety to seek a VP seat. The mock boards and wage negotiation exercises were highly practical.',
    impactStory: 'Clara secured a promotion with a 30% increase in total package within 3 months.'
  }
];

export const statisticsHistory = [
  { year: '2021', scholars: 120, startups: 12, executivePlacements: 8 },
  { year: '2022', scholars: 240, startups: 22, executivePlacements: 18 },
  { year: '2023', scholars: 410, startups: 35, executivePlacements: 31 },
  { year: '2024', scholars: 650, startups: 54, executivePlacements: 52 },
  { year: '2025', scholars: 980, startups: 82, executivePlacements: 78 },
  { year: '2026', scholars: 1450, startups: 115, executivePlacements: 110 },
];
