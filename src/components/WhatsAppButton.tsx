import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';
import { smoothEase } from '../lib/motion';

export default function WhatsAppButton() {
  return (
    <>
      {/* Desktop Floating Button */}
      <motion.a
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.45, ease: smoothEase }}
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-medium">
          Atendimento Humano
        </span>
      </motion.a>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-brand-offwhite via-brand-offwhite/90 to-transparent">
        <motion.a
          initial={{ y: 44, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileTap={{ scale: 0.985 }}
          transition={{ duration: 0.42, ease: smoothEase }}
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-brand-navy text-white py-4 px-6 rounded-2xl shadow-xl font-semibold text-lg"
        >
          <MessageCircle size={24} />
          Falar com Especialista
        </motion.a>
      </div>
    </>
  );
}
