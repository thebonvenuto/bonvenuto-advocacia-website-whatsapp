import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const ROUTE_NAME_MAP: Record<string, string> = {
  '/': 'home',
  '/pensao-alimenticia': 'pensao_alimenticia',
  '/pensao-atrasada': 'pensao_atrasada',
  '/revisao-de-pensao': 'revisao_de_pensao',
  '/paternidade-e-pensao': 'paternidade_e_pensao',
  '/alimentos-gravidicos': 'alimentos_gravidicos',
  '/guarda-e-convivencia': 'guarda_e_convivencia',
  '/como-funciona': 'como_funciona',
  '/sobre': 'sobre',
  '/faq': 'faq',
  '/contato': 'contato',
  '/politica-de-privacidade': 'politica_de_privacidade',
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
    __lastTrackedRoutePath?: string;
  }
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    if (window.__lastTrackedRoutePath === pathname) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'route_view',
      page_path: pathname,
      page_title: document.title,
      route_name: ROUTE_NAME_MAP[pathname] || 'unknown_route',
    });

    window.__lastTrackedRoutePath = pathname;
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
