import { motion } from 'motion/react';
import { MessageCircle, Search, Map, Languages, ShieldCheck } from 'lucide-react';
import Section from '../components/ui/Section';
import { CONTACT_INFO } from '../constants';

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageCircle size={32} />,
      title: 'Acolhimento Inicial',
      desc: 'Conte sua história em suas próprias palavras. Estamos aqui para ouvir você sem julgamentos ou termos técnicos difíceis.'
    },
    {
      icon: <Search size={32} />,
      title: 'Olhar Especializado',
      desc: 'Analisamos seu caso sob uma ótica técnica e humana, identificando os caminhos que melhor preservam sua segurança e a de sua família.'
    },
    {
      icon: <Map size={32} />,
      title: 'Plano de Ação',
      desc: 'Apresentamos os próximos passos com clareza. Você saberá como estaremos ao seu lado em cada etapa desta jornada.'
    }
  ];

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
                <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-[10px]">
                  A JORNADA COM BONVENUTO
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl lg:text-[5.5rem] font-serif text-brand-navy leading-[1.1] mb-6 lg:mb-8"
              >
                Você não precisa ter todas as <span className="italic">respostas</span> antes de buscar apoio.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl text-brand-graphite/70 leading-relaxed mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0"
              >
                Nossa missão é transformar a complexidade jurídica em um caminho de clareza e acolhimento. O primeiro passo é o início de uma parceria pautada no respeito e na confiança.
              </motion.p>
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
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                  alt="Nossa Equipe"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply" />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 lg:w-48 lg:h-48 bg-brand-gold/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-navy mb-4 lg:mb-6">O Caminho para sua Resolução</h2>
          <div className="w-16 lg:w-24 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col relative"
            >
              <span className="font-serif text-5xl lg:text-6xl text-brand-gold italic opacity-20 absolute top-4 left-4">
                0{i + 1}
              </span>
              <div className="text-brand-gold mb-6 relative z-10 mt-6 lg:mt-8">
                {step.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-serif text-brand-navy mb-3 lg:mb-4 relative z-10">{step.title}</h3>
              <p className="text-brand-graphite/60 leading-relaxed text-sm relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Expectations Section */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-navy mb-4 lg:mb-6 leading-tight">
              Nosso compromisso com você
            </h2>
            <p className="text-brand-graphite/60 text-base lg:text-lg leading-relaxed">
              Nosso compromisso vai além do âmbito jurídico. Oferecemos suporte e tranquilidade para que você atravesse este momento de transição.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Humanized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-8 lg:p-10 text-white rounded-2xl flex flex-col"
            >
              <div className="text-brand-gold mb-6">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif mb-3 lg:mb-4">Atenção Individualizada</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Você não é um número de processo. Cada interação é pautada na empatia e na compreensão da sua realidade familiar única.
              </p>
            </motion.div>

            {/* Card 2: Transparent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-graphite/5 p-8 lg:p-10 text-brand-navy rounded-2xl flex flex-col"
            >
              <div className="text-brand-gold mb-6">
                <Languages size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-serif mb-3 lg:mb-4">Comunicação Clara</h3>
              <p className="text-brand-graphite/60 leading-relaxed text-sm">
                Traduzimos o "juridiquês" para que você tenha total compreensão e controle sobre as decisões que impactam sua vida.
              </p>
            </motion.div>

            {/* Card 3: Discretion (Wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 bg-brand-graphite/5 p-8 lg:p-10 text-brand-navy rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <div className="text-brand-gold mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl lg:text-2xl font-serif mb-3 lg:mb-4">Sigilo e Segurança</h3>
                <p className="text-brand-graphite/60 leading-relaxed text-sm">
                  O sigilo profissional e a proteção de dados são os pilares da nossa relação. Sua história está segura conosco.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden h-40 lg:h-48">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" 
                  alt="Confiança" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section bg="offwhite" className="!pb-32">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6 lg:mb-8 inline-block bg-brand-gold/10 rounded-full px-6 py-2">
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-[10px] lg:text-xs">
                AGENDE SUA CONSULTA INICIAL
              </span>
            </div>
            
            <h2 className="text-3xl md:text-7xl font-serif text-brand-navy mb-6 lg:mb-8 leading-tight">
              Dê o próximo passo com segurança
            </h2>
            
            <p className="text-brand-graphite/60 text-base md:text-xl mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe está pronta para ouvir você. Clique abaixo para iniciar uma conversa acolhedora e segura.
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
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
