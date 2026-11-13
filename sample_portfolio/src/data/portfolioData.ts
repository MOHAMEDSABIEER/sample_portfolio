import { ServiceItem, TestimonialItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'creative-writing',
    title: 'Creative Writing & Poetry',
    tagline: 'Verse that moves, stories that linger.',
    description: 'Verse that moves, stories that linger.',
    actionText: 'View Samples',
    image: '/assets/portfolio/card1_creative_writing.png',
    iconName: 'PenTool',
    category: 'Literature & Copy',
    metrics: [
      { stat: '140K+', label: 'Readers Reached' },
      { stat: '2x', label: 'National Anthologies' },
      { stat: '2024', label: 'Quill Craft Award' },
    ],
  },
  {
    id: 'script-writing',
    title: 'Script Writing & Direction',
    tagline: 'From concept to screen.',
    description: 'From concept to screen.',
    actionText: 'Watch Projects',
    image: '/assets/portfolio/card2_script_writing.png',
    iconName: 'Clapperboard',
    category: 'Film & Screenplay',
    metrics: [
      { stat: '8.5M+', label: 'Video Views' },
      { stat: '4', label: 'Festival Selections' },
      { stat: '100%', label: 'Concept to Execution' },
    ],
  },
  {
    id: 'program-producer',
    title: 'Program Producer & Anchoring',
    tagline: 'Engaging content, meaningful conversations.',
    description: 'Engaging content, meaningful conversations.',
    actionText: 'Watch Shows',
    image: '/assets/portfolio/card3_program_producer.png',
    iconName: 'Mic',
    category: 'Broadcast & Podcasting',
    metrics: [
      { stat: '120+', label: 'Broadcast Episodes' },
      { stat: '250K', label: 'Monthly Listeners' },
      { stat: '4.9★', label: 'Apple Podcasts Rating' },
    ],
  },
  {
    id: 'social-media-handling',
    title: 'Social Media Page Handling & Development',
    tagline: 'Build. Manage. Grow.',
    description: 'Build. Manage. Grow.',
    actionText: 'Explore',
    image: '/assets/portfolio/card4_social_media.png',
    iconName: 'BarChart3',
    category: 'Digital Growth',
    metrics: [
      { stat: '2.1M+', label: 'Followers Cultivated' },
      { stat: '14.8%', label: 'Average Engagement' },
      { stat: '4.2x', label: 'Lead Growth' },
    ],
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    tagline: 'Authentic voices. Real impact.',
    description: 'Authentic voices. Real impact.',
    actionText: 'View Campaigns',
    image: '/assets/portfolio/card5_influencer_marketing.png',
    iconName: 'Megaphone',
    category: 'Influencer Strategy',
    metrics: [
      { stat: '42M+', label: 'Campaign Impressions' },
      { stat: '4.3x', label: 'Verified ROAS' },
      { stat: '95%', label: 'Creator Compliance' },
    ],
  },
  {
    id: 'brand-collaboration',
    title: 'Brand Collaboration',
    tagline: 'Creating mutual value.',
    description: 'Creating mutual value.',
    actionText: 'See Partners',
    image: '/assets/portfolio/card6_brand_collaboration.png',
    iconName: 'Handshake',
    category: 'Strategic Alliances',
    metrics: [
      { stat: '$1.2M+', label: 'Value Generated' },
      { stat: '18+', label: 'Enterprise Alliances' },
      { stat: '0', label: 'Compromised Integrity' },
    ],
  },
  {
    id: 'ad-campaign',
    title: 'Ad Campaign',
    tagline: 'Campaigns that deliver results.',
    description: 'Campaigns that deliver results.',
    actionText: 'View Work',
    image: '/assets/portfolio/card7_ad_campaign.png',
    iconName: 'MonitorPlay',
    category: 'Advertising & Commercials',
    metrics: [
      { stat: '38M+', label: 'Omnichannel Reach' },
      { stat: '28%', label: 'Lower Acquisition Cost' },
      { stat: '2024', label: 'Best Digital Ad Award' },
    ],
  },
  {
    id: 'social-growth-strategy',
    title: 'Social Media Growth & Strategy',
    tagline: 'Strategy. Engagement. Growth.',
    description: 'Strategy. Engagement. Growth.',
    actionText: 'Learn More',
    image: '/assets/portfolio/card8_growth_strategy.png',
    iconName: 'TrendingUp',
    category: 'Analytics & Strategy',
    metrics: [
      { stat: '+480%', label: 'Organic Reach Surge' },
      { stat: '850K+', label: 'Newsletter Subscribers' },
      { stat: '15+', label: 'Proven Viral Frameworks' },
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote:
      "Vikram's creativity and strategic mindset helped us reach new heights.",
    name: 'Riya Mehta',
    role: 'Marketing Head',
    company: 'Brand X',
    avatar: '/assets/portfolio/client_riya.png',
  },
  {
    quote: 'A true professional with a passion for storytelling.',
    name: 'Arjun Kapoor',
    role: 'Director',
    company: 'Creative Studio',
    avatar: '/assets/portfolio/client_arjun.png',
  },
];

export const QUICK_SERVICES = [
  {
    id: 'creative-writing',
    name: 'Creative Writing & Poetry',
    icon: 'Feather',
  },
  {
    id: 'script-writing',
    name: 'Script Writing & Direction',
    icon: 'Clapperboard',
  },
  {
    id: 'program-producer',
    name: 'Program Producer & Anchoring',
    icon: 'Mic',
  },
  {
    id: 'social-media-handling',
    name: 'Social Media Page Handling & Development',
    icon: 'BarChart3',
  },
  {
    id: 'influencer-marketing',
    name: 'Influencer Marketing',
    icon: 'Megaphone',
  },
  {
    id: 'brand-collaboration',
    name: 'Brand Collaboration',
    icon: 'Handshake',
  },
  {
    id: 'ad-campaign',
    name: 'Ad Campaign',
    icon: 'MonitorPlay',
  },
  {
    id: 'social-growth-strategy',
    name: 'Social Media Growth & Strategy',
    icon: 'TrendingUp',
  },
];
