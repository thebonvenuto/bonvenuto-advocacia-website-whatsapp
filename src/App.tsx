/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PensaoAlimenticia from './pages/PensaoAlimenticia';
import PensaoAtrasada from './pages/PensaoAtrasada';
import RevisaoPensao from './pages/RevisaoPensao';
import PaternidadePensao from './pages/PaternidadePensao';
import AlimentosGravidicos from './pages/AlimentosGravidicos';
import GuardaConvivencia from './pages/GuardaConvivencia';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

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
          <Route path="/sobre" element={<About />} />
          <Route path="/como-funciona" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/politica-de-privacidade" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}
