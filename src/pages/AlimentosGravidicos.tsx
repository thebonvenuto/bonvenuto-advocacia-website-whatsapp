import ServiceLayout from '../components/ServiceLayout';
import { HeartHandshake, BriefcaseMedical, FileSearch } from 'lucide-react';
import alimentosGravidicosUltrassomImage from '../assets/Alimentos Grav\u00eddicos imagem de ultrassom.png';
import alimentosGravidicosSapatinhosImage from '../assets/Alimentos Grav\u00eddicos imagem de sapatinhos (1).png';
import alimentosGravidicosHeroMobile from '../assets/optimized/hero-alimentos-gravidicos-mobile.avif';
import alimentosGravidicosHeroMobileWebp from '../assets/optimized/hero-alimentos-gravidicos-mobile.webp';
import alimentosGravidicosHeroDesktop from '../assets/optimized/hero-alimentos-gravidicos-desktop.avif';
import alimentosGravidicosHeroDesktopWebp from '../assets/optimized/hero-alimentos-gravidicos-desktop.webp';

export default function AlimentosGravidicos() {
  return (
    <ServiceLayout
      title={<>Apoio financeiro e tranquilidade para a sua <span className="italic">gestação.</span></>}
      subtitle="A gestação é um momento que exige cuidado e segurança. Os alimentos gravídicos garantem que os custos do pré-natal ao parto sejam compartilhados, protegendo a sua saúde e o futuro do seu bebê."
      heroImage={alimentosGravidicosHeroDesktopWebp}
      heroImageMobile={alimentosGravidicosHeroMobile}
      heroImageDesktop={alimentosGravidicosHeroDesktop}
      heroImageWebpMobile={alimentosGravidicosHeroMobileWebp}
      heroImageWebpDesktop={alimentosGravidicosHeroDesktopWebp}
      heroPrimaryButtonText="Falar com um Especialista"
      heroPrimaryButtonId="consulta-cta-hero-alimentos-gravidicos"
      description="A proteção ao seu filho começa antes mesmo do nascimento. Os alimentos gravídicos são recursos destinados a cobrir as despesas essenciais da gestação, garantindo assistência médica, alimentação e o amparo necessário para você e seu bebê."
      quote="Segurança - Garantimos que seus direitos sejam respeitados desde o primeiro mês."
      situationsTitle="Quando buscar orientação?"
      situationsSubtitle="Identifique se você está vivenciando uma destas situações e precisa de suporte jurídico especializado."
      situations={[
        {
          title: 'Falta de Apoio Financeiro',
          desc: 'Quando o futuro pai não contribui com as despesas essenciais da gestação.',
          icon: <HeartHandshake size={24} />,
          variant: 'white'
        },
        {
          title: 'Despesas com Saúde',
          desc: 'Necessidade de cobrir exames, vitaminas, consultas e os custos do parto.',
          icon: <BriefcaseMedical size={24} />,
          variant: 'white'
        },
        {
          title: 'Exames e Diagnósticos',
          desc: 'Garantia de que todos os procedimentos necessários para a saúde do bebê sejam realizados.',
          icon: <FileSearch size={24} />,
          variant: 'white'
        }
      ]}
      howItWorksTitle="Amparo legal para uma gestação segura"
      howItWorksSubtitle="O suporte financeiro durante a gravidez é um direito seu e um dever do futuro pai, visando um nascimento saudável e com dignidade."
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
          title: '01. Divisão Justa',
          desc: 'Os custos da gestação devem ser compartilhados de forma proporcional aos rendimentos de cada um.'
        },
        {
          title: '02. Foco no Bem-estar',
          desc: 'A segurança financeira permite que você foque na sua saúde e no desenvolvimento do seu bebê.'
        },
        {
          title: '03. Continuidade do Amparo',
          desc: 'Após o nascimento, o auxílio converte-se automaticamente em pensão alimentícia para a criança.'
        }
      ]}
      faqTitle="Dúvidas Frequentes"
      faqSubtitle="PERGUNTAS COMUNS"
      faqBg="navy"
      faq={[
        { 
          q: 'O que são Alimentos Gravídicos?', 
          a: 'É o suporte financeiro que o futuro pai deve à gestante para cobrir despesas como alimentação, assistência médica e exames, desde a concepção até o parto.' 
        },
        { 
          q: 'O que é considerado no cálculo?', 
          a: 'São analisadas as necessidades da gestante e a capacidade financeira do futuro pai, buscando um valor que assegure uma gestação saudável.' 
        },
        { 
          q: 'Quando devo entrar com o pedido?', 
          a: 'Assim que a gravidez for confirmada e houver falta de apoio financeiro. Não é necessário esperar o nascimento do bebê para buscar seus direitos.' 
        }
      ]}
      finalCtaTitle={<>Proteja a sua gestação e o futuro do seu bebê.</>}
      finalCtaSubtitle="Estamos prontos para oferecer o amparo jurídico acolhedor e especializado que este momento único exige."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
      finalCtaButtonId="consulta-cta-final-alimentos-gravidicos"
    />
  );
}
