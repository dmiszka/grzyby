import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './HomePage';
import GatunkiGrzybow from './components/GatunkiGrzybow';
import Mapa from './components/Mapa';
import ONas from './components/ONas';
import GrzybyPodOchrona from './components/GrzybyPodOchrona';
import Footer from './components/Footer';
import './styles/App.css';


const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gatunki-grzybow" element={<GatunkiGrzybow />} />
          <Route path="/mapa" element={<Mapa />} />
          {/* <Route path="/wyszukiwarka" element={<SearchPage />} /> */}
          <Route path="/Grzyby-pod-ochrona" element={<GrzybyPodOchrona />} />
          <Route path="/o-nas" element={<ONas />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;