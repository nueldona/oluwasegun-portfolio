declare module 'react-scroll' {
  import { ReactNode, ComponentType } from 'react';

  export const Link: ComponentType<{
    activeClass?: string;
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    containerId?: string;
    delay?: number;
    preventScrollReset?: boolean;
    className?: string;
    children: ReactNode;
    onClick?: () => void;
  }>;

  export const Element: ComponentType<{ name: string; id?: string }>;

  export function animateScroll(options?: { duration?: number; delay?: number; smooth?: boolean }): void;
  
  export const scrollSpy: {
    update: () => void;
  };
}
