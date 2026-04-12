import { motion } from 'motion/react';
import { MessageCircle, ShieldCheck, Baby, Clock, Scale, Users, Heart, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Accordion from '../components/ui/Accordion';
import { CONTACT_INFO } from '../constants';

export default function Home() {
  const services = [
    {
      title: 'Pensão Alimentícia',
      description: 'Asseguramos o suporte financeiro necessário para o desenvolvimento saudável e digno dos seus filhos.',
      path: '/pensao-alimenticia',
      icon: <Baby size={24} strokeWidth={1.5} />,
    },
    {
      title: 'Pensão Atrasada',
      description: 'Regularização de valores em aberto: protegemos o direito ao amparo retroativo com total segurança jurídica.',
      path: '/pensao-atrasada',
      icon: <Clock size={24} strokeWidth={1.5} />,
    },
    {
      title: 'Revisão de Pensão',
      description: 'Ajuste e equilíbrio: adequamos os valores da pensão à realidade atual da sua família.',
      path: '/revisao-de-pensao',
      icon: <Scale size={24} strokeWidth={1.5} />,
    },
    {
      title: 'Paternidade e Pensão',
      description: 'Reconhecimento de vínculo: o direito à identidade e ao suporte financeiro para o seu filho.',
      path: '/paternidade-e-pensao',
      icon: <Users size={24} strokeWidth={1.5} />,
    },
    {
      title: 'Alimentos Gravídicos',
      description: 'Amparo desde o início: suporte financeiro para uma gestação segura e tranquila.',
      path: '/alimentos-gravidicos',
      icon: <Heart size={24} strokeWidth={1.5} />,
    },
    {
      title: 'Guarda e Convivência',
      description: 'Preservação de vínculos: organizamos rotinas que priorizam o bem-estar e o convívio familiar.',
      path: '/guarda-e-convivencia',
      icon: <HeartHandshake size={24} strokeWidth={1.5} />,
    },
  ];

  const faqs = [
    { q: 'Como é calculado o valor da pensão?', a: 'O valor é definido buscando um equilíbrio justo entre as necessidades da criança e a capacidade financeira de quem irá pagar.' },
    { q: 'E se o pai ou a mãe não tiver carteira assinada?', a: 'A pensão é devida mesmo sem vínculo formal. A justiça pode fixar o valor com base no salário mínimo ou em evidências da capacidade financeira real.' },
    { q: 'Posso pedir pensão ainda durante a gravidez?', a: 'Sim. Através dos Alimentos Gravídicos, é possível assegurar o suporte financeiro necessário para as despesas da gestação.' },
  ];

  return (
    <div className="overflow-hidden bg-brand-offwhite">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl z-10 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-7xl lg:text-[5.5rem] font-serif text-brand-navy leading-[1.1] mb-6 lg:mb-8"
              >
                Proteção jurídica e acolhimento para o que você tem de <span className="text-brand-gold italic">mais precioso.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-xl text-brand-graphite/70 leading-relaxed mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0"
              >
                Entenda seus direitos com clareza e receba o amparo necessário para atravessar este momento com segurança e tranquilidade.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto"
                >
                  <MessageCircle size={20} className="mr-3" />
                  Falar com um especialista no WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative lg:ml-auto w-full max-w-sm mx-auto lg:max-w-none mt-12 lg:mt-0"
            >
              <div className="aspect-[3/4] lg:aspect-[4/5] rounded-t-[120px] lg:rounded-t-[200px] overflow-hidden premium-shadow relative z-0">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                  alt="Advogado Especialista"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply" />
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-16 bg-white p-6 lg:p-8 premium-shadow z-10 max-w-[240px] lg:max-w-[280px]">
                <p className="font-serif text-lg lg:text-xl text-brand-navy italic leading-snug mb-3 lg:mb-4">
                  "A clareza é o primeiro passo para a segurança da sua família."
                </p>
                <p className="text-[9px] lg:text-[10px] font-bold text-brand-graphite/50 uppercase tracking-[0.2em]">
                  Especialista em Direito de Família
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="servicos" bg="offwhite" className="!py-20 lg:!py-32">
        <div className="mb-12 lg:mb-16 text-center lg:text-left">
          <span className="text-brand-graphite/50 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 lg:mb-4 block">Nossa Expertise</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-navy">Como podemos apoiar sua família</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.path} className="block h-full bg-white p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <div className="text-brand-gold mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-serif text-brand-navy mb-4">{service.title}</h3>
                <p className="text-brand-graphite/60 leading-relaxed text-sm">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left: Steps */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-navy mb-12 lg:mb-16 leading-tight">
              Clareza e acolhimento em cada <br />etapa do caminho
            </h2>
            
            <div className="space-y-12 lg:space-y-16 text-left">
              {[
                { title: 'Acolhimento inicial', desc: 'Conte sua história com total sigilo em uma conversa segura e humanizada.' },
                { title: 'Orientação transparente', desc: 'Analisamos sua situação e explicamos os caminhos legais de forma simples e direta.' },
                { title: 'Acompanhamento próximo', desc: 'Esteja a par de cada evolução do seu caso com transparência e agilidade.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 lg:gap-8 items-start">
                  <span className="font-serif text-4xl lg:text-5xl text-brand-gold italic opacity-60 shrink-0 leading-none pt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-serif text-brand-navy mb-2 lg:mb-3">{step.title}</h3>
                    <p className="text-brand-graphite/60 text-sm lg:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dark Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#111827] rounded-3xl p-8 lg:p-12 text-white shadow-2xl sticky top-32">
              <h3 className="text-xl lg:text-2xl font-serif mb-8 lg:mb-10">Por que confiar na Bonvenuto?</h3>
              
              <div className="space-y-6 lg:space-y-8">
                {[
                  'Especialização exclusiva em Direito das Famílias e na proteção integral da criança.',
                  'Linguagem acessível: traduzimos o juridiquês para que você tome decisões com segurança.',
                  'Agilidade digital: resolvemos as etapas burocráticas com eficiência e sem deslocamentos desnecessários.'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <ShieldCheck className="text-brand-gold shrink-0 mt-1" size={20} />
                    <p className="text-white/70 leading-relaxed text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* FAQ Section */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-navy">Dúvidas Frequentes</h2>
          </div>
          
          <Accordion items={faqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section bg="offwhite" className="!pb-32">
        <div className="container-custom">
          <div className="bg-black rounded-3xl p-8 lg:p-20 text-center text-white shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                Dê o próximo passo com segurança
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-10 leading-relaxed">
                Converse com nossa equipe e receba o amparo necessário para o seu momento.
              </p>
              <a
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
        </div>
      </Section>
    </div>
  );
}
