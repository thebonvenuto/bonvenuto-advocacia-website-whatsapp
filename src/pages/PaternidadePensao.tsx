import ServiceLayout from '../components/ServiceLayout';
import { FileText, UserX, Wallet, CheckCircle2 } from 'lucide-react';

export default function PaternidadePensao() {
  return (
    <ServiceLayout
      title={<>Reconhecimento de <span className="italic">paternidade</span> e amparo para o seu filho.</>}
      subtitle="Assegurar os direitos do seu filho exige cuidado e excelência jurídica. Atuamos para que o reconhecimento e o suporte financeiro sejam estabelecidos com a dignidade que sua família merece."
      heroImage="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=1200"
      heroPrimaryButtonText="Falar com um Especialista"
      description="O reconhecimento de paternidade é um direito fundamental. Ele assegura à criança não apenas o nome no registro, mas o acesso a direitos essenciais e ao amparo financeiro necessário para o seu desenvolvimento."
      quote="Garantir o amparo é o primeiro passo para um futuro seguro."
      situationsTitle="Quando buscar orientação?"
      situationsSubtitle="Identifique se você está vivenciando uma destas situações e precisa de suporte jurídico especializado."
      situations={[
        {
          title: 'Certidão Incompleta',
          desc: 'Quando o pai biológico não realizou o registro no momento do nascimento.',
          icon: <FileText size={24} />,
          variant: 'white'
        },
        {
          title: 'Falta de Reconhecimento',
          desc: 'Quando o pai se recusa a reconhecer o filho espontaneamente, sendo necessária a via judicial.',
          icon: <UserX size={24} />,
          variant: 'white'
        },
        {
          title: 'Ausência de Amparo',
          desc: 'Quando a criança não recebe o auxílio financeiro necessário para suas necessidades básicas.',
          icon: <Wallet size={24} />,
          variant: 'white'
        }
      ]}
      howItWorksTitle={<>Proteção e dignidade para o <span className="italic">futuro.</span></>}
      howItWorksSubtitle="O reconhecimento de paternidade assegura direitos fundamentais e o suporte necessário para o desenvolvimento pleno do seu filho. Conduzimos cada caso com seriedade, priorizando sempre o melhor interesse da criança."
      howItWorksImage={
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="aspect-square rounded-2xl overflow-hidden premium-shadow">
            <img 
              src="https://images.unsplash.com/photo-1536640712247-c45474d66489?auto=format&fit=crop&q=80&w=600" 
              alt="Família" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-square bg-[#111827] rounded-2xl flex items-center justify-center premium-shadow relative overflow-hidden">
             <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400" 
                  alt="Textura" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <CheckCircle2 size={64} className="text-brand-gold relative z-10" />
          </div>
        </div>
      }
      howItWorksChecklist={[
        "Investigação de Paternidade via DNA",
        "Fixação de Alimentos (Pensão Alimentícia)",
        "Regulamentação de Guarda e Visitas"
      ]}
      faqTitle="Dúvidas Frequentes"
      faqSubtitle="Respostas fundamentais para o seu primeiro contato."
      faqBg="navy"
      faq={[
        { 
          q: 'Posso pedir o reconhecimento e a pensão juntos?', 
          a: 'Sim. É possível e recomendável realizar os dois pedidos juntos. Assim, a justiça decide sobre a paternidade e já define o valor da pensão, agilizando o amparo à criança.' 
        },
        { 
          q: 'E se o pai se recusar a fazer o exame de DNA?', 
          a: 'A recusa injustificada em realizar o exame de DNA pode gerar a presunção de paternidade, que será avaliada pelo juiz em conjunto com as demais provas apresentadas.' 
        },
        { 
          q: 'O exame de DNA é sempre obrigatório?', 
          a: 'O DNA é a prova mais segura, mas a paternidade também pode ser demonstrada por outros meios, como documentos, mensagens e fotos que comprovem o relacionamento.' 
        }
      ]}
      finalCtaTitle={<>Assegure os direitos do <br />seu filho.</>}
      finalCtaSubtitle="Clique abaixo para iniciar um atendimento acolhedor e entender como podemos ajudar você e seu filho."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
    />
  );
}
