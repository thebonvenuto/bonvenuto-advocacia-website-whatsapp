import ServiceLayout from '../components/ServiceLayout';
import { Calendar, HeartOff, PiggyBank } from 'lucide-react';
import pensaoAtrasadaHeroImage from '../assets/Pens\u00e3o Aliment\u00edcia hero.png';
import pensaoAtrasadaHeroMobile from '../assets/optimized/hero-pensao-alimenticia-mobile.avif';
import pensaoAtrasadaHeroMobileWebp from '../assets/optimized/hero-pensao-alimenticia-mobile.webp';
import pensaoAtrasadaHeroDesktop from '../assets/optimized/hero-pensao-alimenticia-desktop.avif';
import pensaoAtrasadaHeroDesktopWebp from '../assets/optimized/hero-pensao-alimenticia-desktop.webp';

export default function PensaoAtrasada() {
  return (
    <ServiceLayout
      title={<>SeguranÃƒÆ’Ã‚Â§a e agilidade para recuperar a <span className="italic">pensÃƒÆ’Ã‚Â£o em atraso.</span></>}
      subtitle="A seguranÃƒÆ’Ã‚Â§a financeira do seu filho nÃƒÆ’Ã‚Â£o pode esperar. Atuamos com agilidade para garantir o cumprimento imediato do dever alimentar e a tranquilidade da sua famÃƒÆ’Ã‚Â­lia."
      heroImage={pensaoAtrasadaHeroImage}
      heroImageMobile={pensaoAtrasadaHeroMobile}
      heroImageDesktop={pensaoAtrasadaHeroDesktop}
      heroImageWebpMobile={pensaoAtrasadaHeroMobileWebp}
      heroImageWebpDesktop={pensaoAtrasadaHeroDesktopWebp}
      heroPrimaryButtonText="Falar com um Especialista"
      heroPrimaryButtonId="consulta-cta-hero-pensao-atrasada"
      description="Quando a pensÃƒÆ’Ã‚Â£o nÃƒÆ’Ã‚Â£o ÃƒÆ’Ã‚Â© paga, existem mecanismos legais para garantir o recebimento. Atuamos com estratÃƒÆ’Ã‚Â©gias eficazes para recuperar valores em atraso, buscando assegurar o amparo que ÃƒÆ’Ã‚Â© de direito do seu filho."
      quote="A prioridade ÃƒÆ’Ã‚Â© o futuro."
      situationsTitle="Quando buscar orientaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o?"
      situationsSubtitle="Identifique se vocÃƒÆ’Ã‚Âª estÃƒÆ’Ã‚Â¡ vivenciando uma destas situaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes e precisa de suporte jurÃƒÆ’Ã‚Â­dico especializado para regularizar os pagamentos."
      situations={[
        {
          title: 'Atrasos Acumulados',
          desc: 'Quando a falta de pagamento compromete as necessidades bÃƒÆ’Ã‚Â¡sicas e a rotina da crianÃƒÆ’Ã‚Â§a.',
          icon: <Calendar size={24} />,
          variant: 'white'
        },
        {
          title: 'Promessas nÃƒÆ’Ã‚Â£o Cumpridas',
          desc: 'Acordos verbais que nÃƒÆ’Ã‚Â£o se concretizam, gerando incerteza e inseguranÃƒÆ’Ã‚Â§a financeira.',
          icon: <HeartOff size={24} />,
          variant: 'white'
        },
        {
          title: 'Pagamentos Incompletos',
          desc: 'Valores depositados de forma irregular e abaixo do que foi estabelecido, dificultando o planejamento familiar.',
          icon: <PiggyBank size={24} />,
          variant: 'white'
        }
      ]}
      howItWorksTitle="Como funciona o processo"
      howItWorksSubtitle="Nosso mÃƒÆ’Ã‚Â©todo prioriza a clareza e a seguranÃƒÆ’Ã‚Â§a do seu direito."
      showHowItWorksVisual={false}
      howItWorks={[
        {
          title: 'IntimaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o Judicial',
          desc: 'O devedor ÃƒÆ’Ã‚Â© formalmente comunicado para realizar o pagamento em curto prazo.'
        },
        {
          title: 'Medidas de Cumprimento',
          desc: 'Solicitamos aÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes legais, como bloqueio de recursos, para assegurar que o pagamento seja efetuado.'
        },
        {
          title: 'AÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes Rigorosas',
          desc: 'Em casos especÃƒÆ’Ã‚Â­ficos de descumprimento, a lei prevÃƒÆ’Ã‚Âª medidas mais severas para garantir o direito da crianÃƒÆ’Ã‚Â§a.'
        }
      ]}
      faqTitle="DÃƒÆ’Ã‚Âºvidas Frequentes"
      faqSubtitle="TRANSPARÃƒÆ’Ã…Â NCIA E ESPECIALIDADE"
      faq={[
        { 
          q: 'O que acontece se o pagamento nÃƒÆ’Ã‚Â£o for feito?', 
          a: 'A partir do atraso, jÃƒÆ’Ã‚Â¡ ÃƒÆ’Ã‚Â© possÃƒÆ’Ã‚Â­vel iniciar a cobranÃƒÆ’Ã‚Â§a judicial. A justiÃƒÆ’Ã‚Â§a pode determinar o bloqueio de recursos e outras medidas para garantir o pagamento.' 
        },
        { 
          q: 'ÃƒÆ’Ã¢â‚¬Â° possÃƒÆ’Ã‚Â­vel cobrar valores retroativos?', 
          a: 'Sim. ÃƒÆ’Ã¢â‚¬Â° possÃƒÆ’Ã‚Â­vel cobrar as parcelas nÃƒÆ’Ã‚Â£o pagas desde a fixaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o judicial da pensÃƒÆ’Ã‚Â£o, respeitando os prazos estabelecidos por lei.' 
        },
        { 
          q: 'Preciso de uma decisÃƒÆ’Ã‚Â£o judicial prÃƒÆ’Ã‚Â©via para cobrar?', 
          a: 'Sim. Para realizar a cobranÃƒÆ’Ã‚Â§a judicial, ÃƒÆ’Ã‚Â© necessÃƒÆ’Ã‚Â¡rio que exista uma decisÃƒÆ’Ã‚Â£o ou um acordo formalizado perante a justiÃƒÆ’Ã‚Â§a que defina o valor da pensÃƒÆ’Ã‚Â£o.' 
        }
      ]}
      finalCtaTitle={<>Recupere a seguranÃƒÆ’Ã‚Â§a <br />financeira da sua <br />famÃƒÆ’Ã‚Â­lia.</>}
      finalCtaSubtitle="Estamos prontos para analisar seu caso com a agilidade e o cuidado que o direito do seu filho exige."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
      finalCtaButtonId="consulta-cta-final-pensao-atrasada"
    />
  );
}



