import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Section from './ui/Section';
import Accordion from './ui/Accordion';
import { CONTACT_INFO } from '../constants';

interface FAQItem {
  q: string;
  a: string;
}

interface ServiceLayoutProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  heroImage: string;
  heroPrimaryButtonText?: string;
  heroPrimaryButtonVariant?: 'gold' | 'black';
  heroSecondaryButtonText?: string;
  heroSecondaryButtonHref?: string;
  description: string;
  quote?: string;
  quoteIcon?: React.ReactNode;
  situationsTitle?: string;
  situationsSubtitle?: string;
  situations: { title: string; desc: string; icon: React.ReactNode; variant?: 'white' | 'gold' | 'grey' | 'black' }[];
  extraSituationCard?: React.ReactNode;
  howItWorksTitle?: string | React.ReactNode;
  howItWorksSubtitle?: string;
  howItWorks?: { title: string; desc: string }[];
  howItWorksChecklist?: string[];
  howItWorksImage?: React.ReactNode;
  faqTitle?: string;
  faqSubtitle?: string;
  faqBg?: 'offwhite' | 'navy';
  faq: FAQItem[];
  faqSideCard?: React.ReactNode;
  finalCtaTitle?: React.ReactNode;
  finalCtaSubtitle?: string;
  finalCtaButtonText?: string;
}

export default function ServiceLayout({
  title,
  subtitle,
  heroImage,
  heroPrimaryButtonText = "Regularizar Pensão Agora",
  heroPrimaryButtonVariant = 'gold',
  heroSecondaryButtonText,
  heroSecondaryButtonHref = "#",
  description,
  quote = "A dignidade da criança é o nosso compromisso inegociável.",
  quoteIcon,
  situationsTitle = "Cenários Comuns",
  situationsSubtitle = "Muitas famílias enfrentam incertezas antes de buscar auxílio jurídico. Identifique se o seu caso se enquadra em uma destas situações.",
  situations,
  extraSituationCard,
  howItWorksTitle = "Como funciona a jornada",
  howItWorksSubtitle = "Nosso método prioriza a clareza e a segurança do seu direito.",
  howItWorks,
  howItWorksChecklist,
  howItWorksImage,
  faqTitle = "Dúvidas Frequentes",
  faqSubtitle = "Respostas fundamentais para o seu primeiro contato.",
  faqBg = 'offwhite',
  faq,
  faqSideCard,
  finalCtaTitle = <>Pronto para garantir <br />os direitos do seu <br />filho?</>,
  finalCtaSubtitle = "Não deixe para amanhã uma segurança que é de direito hoje. Nossa equipe está pronta para orientar seu próximo passo com discrição e excelência.",
  finalCtaButtonText = "Falar com um advogado"
}: ServiceLayoutProps) {
  return (
    <div className="overflow-hidden bg-brand-offwhite">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl z-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 inline-block border border-brand-gold/20 rounded-full px-4 py-1"
              >
                <span className="text-brand-graphite/50 font-bold tracking-[0.2em] uppercase text-[10px]">
                  Direito de Família Especializado
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl lg:text-[5.5rem] font-serif text-brand-navy leading-[1.1] mb-6 lg:mb-8"
              >
                {title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl text-brand-graphite/70 leading-relaxed mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0"
              >
                {subtitle}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${heroPrimaryButtonVariant === 'black' ? 'bg-[#111827] text-white hover:bg-black' : 'btn-primary'} w-full sm:w-auto`}
                >
                  {heroPrimaryButtonText}
                  <ArrowRight size={18} className="ml-3" />
                </a>
                {heroSecondaryButtonText && (
                  <a
                    href={heroSecondaryButtonHref}
                    className="btn-secondary w-full sm:w-auto"
                  >
                    {heroSecondaryButtonText}
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative lg:ml-auto w-full max-w-sm mx-auto lg:max-w-none mt-12 lg:mt-0"
            >
              <div className="aspect-[4/5] rounded-tl-[60px] rounded-br-[60px] lg:rounded-tl-[100px] lg:rounded-br-[100px] overflow-hidden premium-shadow relative z-0">
                <img
                  src={heroImage}
                  alt="Serviço Jurídico"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply" />
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-16 bg-white p-6 lg:p-8 premium-shadow z-10 max-w-[240px] lg:max-w-[280px]">
                {quoteIcon && <div className="text-brand-gold mb-3 lg:mb-4">{quoteIcon}</div>}
                <p className="font-serif text-lg lg:text-xl text-brand-navy italic leading-snug mb-3 lg:mb-4">
                  "{quote}"
                </p>
                <p className="text-[9px] lg:text-[10px] text-brand-graphite/40 uppercase tracking-widest font-bold">
                  Assessoria Jurídica Premium
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Situations Section */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="mb-12 lg:mb-16 max-w-3xl text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-navy mb-4 lg:mb-6">{situationsTitle}</h2>
          <p className="text-brand-graphite/60 text-base md:text-lg leading-relaxed">
            {situationsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {situations.map((item, i) => {
            const variantClasses = {
              white: "bg-white text-brand-navy",
              gold: "bg-brand-gold text-white",
              grey: "bg-brand-graphite/5 text-brand-navy",
              black: "bg-[#111827] text-white"
            };
            const currentVariant = item.variant || 'white';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${variantClasses[currentVariant]} p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col`}
              >
                <div className={`${currentVariant === 'gold' || currentVariant === 'black' ? 'text-white' : 'text-brand-gold'} mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className={`${currentVariant === 'gold' || currentVariant === 'black' ? 'text-white/80' : 'text-brand-graphite/60'} leading-relaxed text-sm`}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
          {extraSituationCard}
        </div>
      </Section>

      {/* Process Section */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left: Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
             {howItWorksImage ? (
               howItWorksImage
             ) : (
               <div className="aspect-square bg-[#111827] rounded-2xl flex items-center justify-center premium-shadow relative z-10 overflow-hidden max-w-sm mx-auto lg:max-w-none">
                  {/* Abstract graphic representation */}
                  <div className="relative w-32 lg:w-48 h-32 lg:h-48">
                    <div className="absolute inset-0 bg-brand-navy rounded-full shadow-inner" />
                    <div className="absolute top-1/4 left-1/4 w-8 lg:w-12 h-8 lg:h-12 bg-brand-gold rounded-full shadow-lg" />
                    <div className="absolute bottom-1/4 right-1/4 w-6 lg:w-8 h-6 lg:h-8 bg-brand-gold rounded-full shadow-lg" />
                    <div className="absolute top-1/2 right-1/3 w-12 lg:w-16 h-12 lg:h-16 bg-brand-gold rounded-full shadow-lg" />
                  </div>
               </div>
             )}
             {/* Decorative offset square */}
             <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 w-full h-full border border-brand-gold/20 rounded-2xl z-0 hidden md:block" />
          </div>

          {/* Right: Steps or Checklist */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
            <div className="text-3xl md:text-5xl font-serif text-brand-navy mb-4 lg:mb-6 leading-tight">
              {howItWorksTitle}
            </div>
            <p className="text-brand-graphite/60 text-base md:text-lg mb-10 lg:mb-16">
              {howItWorksSubtitle}
            </p>
            
            {howItWorksChecklist ? (
              <div className="space-y-4 lg:space-y-6 text-left max-w-md mx-auto lg:mx-0">
                {howItWorksChecklist.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-brand-gold" />
                    </div>
                    <p className="text-brand-navy font-serif text-base lg:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8 lg:space-y-12 text-left">
                {howItWorks?.map((step, i) => (
                  <div key={i} className="flex gap-6 lg:gap-8 items-start">
                    <span className="font-serif text-3xl lg:text-4xl text-brand-gold italic opacity-60 shrink-0 leading-none pt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg lg:text-xl font-serif text-brand-navy mb-2">{step.title}</h3>
                      <p className="text-brand-graphite/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </Section>

      {/* FAQ Section */}
      <Section bg={faqBg} className="!py-20 lg:!py-32">
        <div className={faqSideCard ? "container-custom" : "max-w-3xl mx-auto"}>
          <div className={faqSideCard ? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start" : ""}>
            <div>
              <div className={`${faqSideCard ? 'text-left' : 'text-center'} mb-12 lg:mb-16`}>
                <h2 className={`text-3xl md:text-5xl font-serif mb-4 ${faqBg === 'navy' ? 'text-white' : 'text-brand-navy'}`}>{faqTitle}</h2>
                <p className={`text-base md:text-lg ${faqBg === 'navy' ? 'text-white/60' : 'text-brand-graphite/60'}`}>{faqSubtitle}</p>
              </div>
              
              <Accordion items={faq} variant={faqBg === 'navy' ? 'dark' : 'light'} />
            </div>
            {faqSideCard && (
              <div className="lg:sticky lg:top-32">
                {faqSideCard}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section bg="offwhite" className="!pb-32">
        <div className="container-custom">
          <div className="bg-[#111827] rounded-3xl p-8 md:p-20 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                {finalCtaTitle}
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-10 leading-relaxed">
                {finalCtaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto"
                >
                  <MessageCircle size={18} className="mr-3" />
                  {finalCtaButtonText}
                </a>
                <a
                  href="#"
                  className="bg-transparent border border-white/20 text-white text-sm px-8 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/5 transition-colors text-center w-full sm:w-auto"
                >
                  Agendar Reunião
                </a>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
