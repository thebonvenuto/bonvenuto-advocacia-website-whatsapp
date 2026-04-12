import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
}

export default function FinalCTA({ 
  title = "Não deixe para depois o que é direito do seu filho.",
  subtitle = "Estamos prontos para ouvir sua história e oferecer o caminho jurídico mais seguro e humano."
}: FinalCTAProps) {
  return (
    <section className="section-padding bg-brand-navy relative overflow-hidden">
      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xl px-12 py-6"
          >
            <MessageCircle size={28} />
            Iniciar Atendimento Agora
          </a>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
