import ServiceLayout from '../components/ServiceLayout';
import { FileText, UserX, Wallet, CheckCircle2 } from 'lucide-react';
import paternidadePensaoHeroImage from '../assets/Paternidade e Pens\u00e3o hero.png';
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
      subtitle="Assegurar os direitos do seu filho exige cuidado e excelÃƒÆ’Ã‚Âªncia jurÃƒÆ’Ã‚Â­dica. Atuamos para que o reconhecimento e o suporte financeiro sejam estabelecidos com a dignidade que sua famÃƒÆ’Ã‚Â­lia merece."
      heroImage={paternidadePensaoHeroImage}
      heroImageMobile={paternidadePensaoHeroMobile}
      heroImageDesktop={paternidadePensaoHeroDesktop}
      heroImageWebpMobile={paternidadePensaoHeroMobileWebp}
      heroImageWebpDesktop={paternidadePensaoHeroDesktopWebp}
      heroPrimaryButtonText="Falar com um Especialista"
      heroPrimaryButtonId="consulta-cta-hero-paternidade-pensao"
      description="O reconhecimento de paternidade ÃƒÆ’Ã‚Â© um direito fundamental. Ele assegura ÃƒÆ’Ã‚Â  crianÃƒÆ’Ã‚Â§a nÃƒÆ’Ã‚Â£o apenas o nome no registro, mas o acesso a direitos essenciais e ao amparo financeiro necessÃƒÆ’Ã‚Â¡rio para o seu desenvolvimento."
      quote="Garantir o amparo ÃƒÆ’Ã‚Â© o primeiro passo para um futuro seguro."
      situationsTitle="Quando buscar orientaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o?"
      situationsSubtitle="Identifique se vocÃƒÆ’Ã‚Âª estÃƒÆ’Ã‚Â¡ vivenciando uma destas situaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Âµes e precisa de suporte jurÃƒÆ’Ã‚Â­dico especializado."
      situations={[
        {
          title: 'CertidÃƒÆ’Ã‚Â£o Incompleta',
          desc: 'Quando o pai biolÃƒÆ’Ã‚Â³gico nÃƒÆ’Ã‚Â£o realizou o registro no momento do nascimento.',
          icon: <FileText size={24} />,
          variant: 'white'
        },
        {
          title: 'Falta de Reconhecimento',
          desc: 'Quando o pai se recusa a reconhecer o filho espontaneamente, sendo necessÃƒÆ’Ã‚Â¡ria a via judicial.',
          icon: <UserX size={24} />,
          variant: 'white'
        },
        {
          title: 'AusÃƒÆ’Ã‚Âªncia de Amparo',
          desc: 'Quando a crianÃƒÆ’Ã‚Â§a nÃƒÆ’Ã‚Â£o recebe o auxÃƒÆ’Ã‚Â­lio financeiro necessÃƒÆ’Ã‚Â¡rio para suas necessidades bÃƒÆ’Ã‚Â¡sicas.',
          icon: <Wallet size={24} />,
          variant: 'white'
        }
      ]}
      howItWorksTitle={<>ProteÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o e dignidade para o <span className="italic">futuro.</span></>}
      howItWorksSubtitle="O reconhecimento de paternidade assegura direitos fundamentais e o suporte necessÃƒÆ’Ã‚Â¡rio para o desenvolvimento pleno do seu filho. Conduzimos cada caso com seriedade, priorizando sempre o melhor interesse da crianÃƒÆ’Ã‚Â§a."
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
        "InvestigaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o de Paternidade via DNA",
        "FixaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o de Alimentos (PensÃƒÆ’Ã‚Â£o AlimentÃƒÆ’Ã‚Â­cia)",
        "RegulamentaÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o de Guarda e Visitas"
      ]}
      faqTitle="DÃƒÆ’Ã‚Âºvidas Frequentes"
      faqSubtitle="Respostas fundamentais para o seu primeiro contato."
      faqBg="navy"
      faq={[
        { 
          q: 'Posso pedir o reconhecimento e a pensÃƒÆ’Ã‚Â£o juntos?', 
          a: 'Sim. ÃƒÆ’Ã¢â‚¬Â° possÃƒÆ’Ã‚Â­vel e recomendÃƒÆ’Ã‚Â¡vel realizar os dois pedidos juntos. Assim, a justiÃƒÆ’Ã‚Â§a decide sobre a paternidade e jÃƒÆ’Ã‚Â¡ define o valor da pensÃƒÆ’Ã‚Â£o, agilizando o amparo ÃƒÆ’Ã‚Â  crianÃƒÆ’Ã‚Â§a.' 
        },
        { 
          q: 'E se o pai se recusar a fazer o exame de DNA?', 
          a: 'A recusa injustificada em realizar o exame de DNA pode gerar a presunÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â£o de paternidade, que serÃƒÆ’Ã‚Â¡ avaliada pelo juiz em conjunto com as demais provas apresentadas.' 
        },
        { 
          q: 'O exame de DNA ÃƒÆ’Ã‚Â© sempre obrigatÃƒÆ’Ã‚Â³rio?', 
          a: 'O DNA ÃƒÆ’Ã‚Â© a prova mais segura, mas a paternidade tambÃƒÆ’Ã‚Â©m pode ser demonstrada por outros meios, como documentos, mensagens e fotos que comprovem o relacionamento.' 
        }
      ]}
      finalCtaTitle={<>Assegure os direitos do <br />seu filho.</>}
      finalCtaSubtitle="Clique abaixo para iniciar um atendimento acolhedor e entender como podemos ajudar vocÃƒÆ’Ã‚Âª e seu filho."
      finalCtaButtonText="Falar com um Especialista no WhatsApp"
      finalCtaButtonId="consulta-cta-final-paternidade-pensao"
    />
  );
}
