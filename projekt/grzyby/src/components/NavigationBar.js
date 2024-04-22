import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Strona główna</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/gatunki-grzybow">Gatunki grzybów</Link>
        </li>
        <li className="nav-item">
          <Link to="/mapa">Mapa</Link>
        </li>
        <li className="nav-item">
          <Link to="/grzyby-pod-ochrona">Grzyby pod ochroną</Link>
        </li>
        <li className="nav-item">
          <Link to="/o-nas">O nas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;