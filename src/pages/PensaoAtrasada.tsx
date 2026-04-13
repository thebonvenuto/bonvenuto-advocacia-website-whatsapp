import ServiceLayout from '../components/ServiceLayout';
import { Calendar, HeartOff, PiggyBank } from 'lucide-react';
import pensaoAtrasadaHeroImage from '../assets/Pens\u00e3o Aliment\u00edcia hero.png';

export default function PensaoAtrasada() {
  return (
    <ServiceLayout
      title={<>Segurança e agilidade para recuperar a <span className="italic">pensão em atraso.</span></>}
      subtitle="A segurança financeira do seu filho não pode esperar. Atuamos com agilidade para garantir o cumprimento imediato do dever alimentar e a tranquilidade da sua família."
      heroImage={pensaoAtrasadaHeroImage}
      heroPrimaryButtonText="Falar com um Especialista"
      description="Quando a pensão não é paga, existem mecanismos legais para garantir o recebimento. Atuamos com estratégias eficazes para recuperar valores em atraso, buscando assegurar o amparo que é de direito do seu filho."
      quote="A prioridade é o futuro."
      situationsTitle="Quando buscar orientação?"
      situationsSubtitle="Identifique se você está vivenciando uma destas situações e precisa de suporte jurídico especializado para regularizar os pagamentos."
      situations={[
        {
          title: 'Atrasos Acumulados',
          desc: 'Quando a falta de pagamento compromete as necessidades básicas e a rotina da criança.',
          icon: <Calendar size={24} />,
          variant: 'white'
        },
        {
          title: 'Promessas não Cumpridas',
          desc: 'Acordos verbais que não se concretizam, gerando incerteza e insegurança financeira.',
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
      howItWorksSubtitle="Nosso método prioriza a clareza e a segurança do seu direito."
      howItWorks={[
        {
          title: 'Intimação Judicial',
          desc: 'O devedor é formalmente comunicado para realizar o pagamento em curto prazo.'
        },
        {
          title: 'Medidas de Cumprimento',
          desc: 'Solicitamos ações legais, como bloqueio de recursos, para assegurar que o pagamento seja efetuado.'
        },
        {
          title: 'Ações Rigorosas',
          desc: 'Em casos específicos de descumprimento, a lei prevê medidas mais severas para garantir o direito da criança.'
        }
      ]}
      faqTitle="Dúvidas Frequentes"
      faqSubtitle="TRANSPARÊNCIA E ESPECIALIDADE"
      faq={[
        { 
          q: 'O que acontece se o pagamento não for feito?', 
          a: 'A partir do atraso, já é possível iniciar a cobrança judicial. A justiça pode determinar o bloqueio de recursos e outras medidas para garantir o pagamento.' 
        },
        { 
          q: 'É possível cobrar valores retroativos?', 
          a: 'Sim. É possível cobrar as parcelas não pagas desde a fixação judicial da pensão, respeitando os prazos estabelecidos por lei.' 
        },
        { 
          q: 'Preciso de uma decisão judicial prévia para cobrar?', 
          a: 'Sim. Para realizar a cobrança judicial, é necessário que exista uma decisão ou um acordo formalizado perante a justiça que defina o valor da pensão.' 
        }
      ]}
      finalCtaTitle={<>Recupere a segurança <br />financeira da sua <br />família.</>}
      finalCtaSubtitle="Estamos prontos para analisar seu caso com a agilidade e o cuidado que o direito do seu filho exige."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
    />
  );
}
