export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Mixed Use' | 'Industrial' | 'Infrastructure';
  location: string;
  city: string;
  country: string;
  year: number | string;
  area: string;
  status: 'Completed' | 'Under Construction' | 'Engineering Phase';
  client: string;
  leadArchitect: string;
  coverImage: string;
  galleryImages: string[];
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  specs: {
    label: string;
    value: string;
  }[];
  milestones: {
    date: string;
    phase: string;
    description: string;
    completed: boolean;
  }[];
}

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  capabilities: string[];
  deliverables: string[];
  technicalStandards: string[];
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  summary: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
  content?: string[];
}

export interface TimelinePhase {
  id: string;
  phaseDate: string;
  title: string;
  stageName: string;
  completionPercent: number;
  image: string;
  technicalDetails: {
    concretePoured: string;
    steelInstalled: string;
    workforceOnSite: string;
    safetyIncidentRate: string;
  };
  narrative: string;
}
