export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  actionText: string;
  image: string;
  iconName: string;
  category: string;
  metrics: {
    stat: string;
    label: string;
  }[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface BrandItem {
  name: string;
  svg: string;
}
