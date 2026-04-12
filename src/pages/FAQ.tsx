import { motion } from 'motion/react';
import { MessageCircle, FileText, Clock, ChevronRight } from 'lucide-react';
import Section from '../components/ui/Section';
import { CONTACT_INFO } from '../constants';

export default function FAQ() {
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
                  CENTRAL DE ATENDIMENTO
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl lg:text-[5.5rem] font-serif text-brand-navy leading-[1.1] mb-6 lg:mb-8"
              >
                Dúvidas & <br />Orientações
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl text-brand-graphite/70 leading-relaxed mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0"
              >
                Acreditamos na transparência como base da confiança. Encontre aqui as respostas necessárias para iniciar sua jornada jurídica com segurança e clareza.
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
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Escritório Bonvenuto"
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Bento Grid */}
      <Section bg="offwhite" className="!py-20 lg:!py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Section 1: O Primeiro Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 lg:p-16 shadow-[0_4px_40px_rgba(0,0,0,0.03)] border-l-4 border-brand-gold"
          >
            <div className="flex items-center gap-4 mb-8 lg:mb-12">
              <ChevronRight className="text-brand-gold" size={24} />
              <h2 className="text-2xl md:text-4xl font-serif text-brand-navy italic">O Primeiro Contato</h2>
            </div>

            <div className="space-y-8 lg:space-y-12">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-brand-navy uppercase mb-3 lg:mb-4">Como funciona a primeira consulta?</h4>
                <p className="text-brand-graphite/60 leading-relaxed text-sm lg:text-base">
                  Escuta ativa: nosso primeiro contato é focado em ouvir você. Realizamos um diagnóstico cuidadoso para entender as nuances do seu caso e definir a melhor estratégia de apoio.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-brand-navy uppercase mb-3 lg:mb-4">Qual o custo da orientação estratégica?</h4>
                <p className="text-brand-graphite/60 leading-relaxed text-sm lg:text-base">
                  Investimento: o valor é definido com base na complexidade do seu caso. Durante nossa conversa inicial, apresentamos uma proposta transparente e adequada às suas necessidades.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Documentos Necessários */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 bg-brand-graphite/5 p-8 lg:p-16 flex flex-col"
          >
            <div className="text-brand-gold mb-6 lg:mb-8">
              <FileText size={32} />
            </div>
            <h2 className="text-2xl md:text-4xl font-serif text-brand-navy mb-6 lg:mb-8">Preparação</h2>
            <p className="text-brand-graphite/60 leading-relaxed mb-8 lg:mb-10 text-sm">
              Para facilitar o início do atendimento, recomendamos ter em mãos documentos de identificação, comprovante de residência e certidões de nascimento ou casamento.
            </p>
            <ul className="space-y-4">
              {['RG e CPF (ou CNH)', 'Comprovante de Endereço Atualizado', 'Certidões de Estado Civil'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3: Tempo de Resposta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 bg-brand-navy p-8 lg:p-16 text-white flex flex-col justify-between min-h-[320px] lg:min-h-[400px]"
          >
            <div>
              <h2 className="text-2xl md:text-4xl font-serif mb-6 lg:mb-8 italic text-brand-gold">Atenção e Cuidado</h2>
              <p className="text-white/60 leading-relaxed text-sm mb-8 lg:mb-12">
                Compreendemos a urgência de suas dúvidas. Por isso, priorizamos um retorno ágil para que você não fique sem respostas.
              </p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-serif text-white mb-2 italic">24h</p>
              <p className="text-[9px] lg:text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Prazo máximo para retorno</p>
            </div>
          </motion.div>

          {/* Section 4: O Caminho Judicial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 bg-brand-graphite/5 p-8 lg:p-16 relative overflow-hidden"
          >
            <h2 className="text-2xl md:text-4xl font-serif text-brand-navy mb-8 lg:mb-12 italic">O Caminho Judicial</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-brand-navy uppercase mb-3 lg:mb-4">Quanto tempo leva o processo?</h4>
                <p className="text-brand-graphite/60 leading-relaxed text-sm">
                  Duração do processo: cada caso possui seu próprio ritmo. Priorizamos caminhos conciliadores que buscam resolver a questão de forma mais harmoniosa e sustentável.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-brand-navy uppercase mb-3 lg:mb-4">Transparência</h4>
                <p className="text-brand-graphite/60 leading-relaxed text-sm">
                  Você receberá atualizações periódicas sobre o andamento do seu caso, garantindo total clareza sobre cada etapa percorrida.
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 opacity-5 hidden lg:block">
              <Clock size={200} className="translate-x-1/4 translate-y-1/4" />
            </div>
          </motion.div>

        </div>
      </Section>

      {/* Final CTA */}
      <Section bg="offwhite" className="!pb-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-20 shadow-[0_4px_60px_rgba(0,0,0,0.04)] rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          >
            <div className="max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-brand-graphite/40 uppercase">Suporte em tempo real</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-navy mb-6 leading-tight">
                Sua dúvida é específica? <br />Converse com nossa equipe.
              </h2>
              <p className="text-brand-graphite/60 text-base lg:text-lg">
                Nossa equipe está pronta para ouvir você e oferecer a orientação necessária para o seu caso particular.
              </p>
            </div>
            
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full lg:w-auto"
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
