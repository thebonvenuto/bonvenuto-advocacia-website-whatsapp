import ServiceLayout from '../components/ServiceLayout';
import { HeartHandshake, BriefcaseMedical, FileSearch } from 'lucide-react';
import alimentosGravidicosHeroImage from '../assets/Alimentos Grav\u00eddicos hero.png';
import alimentosGravidicosUltrassomImage from '../assets/Alimentos Grav\u00eddicos imagem de ultrassom.png';
import alimentosGravidicosSapatinhosImage from '../assets/Alimentos Grav\u00eddicos imagem de sapatinhos (1).png';
import alimentosGravidicosHeroMobile from '../assets/optimized/hero-alimentos-gravidicos-mobile.avif';
import alimentosGravidicosHeroMobileWebp from '../assets/optimized/hero-alimentos-gravidicos-mobile.webp';
import alimentosGravidicosHeroDesktop from '../assets/optimized/hero-alimentos-gravidicos-desktop.avif';
import alimentosGravidicosHeroDesktopWebp from '../assets/optimized/hero-alimentos-gravidicos-desktop.webp';

export default function AlimentosGravidicos() {
  return (
    <ServiceLayout
      title={<>Apoio financeiro e tranquilidade para a sua <span className="italic">gestaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o.</span></>}
      subtitle="A gestaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o ÃƒÆ’Ã‚Â© um momento que exige cuidado e seguranÃƒÆ’Ã‚Â§a. Os alimentos gravÃƒÆ’Ã‚Â­dicos garantem que os custos do prÃƒÆ’Ã‚Â©-natal ao parto sejam compartilhados, protegendo a sua saÃƒÆ’Ã‚Âºde e o futuro do seu bebÃƒÆ’Ã‚Âª."
      heroImage={alimentosGravidicosHeroImage}
      heroImageMobile={alimentosGravidicosHeroMobile}
      heroImageDesktop={alimentosGravidicosHeroDesktop}
      heroImageWebpMobile={alimentosGravidicosHeroMobileWebp}
      heroImageWebpDesktop={alimentosGravidicosHeroDesktopWebp}
      heroPrimaryButtonText="Falar com um Especialista"
      heroPrimaryButtonId="consulta-cta-hero-alimentos-gravidicos"
      description="A proteÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o ao seu filho comeÃƒÆ’Ã‚Â§a antes mesmo do nascimento. Os alimentos gravÃƒÆ’Ã‚Â­dicos sÃƒÆ’Ã‚Â£o recursos destinados a cobrir as despesas essenciais da gestaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o, garantindo assistÃƒÆ’Ã‚Âªncia mÃƒÆ’Ã‚Â©dica, alimentaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e o amparo necessÃƒÆ’Ã‚Â¡rio para vocÃƒÆ’Ã‚Âª e seu bebÃƒÆ’Ã‚Âª."
      quote="SeguranÃƒÆ’Ã‚Â§a - Garantimos que seus direitos sejam respeitados desde o primeiro mÃƒÆ’Ã‚Âªs."
      situationsTitle="Quando buscar orientaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o?"
      situationsSubtitle="Identifique se vocÃƒÆ’Ã‚Âª estÃƒÆ’Ã‚Â¡ vivenciando uma destas situaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes e precisa de suporte jurÃƒÆ’Ã‚Â­dico especializado."
      situations={[
        {
          title: 'Falta de Apoio Financeiro',
          desc: 'Quando o futuro pai nÃƒÆ’Ã‚Â£o contribui com as despesas essenciais da gestaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o.',
          icon: <HeartHandshake size={24} />,
          variant: 'white'
        },
        {
          title: 'Despesas com SaÃƒÆ’Ã‚Âºde',
          desc: 'Necessidade de cobrir exames, vitaminas, consultas e os custos do parto.',
          icon: <BriefcaseMedical size={24} />,
          variant: 'white'
        },
        {
          title: 'Exames e DiagnÃƒÆ’Ã‚Â³sticos',
          desc: 'Garantia de que todos os procedimentos necessÃƒÆ’Ã‚Â¡rios para a saÃƒÆ’Ã‚Âºde do bebÃƒÆ’Ã‚Âª sejam realizados.',
          icon: <FileSearch size={24} />,
          variant: 'white'
        }
      ]}
      howItWorksTitle="Amparo legal para uma gestaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o segura"
      howItWorksSubtitle="O suporte financeiro durante a gravidez ÃƒÆ’Ã‚Â© um direito seu e um dever do futuro pai, visando um nascimento saudÃƒÆ’Ã‚Â¡vel e com dignidade."
      howItWorksImage={
        <div className="grid grid-cols-1 gap-4 h-full">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden premium-shadow">
            <img 
              src={alimentosGravidicosUltrassomImage}
              alt="Ultrassom" 
              loading="lazy"
              decoding="async"
              width={960}
              height={540}
              className="w-full h-full scale-110 object-cover object-center"
            />
          </div>
          <div className="aspect-[16/9] rounded-2xl overflow-hidden premium-shadow">
            <img 
              src={alimentosGravidicosSapatinhosImage}
              alt="Sapatinhos de bebe" 
              loading="lazy"
              decoding="async"
              width={960}
              height={540}
              className="w-full h-full scale-110 object-cover object-center"
            />
          </div>
        </div>
      }
      howItWorks={[
        {
          title: '01. DivisÃƒÆ’Ã‚Â£o Justa',
          desc: 'Os custos da gestaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o devem ser compartilhados de forma proporcional aos rendimentos de cada um.'
        },
        {
          title: '02. Foco no Bem-estar',
          desc: 'A seguranÃƒÆ’Ã‚Â§a financeira permite que vocÃƒÆ’Ã‚Âª foque na sua saÃƒÆ’Ã‚Âºde e no desenvolvimento do seu bebÃƒÆ’Ã‚Âª.'
        },
        {
          title: '03. Continuidade do Amparo',
          desc: 'ApÃƒÆ’Ã‚Â³s o nascimento, o auxÃƒÆ’Ã‚Â­lio converte-se automaticamente em pensÃƒÆ’Ã‚Â£o alimentÃƒÆ’Ã‚Â­cia para a crianÃƒÆ’Ã‚Â§a.'
        }
      ]}
      faqTitle="DÃƒÆ’Ã‚Âºvidas Frequentes"
      faqSubtitle="PERGUNTAS COMUNS"
      faqBg="navy"
      faq={[
        { 
          q: 'O que sÃƒÆ’Ã‚Â£o Alimentos GravÃƒÆ’Ã‚Â­dicos?', 
          a: 'ÃƒÆ’Ã¢â‚¬Â° o suporte financeiro que o futuro pai deve ÃƒÆ’Ã‚Â  gestante para cobrir despesas como alimentaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o, assistÃƒÆ’Ã‚Âªncia mÃƒÆ’Ã‚Â©dica e exames, desde a concepÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o atÃƒÆ’Ã‚Â© o parto.' 
        },
        { 
          q: 'O que ÃƒÆ’Ã‚Â© considerado no cÃƒÆ’Ã‚Â¡lculo?', 
          a: 'SÃƒÆ’Ã‚Â£o analisadas as necessidades da gestante e a capacidade financeira do futuro pai, buscando um valor que assegure uma gestaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o saudÃƒÆ’Ã‚Â¡vel.' 
        },
        { 
          q: 'Quando devo entrar com o pedido?', 
          a: 'Assim que a gravidez for confirmada e houver falta de apoio financeiro. NÃƒÆ’Ã‚Â£o ÃƒÆ’Ã‚Â© necessÃƒÆ’Ã‚Â¡rio esperar o nascimento do bebÃƒÆ’Ã‚Âª para buscar seus direitos.' 
        }
      ]}
      finalCtaTitle={<>Proteja a sua gestaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e o futuro do seu bebÃƒÆ’Ã‚Âª.</>}
      finalCtaSubtitle="Estamos prontos para oferecer o amparo jurÃƒÆ’Ã‚Â­dico acolhedor e especializado que este momento ÃƒÆ’Ã‚Âºnico exige."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
      finalCtaButtonId="consulta-cta-final-alimentos-gravidicos"
    />
  );
}
