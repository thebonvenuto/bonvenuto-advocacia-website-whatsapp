import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function WhatsAppButton() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 140);
    return () => window.clearTimeout(id);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Desktop Floating Button */}
      <a
        id="consulta-cta-meio"
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl items-center justify-center group transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.97]"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-medium">
          Atendimento Humano
        </span>
      </a>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-brand-offwhite via-brand-offwhite/90 to-transparent">
        <a
          id="consulta-cta-sticky-mobile"
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-brand-navy text-white py-4 px-6 rounded-2xl shadow-xl font-semibold text-lg transition-transform duration-200 ease-out active:scale-[0.985]"
        >
          <MessageCircle size={24} />
          Falar com Especialista
        </a>
      </div>
    </>
  );
}
