import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import bonvenutoLogo from '../assets/Bonvenuto_logo-risca-branco-bg.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Pensão Alimentícia', path: '/pensao-alimenticia' },
    { name: 'Pensão Atrasada', path: '/pensao-atrasada' },
    { name: 'Revisão de Pensão', path: '/revisao-de-pensao' },
    { name: 'Paternidade e Pensão', path: '/paternidade-e-pensao' },
    { name: 'Alimentos Gravídicos', path: '/alimentos-gravidicos' },
    { name: 'Guarda e Convivência', path: '/guarda-e-convivencia' },
  ];

  const quickLinks = [
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Como Funciona', path: '/como-funciona' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contato', path: '/contato' },
    { name: 'Política de Privacidade', path: '/politica-de-privacidade' },
  ];

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center lg:text-left">
          {/* Brand Column */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            <Link to="/" className="flex items-center">
              <img
                src={bonvenutoLogo}
                alt="Bonvenuto Advocacia"
                loading="lazy"
                decoding="async"
                width={320}
                height={96}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
              Especialistas em Direito de Família com foco em soluções humanas, seguras e ágeis para o bem-estar dos seus filhos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-brand-gold">Áreas de Atuação</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-white/60 hover:text-brand-gold transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-brand-gold">Links Úteis</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 hover:text-brand-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-serif text-lg font-medium mb-6 text-brand-gold">Contato</h4>
            <ul className="space-y-4 text-center lg:text-left">
              <li className="flex items-start justify-center lg:justify-start gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-brand-gold shrink-0" />
                <span>Atendimento Digital para todo o Brasil</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3 text-white/60 text-sm">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>{CONTACT_INFO.phoneFormatted}</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3 text-white/60 text-sm">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
            <div className="mt-8 w-full sm:w-auto">
              <a
                id="consulta-cta-footer"
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full flex items-center justify-center"
              >
                <MessageCircle size={20} className="mr-3" />
                Falar com um Especialista
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-[10px] lg:text-xs text-white/40">
          <p>© {currentYear} Bonvenuto Advocacia. Todos os direitos reservados.</p>
          <p>OAB/SP {CONTACT_INFO.oabFirm} | CNPJ {CONTACT_INFO.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}
