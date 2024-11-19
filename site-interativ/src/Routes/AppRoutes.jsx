// src/Routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import QuizPage from '../Pages/QuizPage';
import Experimentos from '../components/Experimentos';
import MapaEnergia from '../components/MapaEnergia';
import Simulador from '../components/Simulador';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/experimentos" element={<Experimentos />} />
      <Route path="/mapa-energia" element={<MapaEnergia />} />
      <Route path="/simulador" element={<Simulador />} />
    </Routes>
  </Router>
);

export default AppRoutes;
