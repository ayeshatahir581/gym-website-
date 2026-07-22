export const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'A simple, flexible membership for beginners building confidence inside the gym.',
    monthlyPrice: 39,
    yearlyPrice: 380,
    badge: null,
    features: [
      'Gym floor access',
      'Locker room access',
      'Basic fitness assessment',
      'Limited group classes',
    ],
    excluded: ['Unlimited classes', 'Personal training', 'Recovery zone'],
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    alt: 'Basic gym floor environment',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'The most popular option for members chasing measurable performance and consistency.',
    monthlyPrice: 79,
    yearlyPrice: 760,
    badge: 'Most Popular',
    features: [
      'Full gym access',
      'Unlimited group classes',
      'Personal fitness assessment',
      'Nutrition guidance',
      'Progress tracking',
    ],
    excluded: ['Dedicated personal trainer', 'Priority booking'],
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    alt: 'Premium Pro gym interior',
  },
  {
    id: 'elite',
    name: 'Elite',
    description: 'A premium membership for members who want total support, guidance, and faster results.',
    monthlyPrice: 129,
    yearlyPrice: 1240,
    badge: 'Elite',
    features: [
      'Everything in Pro',
      'Personal training sessions',
      'Priority booking',
      'Recovery zone access',
      'Custom workout plan',
    ],
    excluded: ['No major exclusions'],
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
    alt: 'Elite premium fitness experience',
  },
]

export const comparisonRows = [
  {
    label: 'Gym access',
    basic: true,
    pro: true,
    elite: true,
  },
  {
    label: 'Group classes',
    basic: true,
    pro: true,
    elite: true,
  },
  {
    label: 'Personal assessment',
    basic: true,
    pro: true,
    elite: true,
  },
  {
    label: 'Nutrition guidance',
    basic: false,
    pro: true,
    elite: true,
  },
  {
    label: 'Personal trainer sessions',
    basic: false,
    pro: false,
    elite: true,
  },
  {
    label: 'Progress tracking',
    basic: false,
    pro: true,
    elite: true,
  },
  {
    label: 'Recovery zone',
    basic: false,
    pro: false,
    elite: true,
  },
  {
    label: 'Priority booking',
    basic: false,
    pro: false,
    elite: true,
  },
]

export const membershipBenefits = [
  {
    title: 'No Hidden Charges',
    description: 'Transparent pricing with no surprise fees or confusing add-ons.',
    icon: 'receipt',
  },
  {
    title: 'Flexible Plans',
    description: 'Choose the billing cadence that fits your routine and budget.',
    icon: 'calendar',
  },
  {
    title: 'Expert Support',
    description: 'Our coaching team helps you stay confident, informed, and consistent.',
    icon: 'support',
  },
  {
    title: 'Modern Equipment',
    description: 'Premium spaces, leading tools, and performance-driven environments.',
    icon: 'bolt',
  },
  {
    title: 'Community Access',
    description: 'Join a motivating network of members and trainers with shared goals.',
    icon: 'users',
  },
  {
    title: 'Easy Plan Upgrades',
    description: 'Move to a higher tier whenever your training goals evolve.',
    icon: 'arrow',
  },
]

export const membershipFAQs = [
  {
    question: 'Can I cancel my membership?',
    answer: 'Yes. You can cancel anytime with a written notice and the standard membership terms outlined at sign-up.',
  },
  {
    question: 'Can I upgrade my plan?',
    answer: 'Absolutely. Members can upgrade anytime and receive the difference applied to the next billing cycle.',
  },
  {
    question: 'Is there a joining fee?',
    answer: 'No joining fee is required for standard sign-ups. A one-time onboarding evaluation may be available on select plans.',
  },
  {
    question: 'Are personal training sessions included?',
    answer: 'Personal training sessions are included in the Elite plan and can be added as a separate option for other tiers.',
  },
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes, freeze options are available for short-term travel or health-related breaks where eligibility applies.',
  },
  {
    question: 'Do you offer student discounts?',
    answer: 'Student and youth-specific offers may be active seasonally. Contact the front desk for current availability.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept major cards, bank transfers, and selected digital wallets for monthly and yearly billing.',
  },
  {
    question: 'Can I try the gym before joining?',
    answer: 'Yes. A guided trial visit can be arranged so you can experience the facility and talk with a coach before enrolling.',
  },
]
