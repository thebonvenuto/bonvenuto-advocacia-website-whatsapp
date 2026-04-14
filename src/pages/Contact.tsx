import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import Section from '../components/ui/Section';
import FinalCTA from '../components/ui/FinalCTA';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MessageCircle size={32} />,
      title: 'WhatsApp',
      value: CONTACT_INFO.phoneFormatted,
      link: CONTACT_INFO.whatsappLink,
      highlight: true
    },
    {
      icon: <Mail size={32} />,
      title: 'E-mail',
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`
    },
    {
      icon: <MapPin size={32} />,
      title: 'Escritório Digital',
      value: 'Atendimento em todo o Brasil',
      link: '#'
    },
    {
      icon: <Clock size={32} />,
      title: 'Horário de Atendimento',
      value: 'Seg à Sex, 09h às 18h',
      link: '#'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-24 lg:py-32 relative">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">Canais Diretos</span>
            <div className="h-px w-8 bg-brand-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif mb-8 leading-tight"
          >
            Inicie uma <span className="text-brand-gold italic">conversa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
          >
            Estamos prontos para ouvir você com o sigilo e a atenção que o seu caso exige.
          </motion.p>
        </div>
      </section>

      <Section bg="white" className="!py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-navy leading-tight mb-8">
                Como prefere <br /><span className="italic">falar conosco?</span>
              </h2>
              <p className="text-brand-graphite/60 text-lg md:text-xl leading-relaxed">
                Escolha o canal que for mais confortável para você. Nossa equipe está preparada para oferecer um atendimento ágil e seguro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  id={item.highlight ? 'consulta-cta-hero-contato' : undefined}
                  href={item.link}
                  className={`group p-10 rounded-[40px] border transition-all duration-500 ${
                    item.highlight 
                    ? 'bg-brand-navy border-white/10 text-white premium-shadow' 
                    : 'bg-brand-offwhite border-brand-gold/5 text-brand-navy hover:bg-white hover:premium-shadow'
                  }`}
                >
                  <div className={`mb-8 group-hover:scale-110 transition-transform duration-500 ${item.highlight ? 'text-brand-gold' : 'text-brand-gold'}`}>
                    {item.icon}
                  </div>
                  <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 ${item.highlight ? 'text-white/40' : 'text-brand-navy/40'}`}>
                    {item.title}
                  </h4>
                  <p className="text-xl font-serif group-hover:text-brand-gold transition-colors leading-tight">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="sticky top-32">
            <div className="bg-brand-navy p-12 lg:p-20 rounded-[80px] text-white premium-shadow border border-white/10 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold">
                    <ShieldCheck size={28} />
                  </div>
                  <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">Atendimento Prioritário</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Necessidade de <br /><span className="italic text-brand-gold">apoio imediato?</span></h3>
                
                <p className="text-white/60 text-lg md:text-xl mb-12 leading-relaxed">
                  Para situações que demandam agilidade, o WhatsApp é o nosso canal mais direto. Clique abaixo para falar com um especialista agora.
                </p>

                <a
                  id="consulta-cta-meio-contato"
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-lg py-6 group"
                >
                  <MessageCircle size={24} />
                  Falar com um especialista no WhatsApp
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>

                <div className="mt-12 flex items-center justify-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
                    Atendimento online agora
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA 
        title="Prefere nos enviar uma mensagem?"
        subtitle="Envie um e-mail com um breve resumo da sua situação e retornaremos o contato em breve."
        ctaId="consulta-cta-final-contato"
      />
    </div>
  );
}
