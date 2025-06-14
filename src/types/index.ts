export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'design' | 'other';
}
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}