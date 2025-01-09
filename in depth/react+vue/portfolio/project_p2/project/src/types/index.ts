export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  logo: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}