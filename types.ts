
export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  schema?: object | object[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription:string;
  image: string;
  features: string[];
  useCases: string[];
  faqs: FAQItem[];
}

export interface Location {
  slug: string;
  name: string;
  state: string;
  zipCodes: string[];
  neighborhoods: string[];
  landmarks: string[];
  mapEmbedUrl: string;
  content: {
    intro: string;
    whyChooseUs: string;
    servicesDescription: string;
  };
}

export interface Attraction {
    slug: string;
    name: string;
    description: string;
    image: string;
    location: string;
}
