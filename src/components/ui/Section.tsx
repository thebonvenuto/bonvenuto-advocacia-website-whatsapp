import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'offwhite' | 'navy' | 'none';
}

export default function Section({ children, className = '', id, bg = 'none' }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    offwhite: 'bg-brand-offwhite',
    navy: 'bg-brand-navy text-white',
    none: ''
  };

  return (
    <section 
      id={id} 
      className={`section-padding ${bgClasses[bg]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
