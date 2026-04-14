import ServiceLayout from '../components/ServiceLayout';
import { Ban, ListChecks, AlertTriangle, ShieldCheck, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import guardaConvivenciaHeroImage from '../assets/Guarda e Conviv\u00eancia hero (2).png';

export default function GuardaConvivencia() {
  return (
    <ServiceLayout
      title={<>Segurança jurídica para a <span className="italic">convivência</span> e a guarda do seu filho.</>}
      subtitle="Atuamos com discrição e foco no bem-estar da criança, garantindo que o vínculo afetivo seja preservado com total segurança jurídica."
      heroImage={guardaConvivenciaHeroImage}
      heroPrimaryButtonText="Falar com um Especialista"
      heroPrimaryButtonId="consulta-cta-hero-guarda-convivencia"
      heroPrimaryButtonVariant="black"
      description="A guarda é, acima de tudo, uma responsabilidade compartilhada. Atuamos para definir regimes de convivência que respeitem os laços afetivos e garantam a estabilidade emocional da criança, buscando sempre o melhor para o seu desenvolvimento."
      quote="A prioridade é sempre o superior interesse do menor."
      quoteIcon={<ShieldCheck size={24} />}
      situationsTitle="Quando buscar orientação?"
      situationsSubtitle="Identifique se você está vivenciando uma destas situações e precisa de suporte jurídico especializado."
      situations={[
        {
          title: 'Dificuldade de Convivência',
          desc: 'Quando o contato com o filho é impedido ou dificultado sem justificativa, ferindo o direito da criança.',
          icon: <Ban size={24} />,
          variant: 'white'
        },
        {
          title: 'Falta de Regulamentação',
          desc: 'A ausência de uma decisão judicial gera insegurança e conflitos sobre horários e responsabilidades.',
          icon: <ListChecks size={24} />,
          variant: 'white'
        },
        {
          title: 'Necessidade de Revisão',
          desc: 'Situações que demandam a alteração da guarda para garantir a proteção e o bem-estar do menor.',
          icon: <AlertTriangle size={24} />,
          variant: 'white'
        }
      ]}
      showHowItWorksVisual={false}
      faqTitle="Dúvidas Frequentes"
      faqSubtitle="Respostas fundamentais para o seu primeiro contato."
      faq={[
        { 
          q: 'Como funciona o processo de guarda?', 
          a: 'O processo define a residência da criança e como as decisões sobre sua vida serão tomadas, priorizando sempre o seu bem-estar físico e emocional.' 
        },
        { 
          q: 'E se não houver acordo entre os pais?', 
          a: 'Na ausência de acordo, a decisão é tomada com base em avaliações profissionais, buscando sempre a solução que melhor atenda aos interesses da criança.' 
        },
        { 
          q: 'O que define o interesse do menor?', 
          a: 'São considerados fatores como estabilidade emocional, rotina escolar e a capacidade de cada genitor em oferecer um ambiente saudável e seguro.' 
        }
      ]}
      faqSideCard={
        <div className="bg-[#111827] rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-6 leading-tight">
              Proteja o bem-estar do seu filho
            </h2>
            <p className="text-white/60 text-base mb-10 leading-relaxed">
              Converse conosco para entender os caminhos legais para regularizar a convivência e a guarda.
            </p>
            <a
              id="consulta-cta-faq-guarda-convivencia"
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FCD34D] text-[#111827] text-sm px-8 py-4 inline-flex items-center justify-center rounded-lg font-bold uppercase tracking-widest hover:bg-white transition-colors w-full"
            >
              <MessageCircle size={18} className="mr-3" />
              Falar com um Especialista no WhatsApp
            </a>
          </div>
          {/* Decorative background element */}
          <div className="absolute right-0 bottom-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />
          </div>
        </div>
      }
      finalCtaTitle={<>Assegure o direito de <br />convivência do seu filho.</>}
      finalCtaSubtitle="Estamos prontos para orientar seus próximos passos com discrição e foco no bem-estar da sua família."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
      finalCtaButtonId="consulta-cta-final-guarda-convivencia"
    />
  );
}


