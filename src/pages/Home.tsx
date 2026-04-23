import { motion } from 'motion/react';
import { MessageCircle, ShieldCheck, Baby, Clock, Scale, Users, Heart, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Accordion from '../components/ui/Accordion';
import { CONTACT_INFO } from '../constants';
import heroHomeMobile from '../assets/optimized/hero-home-mobile.avif';
import heroHomeDesktop from '../assets/optimized/hero-home-desktop.avif';
import heroHomeMobileWebp from '../assets/optimized/hero-home-mobile.webp';
import heroHomeDesktopWebp from '../assets/optimized/hero-home-desktop.webp';
import {
  sectionIntro,
  staggerGroup,
  cardReveal,
  contentReveal,
  ctaPanelReveal,
  revealViewport,
  smoothEase,
} from '../lib/motion';

export default function Home() {
  const services = [
    {
      title: 'PensÃ£o AlimentÃ­cia',
      description: 'Asseguramos o suporte financeiro necessÃ¡rio para o desenvolvimento saudÃ¡vel e digno dos seus filhos.',
      path: '/pensao-alimenticia',
      icon: <Baby size={24} strokeWidth={1.5} />,
    },
    {
      title: 'PensÃ£o Atrasada',
      description: 'RegularizaÃ§Ã£o de valores em aberto: protegemos o direito ao amparo retroativo com total seguranÃ§a jurÃ­dica.',
      path: '/pensao-atrasada',
      icon: <Clock size={24} strokeWidth={1.5} />,
    },
    {
      title: 'RevisÃ£o de PensÃ£o',
      description: 'Ajuste e equilÃ­brio: adequamos os valores da pensÃ£o Ã  realidade atual da sua famÃ­lia.',
      path: '/revisao-de-pensao',
      icon: <Scale size={24} strokeWidth={1.5} />,
    },
    {
      title: 'Paternidade e PensÃ£o',
      description: 'Reconhecimento de vÃ­nculo: o direito Ã  identidade e ao suporte financeiro para o seu filho.',
      path: '/paternidade-e-pensao',
      icon: <Users size={24} strokeWidth={1.5} />,
    },
    {
      title: 'Alimentos GravÃ­dicos',
      description: 'Amparo desde o inÃ­cio: suporte financeiro para uma gestaÃ§Ã£o segura e tranquila.',
      path: '/alimentos-gravidicos',
      icon: <Heart size={24} strokeWidth={1.5} />,
    },
    {
      title: 'Guarda e ConvivÃªncia',
      description: 'PreservaÃ§Ã£o de vÃ­nculos: organizamos rotinas que priorizam o bem-estar e o convÃ­vio familiar.',
      path: '/guarda-e-convivencia',
      icon: <HeartHandshake size={24} strokeWidth={1.5} />,
    },
  ];

  const faqs = [
    { q: 'Como Ã© calculado o valor da pensÃ£o?', a: 'O valor Ã© definido buscando um equilÃ­brio justo entre as necessidades da crianÃ§a e a capacidade financeira de quem irÃ¡ pagar.' },
    { q: 'E se o pai ou a mÃ£e nÃ£o tiver carteira assinada?', a: 'A pensÃ£o Ã© devida mesmo sem vÃ­nculo formal. A justiÃ§a pode fixar o valor com base no salÃ¡rio mÃ­nimo ou em evidÃªncias da capacidade financeira real.' },
    { q: 'Posso pedir pensÃ£o ainda durante a gravidez?', a: 'Sim. AtravÃ©s dos Alimentos GravÃ­dicos, Ã© possÃ­vel assegurar o suporte financeiro necessÃ¡rio para as despesas da gestaÃ§Ã£o.' },
  ];

  return (
    <div className="overflow-hidden bg-brand-offwhite">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 min-h-[calc(100svh-5rem)] overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl z-10 text-center lg:text-left">
              <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-serif text-brand-navy leading-[1.1] mb-6 lg:mb-8">
                ProteÃ§Ã£o jurÃ­dica e acolhimento para o que vocÃª tem de <span className="text-brand-gold italic">mais precioso.</span>
              </h1>
              
              <p className="text-base md:text-xl text-brand-graphite/70 leading-relaxed mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0">
                Entenda seus direitos com clareza e receba o amparo necessÃ¡rio para atravessar este momento com seguranÃ§a e tranquilidade.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <a
                  id="consulta-cta-hero-home"
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto"
                >
                  <MessageCircle size={20} className="mr-3" />
                  Falar com um especialista no WhatsApp
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:ml-auto w-full max-w-sm mx-auto lg:max-w-none mt-12 lg:mt-0">
              <div className="aspect-[3/4] lg:aspect-[4/5] rounded-t-[120px] lg:rounded-t-[200px] overflow-hidden premium-shadow relative z-0">
                <picture className="block w-full h-full">
                  <source srcSet={heroHomeDesktop} media="(min-width: 768px)" type="image/avif" />
                  <source srcSet={heroHomeMobile} type="image/avif" />
                  <source srcSet={heroHomeDesktopWebp} media="(min-width: 768px)" type="image/webp" />
                  <source srcSet={heroHomeMobileWebp} type="image/webp" />
                  <img
                    src={heroHomeDesktopWebp}
                    alt="Dr. Carlo Bonvenuto"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    width={960}
                    height={1200}
                    className="w-full h-full scale-110 object-cover object-center"
                  />
                </picture>
                <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply" />
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-16 bg-white p-6 lg:p-8 premium-shadow z-10 max-w-[240px] lg:max-w-[280px]">
                <p className="font-serif text-lg lg:text-xl text-brand-navy italic leading-snug mb-3 lg:mb-4">
                  "A clareza Ã© o primeiro passo para a seguranÃ§a da sua famÃ­lia."
                </p>
                <p className="text-[9px] lg:text-[10px] font-bold text-brand-graphite/50 uppercase tracking-[0.2em]">
                  Especialista em Direito de FamÃ­lia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="servicos" bg="offwhite" className="!py-20 lg:!py-32">
        <motion.div
          variants={sectionIntro}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mb-12 lg:mb-16 text-center lg:text-left"
        >
          <span className="text-brand-graphite/50 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 lg:mb-4 block">Nossa Expertise</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-navy">Como podemos apoiar sua famÃ­lia</h2>
        </motion.div>

        <motion.div
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              variants={cardReveal}
              transition={{ delay: index * 0.02, ease: smoothEase }}
            >
              <Link to={service.path} className="group block h-full bg-white p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="text-brand-gold mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-serif text-brand-navy mb-4 transition-colors duration-300 group-hover:text-brand-gold">{service.title}</h3>
                <p className="text-brand-graphite/60 leading-relaxed text-sm">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Process Section */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left: Steps */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.h2
              variants={sectionIntro}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              className="text-3xl md:text-5xl font-serif text-brand-navy mb-12 lg:mb-16 leading-tight"
            >
              Clareza e acolhimento em cada <br />etapa do caminho
            </motion.h2>
            
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              className="space-y-12 lg:space-y-16 text-left"
            >
              {[
                { title: 'Acolhimento inicial', desc: 'Conte sua histÃ³ria com total sigilo em uma conversa segura e humanizada.' },
                { title: 'OrientaÃ§Ã£o transparente', desc: 'Analisamos sua situaÃ§Ã£o e explicamos os caminhos legais de forma simples e direta.' },
                { title: 'Acompanhamento prÃ³ximo', desc: 'Esteja a par de cada evoluÃ§Ã£o do seu caso com transparÃªncia e agilidade.' }
              ].map((step, i) => (
                <motion.div key={i} variants={cardReveal} className="flex gap-6 lg:gap-8 items-start">
                  <span className="font-serif text-4xl lg:text-5xl text-brand-gold italic opacity-60 shrink-0 leading-none pt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-serif text-brand-navy mb-2 lg:mb-3">{step.title}</h3>
                    <p className="text-brand-graphite/60 text-sm lg:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dark Card */}
          <div className="lg:col-span-5">
            <motion.div
              variants={contentReveal}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              className="bg-[#111827] rounded-3xl p-8 lg:p-12 text-white shadow-2xl sticky top-32"
            >
              <h3 className="text-xl lg:text-2xl font-serif mb-8 lg:mb-10">Por que confiar na Bonvenuto?</h3>
              
              <div className="space-y-6 lg:space-y-8">
                {[
                  'EspecializaÃ§Ã£o exclusiva em Direito das FamÃ­lias e na proteÃ§Ã£o integral da crianÃ§a.',
                  'Linguagem acessÃ­vel: traduzimos o juridiquÃªs para que vocÃª tome decisÃµes com seguranÃ§a.',
                  'Agilidade digital: resolvemos as etapas burocrÃ¡ticas com eficiÃªncia e sem deslocamentos desnecessÃ¡rios.'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <ShieldCheck className="text-brand-gold shrink-0 mt-1" size={20} />
                    <p className="text-white/70 leading-relaxed text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </Section>

      {/* FAQ Section */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={sectionIntro}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-navy">DÃºvidas Frequentes</h2>
          </motion.div>
          
          <Accordion items={faqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section bg="offwhite" className="!pb-32">
        <div className="container-custom">
          <motion.div
            variants={ctaPanelReveal}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="bg-black rounded-3xl p-8 lg:p-20 text-center text-white shadow-2xl"
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                DÃª o prÃ³ximo passo com seguranÃ§a
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-10 leading-relaxed">
                Converse com nossa equipe e receba o amparo necessÃ¡rio para o seu momento.
              </p>
              <a
                id="consulta-cta-final-home"
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto"
              >
                <MessageCircle size={20} className="mr-3" />
                Falar com um especialista no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
