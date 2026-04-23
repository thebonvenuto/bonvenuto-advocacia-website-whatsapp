/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, type ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PensaoAlimenticia from './pages/PensaoAlimenticia';
import PensaoAtrasada from './pages/PensaoAtrasada';
import RevisaoPensao from './pages/RevisaoPensao';
import PaternidadePensao from './pages/PaternidadePensao';
import AlimentosGravidicos from './pages/AlimentosGravidicos';
import GuardaConvivencia from './pages/GuardaConvivencia';

const About = lazy(() => import('./pages/About'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const TypographyPreview = lazy(() => import('./pages/TypographyPreview'));

function LazyRoute({ children }: { children: ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pensao-alimenticia" element={<PensaoAlimenticia />} />
          <Route path="/pensao-atrasada" element={<PensaoAtrasada />} />
          <Route path="/revisao-de-pensao" element={<RevisaoPensao />} />
          <Route path="/paternidade-e-pensao" element={<PaternidadePensao />} />
          <Route path="/alimentos-gravidicos" element={<AlimentosGravidicos />} />
          <Route path="/guarda-e-convivencia" element={<GuardaConvivencia />} />
          <Route
            path="/sobre"
            element={
              <LazyRoute>
                <About />
              </LazyRoute>
            }
          />
          <Route
            path="/como-funciona"
            element={
              <LazyRoute>
                <HowItWorks />
              </LazyRoute>
            }
          />
          <Route
            path="/faq"
            element={
              <LazyRoute>
                <FAQ />
              </LazyRoute>
            }
          />
          <Route
            path="/contato"
            element={
              <LazyRoute>
                <Contact />
              </LazyRoute>
            }
          />
          <Route
            path="/politica-de-privacidade"
            element={
              <LazyRoute>
                <Privacy />
              </LazyRoute>
            }
          />
          <Route
            path="/tipografia-preview"
            element={
              <LazyRoute>
                <TypographyPreview />
              </LazyRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}
