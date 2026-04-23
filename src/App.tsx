/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const PensaoAlimenticia = lazy(() => import('./pages/PensaoAlimenticia'));
const PensaoAtrasada = lazy(() => import('./pages/PensaoAtrasada'));
const RevisaoPensao = lazy(() => import('./pages/RevisaoPensao'));
const PaternidadePensao = lazy(() => import('./pages/PaternidadePensao'));
const AlimentosGravidicos = lazy(() => import('./pages/AlimentosGravidicos'));
const GuardaConvivencia = lazy(() => import('./pages/GuardaConvivencia'));
const About = lazy(() => import('./pages/About'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const TypographyPreview = lazy(() => import('./pages/TypographyPreview'));

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="min-h-[50vh] bg-brand-offwhite" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pensao-alimenticia" element={<PensaoAlimenticia />} />
            <Route path="/pensao-atrasada" element={<PensaoAtrasada />} />
            <Route path="/revisao-de-pensao" element={<RevisaoPensao />} />
            <Route path="/paternidade-e-pensao" element={<PaternidadePensao />} />
            <Route path="/alimentos-gravidicos" element={<AlimentosGravidicos />} />
            <Route path="/guarda-e-convivencia" element={<GuardaConvivencia />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/politica-de-privacidade" element={<Privacy />} />
            <Route path="/tipografia-preview" element={<TypographyPreview />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
