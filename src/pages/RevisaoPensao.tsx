import ServiceLayout from '../components/ServiceLayout';
import { TrendingUp, GraduationCap, Users, ArrowRight } from 'lucide-react';
import revisaoPensaoHeroImage from '../assets/Revis\u00e3o de Pens\u00e3o hero.jpg';
import drCarloCardImage from '../assets/Foto Carlo1.jpg';
import revisaoPensaoHeroMobile from '../assets/optimized/hero-revisao-pensao-mobile.avif';
import revisaoPensaoHeroMobileWebp from '../assets/optimized/hero-revisao-pensao-mobile.webp';
import revisaoPensaoHeroDesktop from '../assets/optimized/hero-revisao-pensao-desktop.avif';
import revisaoPensaoHeroDesktopWebp from '../assets/optimized/hero-revisao-pensao-desktop.webp';

export default function RevisaoPensao() {
  return (
    <ServiceLayout
      title={<>Ajuste e equilÃƒÆ’Ã‚Â­brio para a <span className="italic">pensÃƒÆ’Ã‚Â£o alimentÃƒÆ’Ã‚Â­cia.</span></>}
      subtitle="A vida muda e as necessidades tambÃƒÆ’Ã‚Â©m. Quando o equilÃƒÆ’Ã‚Â­brio financeiro se altera, a lei permite o ajuste do valor da pensÃƒÆ’Ã‚Â£o para garantir a dignidade de quem recebe e a viabilidade de quem paga."
      heroImage={revisaoPensaoHeroImage}
      heroImageMobile={revisaoPensaoHeroMobile}
      heroImageDesktop={revisaoPensaoHeroDesktop}
      heroImageWebpMobile={revisaoPensaoHeroMobileWebp}
      heroImageWebpDesktop={revisaoPensaoHeroDesktopWebp}
      heroPrimaryButtonText="Falar com um Especialista"
      heroPrimaryButtonId="consulta-cta-hero-revisao-pensao"
      heroSecondaryButtonText="Entender SituaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes"
      description="O valor da pensÃƒÆ’Ã‚Â£o alimentÃƒÆ’Ã‚Â­cia deve refletir a realidade atual. Seja pelo aumento das necessidades do seu filho ou pela mudanÃƒÆ’Ã‚Â§a na condiÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o financeira de quem paga, a revisÃƒÆ’Ã‚Â£o judicial ÃƒÆ’Ã‚Â© o caminho para restabelecer um equilÃƒÆ’Ã‚Â­brio justo e adequado."
      quote="O equilÃƒÆ’Ã‚Â­brio ÃƒÆ’Ã‚Â© a base da justiÃƒÆ’Ã‚Â§a."
      situationsTitle="Quando buscar orientaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o?"
      situationsSubtitle="Identifique se vocÃƒÆ’Ã‚Âª estÃƒÆ’Ã‚Â¡ vivenciando uma destas situaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes e precisa de suporte jurÃƒÆ’Ã‚Â­dico especializado para ajustar o valor da pensÃƒÆ’Ã‚Â£o."
      situations={[
        {
          title: 'AlteraÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o na Renda',
          desc: 'MudanÃƒÆ’Ã‚Â§as significativas na situaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o financeira de quem paga, seja por aumento ou reduÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o de ganhos.',
          icon: <TrendingUp size={24} />,
          variant: 'white'
        },
        {
          title: 'Novas Necessidades do Filho',
          desc: 'Aumento de gastos com educaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o, saÃƒÆ’Ã‚Âºde ou mudanÃƒÆ’Ã‚Â§as naturais de fase da vida que demandam maior suporte.',
          icon: <GraduationCap size={24} />,
          variant: 'gold'
        },
        {
          title: 'Novos Encargos Familiares',
          desc: 'O nascimento de novos filhos ou novas responsabilidades legais que impactam o equilÃƒÆ’Ã‚Â­brio da obrigaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o alimentar.',
          icon: <Users size={24} />,
          variant: 'grey'
        }
      ]}
      extraSituationCard={
        <div className="bg-[#111827] text-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:col-span-2 lg:col-span-1 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-serif mb-4">TransparÃƒÆ’Ã‚Âªncia e Verdade Real</h3>
            <p className="text-white/80 leading-relaxed text-sm mb-8">
              A clareza sobre a situaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o financeira ÃƒÆ’Ã‚Â© fundamental para uma decisÃƒÆ’Ã‚Â£o justa. Atuamos para identificar a realidade dos rendimentos e garantir o equilÃƒÆ’Ã‚Â­brio.
            </p>
            <a href="#" className="inline-flex items-center text-brand-gold font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
              Saiba mais
              <ArrowRight size={14} className="ml-2" />
            </a>
          </div>
          {/* Abstract background image/graphic */}
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-20">
            <img 
              src={drCarloCardImage}
              alt="Dr. Carlo Bonvenuto" 
              loading="lazy"
              decoding="async"
              width={480}
              height={720}
              className="w-full h-full scale-110 object-cover object-[center_20%]"
            />
          </div>
        </div>
      }
      howItWorksTitle="Como funciona o processo"
      howItWorksSubtitle="Nosso mÃƒÆ’Ã‚Â©todo prioriza a clareza e a seguranÃƒÆ’Ã‚Â§a do seu direito."
      howItWorks={[
        {
          title: 'Levantamento de EvidÃƒÆ’Ã‚Âªncias',
          desc: 'Reunimos informaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes que demonstrem a nova realidade financeira e as necessidades atuais.'
        },
        {
          title: 'Pedido de RevisÃƒÆ’Ã‚Â£o',
          desc: 'Apresentamos ÃƒÆ’Ã‚Â  justiÃƒÆ’Ã‚Â§a a necessidade de ajuste, demonstrando que o valor atual precisa ser reequilibrado.'
        },
        {
          title: 'Ajuste Legal',
          desc: 'A justiÃƒÆ’Ã‚Â§a analisa as informaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes e define um novo valor, adequando a pensÃƒÆ’Ã‚Â£o ÃƒÆ’Ã‚Â  realidade presente.'
        }
      ]}
      faqTitle="DÃƒÆ’Ã‚Âºvidas Frequentes"
      faqSubtitle="Respostas fundamentais para o seu primeiro contato."
      faq={[
        { 
          q: 'Quando ÃƒÆ’Ã‚Â© possÃƒÆ’Ã‚Â­vel pedir a revisÃƒÆ’Ã‚Â£o?', 
          a: 'A qualquer momento, desde que haja mudanÃƒÆ’Ã‚Â§a comprovada na situaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o financeira de quem paga ou nas necessidades de quem recebe.' 
        },
        { 
          q: 'ÃƒÆ’Ã¢â‚¬Â° possÃƒÆ’Ã‚Â­vel tanto aumentar quanto diminuir o valor?', 
          a: 'Sim. O objetivo ÃƒÆ’Ã‚Â© adequar o valor ÃƒÆ’Ã‚Â  realidade atual, seja para aumentar o amparo ao filho ou para ajustar ÃƒÆ’Ã‚Â  nova capacidade de pagamento.' 
        },
        { 
          q: 'O que realmente importa para o juiz na decisÃƒÆ’Ã‚Â£o?', 
          a: 'SÃƒÆ’Ã‚Â£o analisadas evidÃƒÆ’Ã‚Âªncias concretas das necessidades da crianÃƒÆ’Ã‚Â§a e das possibilidades financeiras dos pais, buscando sempre um equilÃƒÆ’Ã‚Â­brio justo.' 
        }
      ]}
      finalCtaTitle={<>Assegure o equilÃƒÆ’Ã‚Â­brio <br />financeiro da sua <br />famÃƒÆ’Ã‚Â­lia.</>}
      finalCtaSubtitle="Converse com nossos especialistas para entender como regularizar o valor da pensÃƒÆ’Ã‚Â£o de forma justa e segura."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
      finalCtaButtonId="consulta-cta-final-revisao-pensao"
    />
  );
}
