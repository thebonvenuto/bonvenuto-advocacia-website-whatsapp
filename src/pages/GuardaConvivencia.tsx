import ServiceLayout from '../components/ServiceLayout';
import { Ban, ListChecks, AlertTriangle, ShieldCheck, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import guardaConvivenciaHeroImage from '../assets/Guarda e Conviv\u00eancia hero (2).png';
import guardaConvivenciaHeroMobile from '../assets/optimized/hero-guarda-convivencia-mobile.avif';
import guardaConvivenciaHeroMobileWebp from '../assets/optimized/hero-guarda-convivencia-mobile.webp';
import guardaConvivenciaHeroDesktop from '../assets/optimized/hero-guarda-convivencia-desktop.avif';
import guardaConvivenciaHeroDesktopWebp from '../assets/optimized/hero-guarda-convivencia-desktop.webp';

export default function GuardaConvivencia() {
  return (
    <ServiceLayout
      title={<>SeguranÃƒÆ’Ã‚Â§a jurÃƒÆ’Ã‚Â­dica para a <span className="italic">convivÃƒÆ’Ã‚Âªncia</span> e a guarda do seu filho.</>}
      subtitle="Atuamos com discriÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e foco no bem-estar da crianÃƒÆ’Ã‚Â§a, garantindo que o vÃƒÆ’Ã‚Â­nculo afetivo seja preservado com total seguranÃƒÆ’Ã‚Â§a jurÃƒÆ’Ã‚Â­dica."
      heroImage={guardaConvivenciaHeroImage}
      heroImageMobile={guardaConvivenciaHeroMobile}
      heroImageDesktop={guardaConvivenciaHeroDesktop}
      heroImageWebpMobile={guardaConvivenciaHeroMobileWebp}
      heroImageWebpDesktop={guardaConvivenciaHeroDesktopWebp}
      heroPrimaryButtonText="Falar com um Especialista"
      heroPrimaryButtonId="consulta-cta-hero-guarda-convivencia"
      heroPrimaryButtonVariant="black"
      description="A guarda ÃƒÆ’Ã‚Â©, acima de tudo, uma responsabilidade compartilhada. Atuamos para definir regimes de convivÃƒÆ’Ã‚Âªncia que respeitem os laÃƒÆ’Ã‚Â§os afetivos e garantam a estabilidade emocional da crianÃƒÆ’Ã‚Â§a, buscando sempre o melhor para o seu desenvolvimento."
      quote="A prioridade ÃƒÆ’Ã‚Â© sempre o superior interesse do menor."
      quoteIcon={<ShieldCheck size={24} />}
      situationsTitle="Quando buscar orientaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o?"
      situationsSubtitle="Identifique se vocÃƒÆ’Ã‚Âª estÃƒÆ’Ã‚Â¡ vivenciando uma destas situaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes e precisa de suporte jurÃƒÆ’Ã‚Â­dico especializado."
      situations={[
        {
          title: 'Dificuldade de ConvivÃƒÆ’Ã‚Âªncia',
          desc: 'Quando o contato com o filho ÃƒÆ’Ã‚Â© impedido ou dificultado sem justificativa, ferindo o direito da crianÃƒÆ’Ã‚Â§a.',
          icon: <Ban size={24} />,
          variant: 'white'
        },
        {
          title: 'Falta de RegulamentaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o',
          desc: 'A ausÃƒÆ’Ã‚Âªncia de uma decisÃƒÆ’Ã‚Â£o judicial gera inseguranÃƒÆ’Ã‚Â§a e conflitos sobre horÃƒÆ’Ã‚Â¡rios e responsabilidades.',
          icon: <ListChecks size={24} />,
          variant: 'white'
        },
        {
          title: 'Necessidade de RevisÃƒÆ’Ã‚Â£o',
          desc: 'SituaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes que demandam a alteraÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o da guarda para garantir a proteÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e o bem-estar do menor.',
          icon: <AlertTriangle size={24} />,
          variant: 'white'
        }
      ]}
      showHowItWorksVisual={false}
      faqTitle="DÃƒÆ’Ã‚Âºvidas Frequentes"
      faqSubtitle="Respostas fundamentais para o seu primeiro contato."
      faq={[
        { 
          q: 'Como funciona o processo de guarda?', 
          a: 'O processo define a residÃƒÆ’Ã‚Âªncia da crianÃƒÆ’Ã‚Â§a e como as decisÃƒÆ’Ã‚Âµes sobre sua vida serÃƒÆ’Ã‚Â£o tomadas, priorizando sempre o seu bem-estar fÃƒÆ’Ã‚Â­sico e emocional.' 
        },
        { 
          q: 'E se nÃƒÆ’Ã‚Â£o houver acordo entre os pais?', 
          a: 'Na ausÃƒÆ’Ã‚Âªncia de acordo, a decisÃƒÆ’Ã‚Â£o ÃƒÆ’Ã‚Â© tomada com base em avaliaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes profissionais, buscando sempre a soluÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o que melhor atenda aos interesses da crianÃƒÆ’Ã‚Â§a.' 
        },
        { 
          q: 'O que define o interesse do menor?', 
          a: 'SÃƒÆ’Ã‚Â£o considerados fatores como estabilidade emocional, rotina escolar e a capacidade de cada genitor em oferecer um ambiente saudÃƒÆ’Ã‚Â¡vel e seguro.' 
        }
      ]}
      faqSideCard={
        <div className="bg-[#111827] rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-6 leading-tight">
              Proteja o bem-estar do seu filho
            </h2>
            <p className="text-white/60 text-base mb-10 leading-relaxed">
              Converse conosco para entender os caminhos legais para regularizar a convivÃƒÆ’Ã‚Âªncia e a guarda.
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
      finalCtaTitle={<>Assegure o direito de <br />convivÃƒÆ’Ã‚Âªncia do seu filho.</>}
      finalCtaSubtitle="Estamos prontos para orientar seus prÃƒÆ’Ã‚Â³ximos passos com discriÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e foco no bem-estar da sua famÃƒÆ’Ã‚Â­lia."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
      finalCtaButtonId="consulta-cta-final-guarda-convivencia"
    />
  );
}


