import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { revealViewport, cardReveal, smoothEase } from '../../lib/motion';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  variant?: 'light' | 'dark';
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick, variant = 'light' }) => {
  const isDark = variant === 'dark';
  
  return (
    <motion.div
      variants={cardReveal}
      viewport={revealViewport}
      initial="hidden"
      whileInView="visible"
      className={`${isDark ? 'bg-brand-navy/40 border-white/10' : 'bg-white border-black/5'} rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.02)] border overflow-hidden`}
    >
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left group transition-colors duration-300"
      >
        <h4 className={`font-serif text-lg md:text-xl ${isDark ? 'text-white group-hover:text-brand-gold' : 'text-brand-navy group-hover:text-brand-gold'} transition-colors`}>
          {question}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28, ease: smoothEase }}
          className={`${isDark ? 'text-white/40' : 'text-brand-graphite/40'} shrink-0 ml-4`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: smoothEase }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.24, ease: smoothEase }}
              className={`px-8 pb-6 ${isDark ? 'text-white/60' : 'text-brand-graphite/60'} leading-relaxed text-sm md:text-base`}
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface AccordionProps {
  items: { q: string; a: string }[];
  variant?: 'light' | 'dark';
}

export default function Accordion({ items, variant = 'light' }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === index}
          variant={variant}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
