import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { CONTACT_INFO } from '../constants';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Como Funciona', path: '/como-funciona' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contato', path: '/contato' },
  ];

  const services = [
    { name: 'Pensão Alimentícia', path: '/pensao-alimenticia' },
    { name: 'Pensão Atrasada', path: '/pensao-atrasada' },
    { name: 'Revisão de Pensão', path: '/revisao-de-pensao' },
    { name: 'Paternidade e Pensão', path: '/paternidade-e-pensao' },
    { name: 'Alimentos Gravídicos', path: '/alimentos-gravidicos' },
    { name: 'Guarda e Convivência', path: '/guarda-e-convivencia' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-serif font-semibold tracking-tighter text-brand-navy">
              BONVENUTO
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-medium -mt-1">
              ADVOCACIA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                  location.pathname === link.path ? 'text-brand-gold' : 'text-brand-graphite'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-brand-navy/90 transition-all premium-shadow"
            >
              <MessageCircle size={18} />
              Atendimento
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-graphite p-2 relative z-[110]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 top-20 bg-brand-offwhite z-[40] overflow-y-auto"
          >
            <div className="container-custom py-10 flex flex-col min-h-[calc(100vh-5rem)]">
              <div className="space-y-2 mb-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 text-3xl font-serif text-brand-navy border-b border-brand-gold/10"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="mb-12">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6">Nossos Serviços</p>
                <div className="grid grid-cols-1 gap-y-5">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-brand-graphite/70 hover:text-brand-gold transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-10 pb-20">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full flex items-center justify-center py-5"
                >
                  <MessageCircle size={20} className="mr-3" />
                  Falar com um especialista
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
