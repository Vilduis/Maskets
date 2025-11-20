import { LucideIcon } from "lucide-react";

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}

// Services Types
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  brief?: string;
  features?: string[];
  highlight?: string;
}

// Team Types
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  email?: string;
}

// Contact Types
export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  link: string;
  description: string;
}

// Social Links Types
export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

// Footer Links Types
export interface FooterLinks {
  empresa: NavItem[];
  servicios: NavItem[];
}

