import { motion } from 'motion/react';
import { MessageCircle, Scale, Users, ShieldCheck } from 'lucide-react';
import Section from '../components/ui/Section';
import { CONTACT_INFO } from '../constants';
import drCarloAboutImage from '../assets/Foto Carlo2.jpg';

export default function About() {
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
                  PROPÓSITO & COMPROMISSO
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl lg:text-[5.5rem] font-serif text-brand-navy leading-[1.1] mb-6 lg:mb-8"
              >
                Especialistas em <span className="text-brand-gold italic">Direito de Família</span> com foco na proteção da criança.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl text-brand-graphite/70 leading-relaxed mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0"
              >
                Acreditamos que o Direito deve acolher pessoas e preservar o futuro das próximas gerações. Atuamos com a discrição e a seriedade que o ambiente familiar exige.
              </motion.p>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative lg:ml-auto w-full max-w-sm mx-auto lg:max-w-none mt-12 lg:mt-0"
            >
              <div className="aspect-[4/5] rounded-tl-[60px] rounded-br-[60px] lg:rounded-tl-[100px] lg:rounded-br-[100px] overflow-hidden premium-shadow relative z-0 bg-brand-navy">
                <img
                  src={drCarloAboutImage}
                  alt="Dr. Carlo Bonvenuto"
                  className="w-full h-full scale-110 object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply" />
              </div>
              
              {/* Floating Quote Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-12 bg-brand-gold p-6 lg:p-10 max-w-[240px] lg:max-w-xs premium-shadow"
              >
                <p className="text-brand-navy font-serif text-lg lg:text-2xl leading-tight">
                  "A proteção do menor é o alicerce de toda a nossa prática."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-10 lg:space-y-12 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-navy">Nossa Abordagem</h2>
            
            <div className="space-y-8 lg:space-y-10 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-graphite/5 rounded-lg flex items-center justify-center text-brand-gold shrink-0">
                  <Scale size={24} />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-serif font-bold text-brand-navy mb-2">Rigor e Excelência</h4>
                  <p className="text-brand-graphite/60 leading-relaxed text-sm">
                    Excelência técnica em cada etapa, garantindo que os direitos da criança sejam a prioridade absoluta em qualquer decisão.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-graphite/5 rounded-lg flex items-center justify-center text-brand-gold shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-serif font-bold text-brand-navy mb-2">Acolhimento Humano</h4>
                  <p className="text-brand-graphite/60 leading-relaxed text-sm">
                    Compreendemos a sensibilidade dos processos familiares e oferecemos um suporte pautado pela empatia e clareza.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Transparency Card */}
          <div className="relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-16 shadow-[0_4px_40px_rgba(0,0,0,0.04)] relative z-10"
            >
              <h3 className="text-2xl md:text-4xl font-serif text-brand-navy mb-6 lg:mb-8 italic">Transparência</h3>
              <p className="text-brand-graphite/60 leading-relaxed mb-10 lg:mb-12 text-base lg:text-lg">
                Nossa comunicação é direta e transparente. Traduzimos a complexidade jurídica para que você decida com segurança sobre o que há de mais precioso: sua família.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg overflow-hidden grayscale">
                  <img 
                    src={drCarloAboutImage}
                    alt={`Dr. ${CONTACT_INFO.lawyerName}`} 
                    className="w-full h-full scale-110 object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <p className="font-serif text-brand-navy font-bold text-sm lg:text-base">Dr. {CONTACT_INFO.lawyerName}</p>
                  <p className="text-brand-graphite/40 text-[9px] lg:text-[10px] uppercase tracking-widest">FUNDADOR & SÓCIO DIRETOR | OAB/SP {CONTACT_INFO.lawyerOab}</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Action Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-4 lg:-right-6 z-20"
            >
              <a 
                id="consulta-cta-meio-sobre"
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e67e22] text-white px-5 lg:px-6 py-3 rounded-lg flex items-center gap-3 font-bold text-[10px] lg:text-xs tracking-widest uppercase shadow-xl hover:bg-[#d35400] transition-colors"
              >
                <MessageCircle size={16} />
                FALAR COM UM ESPECIALISTA
              </a>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Pillars Section */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-navy">Nossos Pilares</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Pillar 01 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-graphite/5 p-10 lg:p-12 relative overflow-hidden flex flex-col min-h-[280px] lg:min-h-[320px]"
          >
            <span className="font-serif text-[8rem] lg:text-[10rem] text-brand-navy/5 absolute -top-8 lg:-top-10 -left-4 leading-none select-none">
              01
            </span>
            <div className="mt-auto relative z-10">
              <h3 className="text-xl lg:text-2xl font-serif text-brand-navy mb-3 lg:mb-4">Ética e Sigilo</h3>
              <p className="text-brand-graphite/60 leading-relaxed text-sm">
                Conduzimos cada caso com integridade, preservando o sigilo e a dignidade de todos os envolvidos.
              </p>
            </div>
          </motion.div>

          {/* Pillar 02 - Dark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-navy p-10 lg:p-12 relative overflow-hidden flex flex-col min-h-[280px] lg:min-h-[320px] text-white"
          >
            <span className="font-serif text-[8rem] lg:text-[10rem] text-white/5 absolute -top-8 lg:-top-10 -left-4 leading-none select-none">
              02
            </span>
            <div className="mt-auto relative z-10">
              <h3 className="text-xl lg:text-2xl font-serif mb-3 lg:mb-4">Caminhos Conciliadores</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Priorizamos soluções amigáveis e sustentáveis, buscando minimizar os impactos emocionais para as crianças.
              </p>
            </div>
          </motion.div>

          {/* Pillar 03 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-graphite/5 p-10 lg:p-12 relative overflow-hidden flex flex-col min-h-[280px] lg:min-h-[320px]"
          >
            <span className="font-serif text-[8rem] lg:text-[10rem] text-brand-navy/5 absolute -top-8 lg:-top-10 -left-4 leading-none select-none">
              03
            </span>
            <div className="mt-auto relative z-10">
              <h3 className="text-xl lg:text-2xl font-serif text-brand-navy mb-3 lg:mb-4">Olhar para o Futuro</h3>
              <p className="text-brand-graphite/60 leading-relaxed text-sm">
                Atuamos hoje para que o amanhã da sua família seja pautado pela estabilidade e pela segurança jurídica.
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-7xl font-serif text-brand-navy mb-6 lg:mb-8 leading-tight">
              O primeiro passo para a sua tranquilidade é <span className="text-brand-gold italic">uma conversa acolhedora.</span>
            </h2>
            
            <p className="text-brand-graphite/60 text-base md:text-xl mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para ouvir sua história e oferecer o amparo jurídico necessário para proteger quem você ama.
            </p>
            
            <a
              id="consulta-cta-final-sobre"
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
