
import React from 'react';
import { 
  Code2, 
  Terminal, 
  Globe, 
  Database, 
  Layers, 
  Cpu, 
  Github, 
  Layout, 
  Smartphone, 
  Search,
  MessageSquare,
  Package
} from 'lucide-react';
import { Skill, Project } from './types';

export const SKILLS: Skill[] = [
  { name: 'JavaScript', category: 'frontend', icon: 'Code2', level: 95 },
  { name: 'Python', category: 'backend', icon: 'Terminal', level: 85 },
  { name: 'React', category: 'frontend', icon: 'Layers', level: 90 },
  { name: 'Firebase', category: 'backend', icon: 'Package', level: 80 },
  { name: 'MongoDB', category: 'backend', icon: 'Database', level: 75 },
  { name: 'HTML5', category: 'frontend', icon: 'Layout', level: 98 },
  { name: 'CSS3', category: 'frontend', icon: 'Globe', level: 95 },
  { name: 'Git', category: 'tools', icon: 'Github', level: 90 },
  { name: 'REST APIs', category: 'backend', icon: 'Cpu', level: 92 },
  { name: 'Responsive Design', category: 'frontend', icon: 'Smartphone', level: 95 },
  { name: 'Problem Solving', category: 'soft', icon: 'Search', level: 90 },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus E-Commerce',
    description: 'A full-featured e-commerce platform built with React and MongoDB, featuring real-time stock updates and stripe integration.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'Crypto Pulse',
    description: 'Real-time cryptocurrency tracker with interactive charts and price alerts using external exchange APIs.',
    image: 'https://picsum.photos/seed/crypto/800/600',
    tags: ['JavaScript', 'D3.js', 'REST API', 'Tailwind'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'DevSocial Network',
    description: 'A social media platform specifically for developers to share snippets and collaborate on open-source projects.',
    image: 'https://picsum.photos/seed/social/800/600',
    tags: ['React', 'Firebase', 'Redux', 'Material UI'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'AI Task Assistant',
    description: 'A productivity tool that uses GPT-based models to categorize and prioritize daily tasks based on user intent.',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

export const getIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    Code2: <Code2 size={20} />,
    Terminal: <Terminal size={20} />,
    Globe: <Globe size={20} />,
    Database: <Database size={20} />,
    Layers: <Layers size={20} />,
    Cpu: <Cpu size={20} />,
    Github: <Github size={20} />,
    Layout: <Layout size={20} />,
    Smartphone: <Smartphone size={20} />,
    Search: <Search size={20} />,
    MessageSquare: <MessageSquare size={20} />,
    Package: <Package size={20} />,
  };
  return icons[iconName] || <Code2 size={20} />;
};
