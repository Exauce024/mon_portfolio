export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: 'web' | 'backend' | 'fullstack' | 'management';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  metrics?: string;
  architectureNotes?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ContactInfo {
  name: string;
  title: string;
  tagline: string;
  availability: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  gitlab: string;
  location: string;
}

export interface ApiResponse<T> {
  status: 'success' | 'error';
  message?: string;
  data?: T;
}
