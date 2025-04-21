import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

declare global {
  interface SidebarItem {
    key: string;
    title: string;
    href?: string;
    links?: SidebarSubItem[];
    number?: number;
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>> &
      RefAttributes<SVGAElement>;
  }

  interface SidebarSubItem {
    key: string;
    title: string;
    href: string;
  }
}

export {};
