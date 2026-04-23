import ServiceLayout from '../components/ServiceLayout';
import { Ban, HandCoins, History } from 'lucide-react';
import pensaoAlimenticiaHeroImage from '../assets/Pens\u00e3o Aliment\u00edcia hero.png';
import pensaoAlimenticiaHeroMobile from '../assets/optimized/hero-pensao-alimenticia-mobile.avif';
import pensaoAlimenticiaHeroMobileWebp from '../assets/optimized/hero-pensao-alimenticia-mobile.webp';
import pensaoAlimenticiaHeroDesktop from '../assets/optimized/hero-pensao-alimenticia-desktop.avif';
import pensaoAlimenticiaHeroDesktopWebp from '../assets/optimized/hero-pensao-alimenticia-desktop.webp';

export default function PensaoAlimenticia() {
  return (
    <ServiceLayout
      title={<>SeguranÃƒÆ’Ã‚Â§a e amparo para o seu filho atravÃƒÆ’Ã‚Â©s da <span className="italic">pensÃƒÆ’Ã‚Â£o alimentÃƒÆ’Ã‚Â­cia.</span></>}
      subtitle="Entenda como assegurar o suporte financeiro necessÃƒÆ’Ã‚Â¡rio para o desenvolvimento e o bem-estar do seu filho."
      heroImage={pensaoAlimenticiaHeroImage}
      heroImageMobile={pensaoAlimenticiaHeroMobile}
      heroImageDesktop={pensaoAlimenticiaHeroDesktop}
      heroImageWebpMobile={pensaoAlimenticiaHeroMobileWebp}
      heroImageWebpDesktop={pensaoAlimenticiaHeroDesktopWebp}
      heroPrimaryButtonText="Falar com um Especialista"
      heroPrimaryButtonId="consulta-cta-hero"
      description="A pensÃƒÆ’Ã‚Â£o alimentÃƒÆ’Ã‚Â­cia ÃƒÆ’Ã‚Â© a garantia de que seu filho terÃƒÆ’Ã‚Â¡ acesso a alimentaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o, educaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o, saÃƒÆ’Ã‚Âºde e lazer. Atuamos com foco na proteÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o integral do menor, buscando soluÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes que tragam seguranÃƒÆ’Ã‚Â§a e tranquilidade para a sua famÃƒÆ’Ã‚Â­lia."
      situationsTitle="Quando buscar orientaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o?"
      situationsSubtitle="Identifique se vocÃƒÆ’Ã‚Âª estÃƒÆ’Ã‚Â¡ vivenciando uma destas situaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes e precisa de suporte jurÃƒÆ’Ã‚Â­dico especializado."
      situations={[
        {
          title: 'Falta de Consenso',
          desc: 'Quando nÃƒÆ’Ã‚Â£o hÃƒÆ’Ã‚Â¡ acordo sobre os valores necessÃƒÆ’Ã‚Â¡rios para o sustento da crianÃƒÆ’Ã‚Â§a.',
          icon: <Ban size={24} />,
          variant: 'white'
        },
        {
          title: 'Sobrecarga Financeira',
          desc: 'Quando apenas um dos pais arca com todas as despesas, comprometendo a estabilidade familiar.',
          icon: <HandCoins size={24} />,
          variant: 'white'
        },
        {
          title: 'ContribuiÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes Irregulares',
          desc: 'Quando o auxÃƒÆ’Ã‚Â­lio ÃƒÆ’Ã‚Â© esporÃƒÆ’Ã‚Â¡dico e sem valor fixo, dificultando o planejamento e o bem-estar do filho.',
          icon: <History size={24} />,
          variant: 'white'
        }
      ]}
      howItWorksTitle="Como funciona o processo"
      howItWorksSubtitle="Nosso mÃƒÆ’Ã‚Â©todo prioriza a clareza e a seguranÃƒÆ’Ã‚Â§a do seu direito."
      showHowItWorksVisual={false}
      howItWorks={[
        {
          title: 'Levantamento de Necessidades',
          desc: 'Mapeamos os gastos essenciais para definir um valor justo de pensÃƒÆ’Ã‚Â£o.'
        },
        {
          title: 'Capacidade Financeira',
          desc: 'Analisamos as condiÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes de quem deve pagar, buscando um equilÃƒÆ’Ã‚Â­brio justo e legal.'
        },
        {
          title: 'SeguranÃƒÆ’Ã‚Â§a JurÃƒÆ’Ã‚Â­dica',
          desc: 'Formalizamos o pedido para que a justiÃƒÆ’Ã‚Â§a determine o amparo necessÃƒÆ’Ã‚Â¡rio com forÃƒÆ’Ã‚Â§a de lei.'
        }
      ]}
      faqTitle="DÃƒÆ’Ã‚Âºvidas Frequentes"
      faqSubtitle="Respostas fundamentais para o seu primeiro contato."
      faq={[
        { 
          q: 'Quem pode pedir a pensÃƒÆ’Ã‚Â£o?', 
          a: 'Qualquer pessoa que detenha a guarda de um menor, ou filhos maiores que ainda necessitem de suporte para estudos (geralmente atÃƒÆ’Ã‚Â© os 24 anos).' 
        },
        { 
          q: 'Precisa ter sido casado no papel?', 
          a: 'NÃƒÆ’Ã‚Â£o. O direito ÃƒÆ’Ã‚Â  pensÃƒÆ’Ã‚Â£o decorre do vÃƒÆ’Ã‚Â­nculo de parentesco, independentemente de os pais terem sido casados ou mantido uma uniÃƒÆ’Ã‚Â£o estÃƒÆ’Ã‚Â¡vel.' 
        },
        { 
          q: 'E se a pessoa nÃƒÆ’Ã‚Â£o tiver carteira assinada?', 
          a: 'O dever de sustento permanece. Nesses casos, a justiÃƒÆ’Ã‚Â§a pode fixar o valor com base no salÃƒÆ’Ã‚Â¡rio mÃƒÆ’Ã‚Â­nimo ou em evidÃƒÆ’Ã‚Âªncias da capacidade financeira real da pessoa.' 
        },
        { 
          q: 'O que ÃƒÆ’Ã‚Â© analisado pelo juiz?', 
          a: 'ÃƒÆ’Ã¢â‚¬Â° analisado o equilÃƒÆ’Ã‚Â­brio entre as necessidades reais da crianÃƒÆ’Ã‚Â§a (saÃƒÆ’Ã‚Âºde, educaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o, moradia) e a capacidade financeira de quem irÃƒÆ’Ã‚Â¡ pagar.' 
        }
      ]}
      finalCtaTitle={<>Assegure os direitos do <br />seu filho.</>}
      finalCtaSubtitle="Estamos prontos para orientar seus prÃƒÆ’Ã‚Â³ximos passos com discriÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e foco no bem-estar da sua famÃƒÆ’Ã‚Â­lia."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
      finalCtaButtonId="consulta-cta-final"
    />
  );
}



