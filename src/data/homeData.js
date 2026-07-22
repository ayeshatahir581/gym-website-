export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Membership', to: '/membership' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: '2500+', label: 'Active Members', icon: 'users' },
  { value: '25+', label: 'Expert Trainers', icon: 'trophy' },
  { value: '18+', label: 'Fitness Programs', icon: 'dumbbell' },
  { value: '10+', label: 'Years Experience', icon: 'shield' },
]

export const programs = [
  {
    title: 'Strength Training',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    alt: 'Athlete performing heavy barbell exercises in a premium gym',
    difficulty: 'Advanced',
    duration: '55 min',
    description: 'Build raw power and discipline through progressive resistance training.',
  },
  {
    title: 'Bodybuilding',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    alt: 'Bodybuilder training with weights in a modern fitness facility',
    difficulty: 'Intermediate',
    duration: '60 min',
    description: 'Focused hypertrophy sessions designed for increased muscle definition and size.',
  },
  {
    title: 'Weight Loss',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    alt: 'Person working out in an energetic cardio and weight loss session',
    difficulty: 'Beginner',
    duration: '45 min',
    description: 'High-impact calorie burning with guided routines and sustainable habits.',
  },
  {
    title: 'CrossFit',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    alt: 'Athletes pushing through an intense CrossFit workout',
    difficulty: 'Advanced',
    duration: '50 min',
    description: 'Functional conditioning that improves agility, stamina, and athletic performance.',
  },
  {
    title: 'Cardio',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
    alt: 'Runner training on a treadmill in a sleek gym interior',
    difficulty: 'All Levels',
    duration: '40 min',
    description: 'Low-impact and high-energy endurance sessions for better heart health.',
  },
  {
    title: 'Yoga',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80',
    alt: 'Calming yoga practice inside a bright fitness studio',
    difficulty: 'Beginner',
    duration: '50 min',
    description: 'Restore balance, mobility, and mindfulness with elite guided sessions.',
  },
]

export const features = [
  {
    title: 'Modern Equipment',
    description: 'Top-tier functional machines and free weights curated for high-performance training.',
  },
  {
    title: 'Certified Trainers',
    description: 'Experienced coaches who keep your technique sharp, safe, and progressive.',
  },
  {
    title: 'Personalized Plans',
    description: 'Custom programming that adapts to your goals, schedule, and current fitness level.',
  },
  {
    title: 'Flexible Timings',
    description: 'Train on your terms with open gym access and morning to evening class options.',
  },
  {
    title: 'Nutrition Guidance',
    description: 'Supportive planning tools and expert insights to keep your progress on track.',
  },
  {
    title: 'Clean Environment',
    description: 'A thoughtfully designed facility that feels premium, focused, and motivating.',
  },
]

export const trainers = [
  {
    name: 'Ava Carter',
    specialty: 'Strength & Conditioning',
    experience: '8 years',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    alt: 'Professional female strength trainer smiling in a gym',
  },
  {
    name: 'Noah Bennett',
    specialty: 'Bodybuilding Coach',
    experience: '11 years',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    alt: 'Professional male bodybuilding trainer posing in a studio',
  },
  {
    name: 'Mia Brooks',
    specialty: 'Performance Yoga',
    experience: '6 years',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    alt: 'Female yoga and mobility instructor in a premium health studio',
  },
  {
    name: 'Liam Ross',
    specialty: 'HIIT & Cardio',
    experience: '9 years',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    alt: 'Male trainer with athletic energy in a cardio training space',
  },
]

export const pricingPlans = [
  {
    name: 'Basic',
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: 'Affordable beginner support for steady progress.',
    featured: false,
    features: ['Gym floor access', '2 group classes/week', 'Basic fitness assessment'],
    excluded: ['Personal trainer', 'Recovery lounge', 'Nutrition plan'],
  },
  {
    name: 'Pro',
    monthlyPrice: 79,
    yearlyPrice: 790,
    description: 'Our most popular plan for serious transformation.',
    featured: true,
    features: ['Unlimited classes', 'Coach check-ins', 'Recovery lounge access', 'Progress tracking'],
    excluded: ['Private coaching', 'Meal plan customization'],
  },
  {
    name: 'Elite',
    monthlyPrice: 129,
    yearlyPrice: 1290,
    description: 'Premium unlimited access with tailored support.',
    featured: false,
    features: ['Everything in Pro', 'Private trainer sessions', 'Priority booking', 'Nutrition strategy'],
    excluded: ['No exclusions'],
  },
]

export const schedule = [
  {
    day: 'Mon',
    className: 'Strength Training',
    trainer: 'Ava Carter',
    time: '6:00 AM',
    duration: '55 min',
  },
  {
    day: 'Tue',
    className: 'HIIT',
    trainer: 'Liam Ross',
    time: '7:30 PM',
    duration: '45 min',
  },
  {
    day: 'Wed',
    className: 'Yoga',
    trainer: 'Mia Brooks',
    time: '6:30 PM',
    duration: '50 min',
  },
  {
    day: 'Thu',
    className: 'CrossFit',
    trainer: 'Noah Bennett',
    time: '6:00 PM',
    duration: '60 min',
    featured: true,
  },
  {
    day: 'Fri',
    className: 'Cardio Blast',
    trainer: 'Liam Ross',
    time: '5:30 PM',
    duration: '40 min',
  },
  {
    day: 'Sat',
    className: 'Functional Training',
    trainer: 'Ava Carter',
    time: '9:00 AM',
    duration: '50 min',
  },
]

export const testimonials = [
  {
    name: 'Sophia Martinez',
    duration: '8 months member',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
    alt: 'Happy gym member with a confident pose',
    quote: 'IronPulse helped me rebuild confidence and strength. The coaching is premium, motivating, and results-driven.',
  },
  {
    name: 'James Wilson',
    duration: '5 months member',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80',
    alt: 'Satisfied male member standing in a gym setting',
    quote: 'The environment feels elite from the moment you walk in. Every class is intentional and every coach knows their craft.',
  },
  {
    name: 'Emily Davis',
    duration: '12 months member',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    alt: 'Confident female gym member smiling after training',
    quote: 'From the equipment to program support, everything feels refined and motivating. I finally have a system that works.',
  },
]

export const contactDetails = {
  address: '18 Iron Avenue, Downtown Fitness District',
  phone: '+1 (800) 555-0148',
  email: 'hello@ironpulsegym.com',
  hours: 'Mon - Sun · 5:00 AM - 11:00 PM',
}

export const imageUrls = {
  hero:
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80',
  about:
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  cta:
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=80',
}
