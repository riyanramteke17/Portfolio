
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  icon: string;
  level: number; // 0 to 100
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export type Theme = 'light' | 'dark';

export interface SectionProps {
  id: string;
}
