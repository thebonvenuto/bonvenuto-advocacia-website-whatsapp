import { motion } from 'motion/react';
import { Lock, ShieldCheck, Mail, MessageCircle } from 'lucide-react';
import Section from '../components/ui/Section';
import { CONTACT_INFO } from '../constants';

export default function Privacy() {
  return (
    <div className="overflow-hidden bg-brand-offwhite">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 lg:mb-8 inline-block"
            >
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-[10px]">
                AUXILIARY LEGAL PAGE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl lg:text-[5.5rem] font-serif text-brand-navy leading-[1.1] mb-6 lg:mb-8"
            >
              Política de <br /><span className="text-brand-gold italic">Privacidade</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-brand-graphite/70 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Na Bonvenuto Advocacia, a proteção da sua privacidade é um compromisso fundamental. Esta política explica, de forma simples e clara, como cuidamos das suas informações em conformidade com a LGPD.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Bento Grid */}
      <Section bg="offwhite" className="!py-0 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* 01. Coleta de Informações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white p-8 lg:p-16 shadow-[0_4px_40px_rgba(0,0,0,0.03)]"
          >
            <div className="flex items-start gap-4 mb-6 lg:mb-8">
              <span className="text-brand-gold font-serif text-2xl lg:text-3xl italic leading-none">01.</span>
              <h2 className="text-2xl md:text-4xl font-serif text-brand-navy">Como coletamos dados</h2>
            </div>
            
            <p className="text-brand-graphite/60 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">
              Recebemos as informações que você compartilha conosco ao preencher formulários, solicitar uma consulta ou entrar em contato via WhatsApp. Isso inclui:
            </p>
            
            <ul className="space-y-4">
              {[
                'Nome completo e dados de contato (e-mail, telefone);',
                'Informações relacionadas ao seu caso jurídico;',
                'Dados de navegação através de cookies para melhorar sua experiência.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 02. Uso dos Dados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-12 bg-brand-graphite/5 p-8 lg:p-16 relative"
          >
            <div className="flex items-start gap-4 mb-6 lg:mb-8">
              <span className="text-brand-gold font-serif text-2xl lg:text-3xl italic leading-none">02.</span>
              <h2 className="text-2xl md:text-4xl font-serif text-brand-navy">Para que usamos seus dados</h2>
            </div>
            
            <p className="text-brand-graphite/60 leading-relaxed mb-8 lg:mb-10 max-w-3xl text-sm lg:text-base">
              Suas informações são utilizadas apenas para finalidades específicas e legítimas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-brand-navy uppercase mb-3 lg:mb-4">Atendimento Jurídico</h4>
                <p className="text-brand-graphite/60 leading-relaxed text-sm">
                  Para analisar seu caso, agendar consultas e oferecer o suporte necessário.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-brand-navy uppercase mb-3 lg:mb-4">Diálogo e Suporte</h4>
                <p className="text-brand-graphite/60 leading-relaxed text-sm">
                  Para responder suas dúvidas e manter você informado sobre o andamento do seu atendimento.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-brand-navy uppercase mb-3 lg:mb-4">Proteção</h4>
                <p className="text-brand-graphite/60 leading-relaxed text-sm">
                  Para garantir a segurança do nosso ambiente digital e cumprir obrigações legais.
                </p>
              </div>
            </div>

            {/* Floating Action Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-6 right-10 z-20 hidden lg:block"
            >
              <a 
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e67e22] text-white px-6 py-3 rounded-lg flex items-center gap-3 font-bold text-xs tracking-widest uppercase shadow-xl hover:bg-[#d35400] transition-colors"
              >
                <MessageCircle size={18} />
                FALAR COM UM ESPECIALISTA
              </a>
            </motion.div>
          </motion.div>

          {/* Compartilhamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 bg-brand-graphite/5 p-8 lg:p-16 flex flex-col justify-between min-h-[280px] lg:min-h-[320px]"
          >
            <div>
              <h2 className="text-xl md:text-3xl font-serif text-brand-navy mb-4 lg:mb-6">Respeito aos seus dados</h2>
              <p className="text-brand-graphite/60 leading-relaxed text-sm">
                Não vendemos nem alugamos suas informações. O compartilhamento só ocorre quando estritamente necessário para o seu processo ou com parceiros de tecnologia que seguem regras rígidas de sigilo.
              </p>
            </div>
            <div className="text-brand-gold self-end">
              <Lock size={32} />
            </div>
          </motion.div>

          {/* Seus Direitos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6 bg-brand-navy p-8 lg:p-16 text-white flex flex-col justify-between min-h-[280px] lg:min-h-[320px]"
          >
            <div>
              <h2 className="text-xl md:text-3xl font-serif mb-4 lg:mb-6">Seu Controle</h2>
              <p className="text-white/60 leading-relaxed text-sm">
                Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento. Garantimos que você tenha total controle sobre suas informações pessoais.
              </p>
            </div>
            <div className="text-brand-gold self-end">
              <ShieldCheck size={32} />
            </div>
          </motion.div>

        </div>

        {/* Updates Section */}
        <div className="mt-16 lg:mt-24 max-w-4xl text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-serif text-brand-navy mb-6 lg:mb-8">Evolução Constante</h2>
          <p className="text-brand-graphite/60 leading-relaxed mb-10 lg:mb-12 text-sm lg:text-base">
            Esta política pode ser atualizada para refletir melhorias em nossos processos ou mudanças na legislação. Recomendamos que você a consulte sempre que desejar.
          </p>

          <div className="bg-brand-graphite/5 p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6 text-left">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-brand-navy uppercase mb-1">Dúvidas sobre privacidade?</p>
              <p className="text-brand-graphite/60 text-sm">Entre em contato: {CONTACT_INFO.email}</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
