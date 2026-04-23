import ServiceLayout from '../components/ServiceLayout';
import { Ban, HandCoins, History } from 'lucide-react';
import pensaoAlimenticiaHeroImage from '../assets/Pens\u00e3o Aliment\u00edcia hero.png';
import pensaoAlimenticiaHeroMobile from '../assets/optimized/hero-pensao-alimenticia-mobile.avif';
import pensaoAlimenticiaHeroDesktop from '../assets/optimized/hero-pensao-alimenticia-desktop.avif';

export default function PensaoAlimenticia() {
  return (
    <ServiceLayout
      title={<>Segurança e amparo para o seu filho através da <span className="italic">pensão alimentícia.</span></>}
      subtitle="Entenda como assegurar o suporte financeiro necessário para o desenvolvimento e o bem-estar do seu filho."
      heroImage={pensaoAlimenticiaHeroImage}
      heroImageMobile={pensaoAlimenticiaHeroMobile}
      heroImageDesktop={pensaoAlimenticiaHeroDesktop}
      heroPrimaryButtonText="Falar com um Especialista"
      heroPrimaryButtonId="consulta-cta-hero"
      description="A pensão alimentícia é a garantia de que seu filho terá acesso a alimentação, educação, saúde e lazer. Atuamos com foco na proteção integral do menor, buscando soluções que tragam segurança e tranquilidade para a sua família."
      situationsTitle="Quando buscar orientação?"
      situationsSubtitle="Identifique se você está vivenciando uma destas situações e precisa de suporte jurídico especializado."
      situations={[
        {
          title: 'Falta de Consenso',
          desc: 'Quando não há acordo sobre os valores necessários para o sustento da criança.',
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
          title: 'Contribuições Irregulares',
          desc: 'Quando o auxílio é esporádico e sem valor fixo, dificultando o planejamento e o bem-estar do filho.',
          icon: <History size={24} />,
          variant: 'white'
        }
      ]}
      howItWorksTitle="Como funciona o processo"
      howItWorksSubtitle="Nosso método prioriza a clareza e a segurança do seu direito."
      showHowItWorksVisual={false}
      howItWorks={[
        {
          title: 'Levantamento de Necessidades',
          desc: 'Mapeamos os gastos essenciais para definir um valor justo de pensão.'
        },
        {
          title: 'Capacidade Financeira',
          desc: 'Analisamos as condições de quem deve pagar, buscando um equilíbrio justo e legal.'
        },
        {
          title: 'Segurança Jurídica',
          desc: 'Formalizamos o pedido para que a justiça determine o amparo necessário com força de lei.'
        }
      ]}
      faqTitle="Dúvidas Frequentes"
      faqSubtitle="Respostas fundamentais para o seu primeiro contato."
      faq={[
        { 
          q: 'Quem pode pedir a pensão?', 
          a: 'Qualquer pessoa que detenha a guarda de um menor, ou filhos maiores que ainda necessitem de suporte para estudos (geralmente até os 24 anos).' 
        },
        { 
          q: 'Precisa ter sido casado no papel?', 
          a: 'Não. O direito à pensão decorre do vínculo de parentesco, independentemente de os pais terem sido casados ou mantido uma união estável.' 
        },
        { 
          q: 'E se a pessoa não tiver carteira assinada?', 
          a: 'O dever de sustento permanece. Nesses casos, a justiça pode fixar o valor com base no salário mínimo ou em evidências da capacidade financeira real da pessoa.' 
        },
        { 
          q: 'O que é analisado pelo juiz?', 
          a: 'É analisado o equilíbrio entre as necessidades reais da criança (saúde, educação, moradia) e a capacidade financeira de quem irá pagar.' 
        }
      ]}
      finalCtaTitle={<>Assegure os direitos do <br />seu filho.</>}
      finalCtaSubtitle="Estamos prontos para orientar seus próximos passos com discrição e foco no bem-estar da sua família."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
      finalCtaButtonId="consulta-cta-final"
    />
  );
}



