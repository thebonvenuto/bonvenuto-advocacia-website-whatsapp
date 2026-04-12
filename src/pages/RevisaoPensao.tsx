import ServiceLayout from '../components/ServiceLayout';
import { TrendingUp, GraduationCap, Users, ArrowRight } from 'lucide-react';

export default function RevisaoPensao() {
  return (
    <ServiceLayout
      title={<>Ajuste e equilíbrio para a <span className="italic">pensão alimentícia.</span></>}
      subtitle="A vida muda e as necessidades também. Quando o equilíbrio financeiro se altera, a lei permite o ajuste do valor da pensão para garantir a dignidade de quem recebe e a viabilidade de quem paga."
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
      heroPrimaryButtonText="Falar com um Especialista"
      heroSecondaryButtonText="Entender Situações"
      description="O valor da pensão alimentícia deve refletir a realidade atual. Seja pelo aumento das necessidades do seu filho ou pela mudança na condição financeira de quem paga, a revisão judicial é o caminho para restabelecer um equilíbrio justo e adequado."
      quote="O equilíbrio é a base da justiça."
      situationsTitle="Quando buscar orientação?"
      situationsSubtitle="Identifique se você está vivenciando uma destas situações e precisa de suporte jurídico especializado para ajustar o valor da pensão."
      situations={[
        {
          title: 'Alteração na Renda',
          desc: 'Mudanças significativas na situação financeira de quem paga, seja por aumento ou redução de ganhos.',
          icon: <TrendingUp size={24} />,
          variant: 'white'
        },
        {
          title: 'Novas Necessidades do Filho',
          desc: 'Aumento de gastos com educação, saúde ou mudanças naturais de fase da vida que demandam maior suporte.',
          icon: <GraduationCap size={24} />,
          variant: 'gold'
        },
        {
          title: 'Novos Encargos Familiares',
          desc: 'O nascimento de novos filhos ou novas responsabilidades legais que impactam o equilíbrio da obrigação alimentar.',
          icon: <Users size={24} />,
          variant: 'grey'
        }
      ]}
      extraSituationCard={
        <div className="bg-[#111827] text-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:col-span-2 lg:col-span-1 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-serif mb-4">Transparência e Verdade Real</h3>
            <p className="text-white/80 leading-relaxed text-sm mb-8">
              A clareza sobre a situação financeira é fundamental para uma decisão justa. Atuamos para identificar a realidade dos rendimentos e garantir o equilíbrio.
            </p>
            <a href="#" className="inline-flex items-center text-brand-gold font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
              Saiba mais
              <ArrowRight size={14} className="ml-2" />
            </a>
          </div>
          {/* Abstract background image/graphic */}
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400" 
              alt="Justiça" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      }
      howItWorksTitle="Como funciona o processo"
      howItWorksSubtitle="Nosso método prioriza a clareza e a segurança do seu direito."
      howItWorks={[
        {
          title: 'Levantamento de Evidências',
          desc: 'Reunimos informações que demonstrem a nova realidade financeira e as necessidades atuais.'
        },
        {
          title: 'Pedido de Revisão',
          desc: 'Apresentamos à justiça a necessidade de ajuste, demonstrando que o valor atual precisa ser reequilibrado.'
        },
        {
          title: 'Ajuste Legal',
          desc: 'A justiça analisa as informações e define um novo valor, adequando a pensão à realidade presente.'
        }
      ]}
      faqTitle="Dúvidas Frequentes"
      faqSubtitle="Respostas fundamentais para o seu primeiro contato."
      faq={[
        { 
          q: 'Quando é possível pedir a revisão?', 
          a: 'A qualquer momento, desde que haja mudança comprovada na situação financeira de quem paga ou nas necessidades de quem recebe.' 
        },
        { 
          q: 'É possível tanto aumentar quanto diminuir o valor?', 
          a: 'Sim. O objetivo é adequar o valor à realidade atual, seja para aumentar o amparo ao filho ou para ajustar à nova capacidade de pagamento.' 
        },
        { 
          q: 'O que realmente importa para o juiz na decisão?', 
          a: 'São analisadas evidências concretas das necessidades da criança e das possibilidades financeiras dos pais, buscando sempre um equilíbrio justo.' 
        }
      ]}
      finalCtaTitle={<>Assegure o equilíbrio <br />financeiro da sua <br />família.</>}
      finalCtaSubtitle="Converse com nossos especialistas para entender como regularizar o valor da pensão de forma justa e segura."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
    />
  );
}
