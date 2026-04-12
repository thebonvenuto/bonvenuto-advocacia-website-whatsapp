import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, path, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 md:p-10 rounded-[40px] border border-brand-gold/10 premium-shadow flex flex-col h-full group"
    >
      <div className="w-16 h-16 bg-brand-offwhite rounded-2xl flex items-center justify-center text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-brand-navy">{title}</h3>
      <p className="text-brand-graphite/70 text-sm md:text-base leading-relaxed mb-10 flex-grow">
        {description}
      </p>
      <Link
        to={path}
        className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all"
      >
        Saiba mais <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}
