import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

export default function StickyWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        <motion.a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl premium-shadow group"
        >
          <span className="hidden md:block font-bold uppercase tracking-widest text-xs">
            Falar com Especialista
          </span>
          <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}
