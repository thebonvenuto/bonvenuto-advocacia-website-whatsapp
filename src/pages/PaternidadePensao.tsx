import ServiceLayout from '../components/ServiceLayout';
import { FileText, UserX, Wallet, CheckCircle2 } from 'lucide-react';
import paternidadePensaoFamilyImage from '../assets/Paternidade e Pens\u00e3o imagem quadrada de fam\u00edlia.png';
import tjspTextureImage from '../assets/tjsp2.png';
import paternidadePensaoHeroMobile from '../assets/optimized/hero-paternidade-pensao-mobile.avif';
import paternidadePensaoHeroMobileWebp from '../assets/optimized/hero-paternidade-pensao-mobile.webp';
import paternidadePensaoHeroDesktop from '../assets/optimized/hero-paternidade-pensao-desktop.avif';
import paternidadePensaoHeroDesktopWebp from '../assets/optimized/hero-paternidade-pensao-desktop.webp';

export default function PaternidadePensao() {
  return (
    <ServiceLayout
      title={<>Reconhecimento de <span className="italic">paternidade</span> e amparo para o seu filho.</>}
      subtitle="Assegurar os direitos do seu filho exige cuidado e excelência jurídica. Atuamos para que o reconhecimento e o suporte financeiro sejam estabelecidos com a dignidade que sua família merece."
      heroImage={paternidadePensaoHeroDesktopWebp}
      heroImageMobile={paternidadePensaoHeroMobile}
      heroImageDesktop={paternidadePensaoHeroDesktop}
      heroImageWebpMobile={paternidadePensaoHeroMobileWebp}
      heroImageWebpDesktop={paternidadePensaoHeroDesktopWebp}
      heroPrimaryButtonText="Falar com um Especialista"
      heroPrimaryButtonId="consulta-cta-hero-paternidade-pensao"
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
              src={paternidadePensaoFamilyImage}
              alt="Familia" 
              loading="lazy"
              decoding="async"
              width={640}
              height={640}
              className="w-full h-full scale-110 object-cover object-center"
            />
          </div>
          <div className="aspect-square bg-[#111827] rounded-2xl flex items-center justify-center premium-shadow relative overflow-hidden">
             <div className="absolute inset-0 opacity-20">
                <img 
                  src={tjspTextureImage}
                  alt="Textura" 
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={640}
                  className="w-full h-full scale-110 object-cover object-center"
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
      finalCtaButtonId="consulta-cta-final-paternidade-pensao"
    />
  );
}
