import React from 'react';
import GrzybGallery from './components/GrzybGallery';
import './styles/HomePage.css';
import './styles/App.css';

const HomePage = () => {
    return (
        <div>
            <h1>Witaj w Atlasie Grzybów!</h1>
            <GrzybGallery />
            <div className="kafle">
                {/* Pozostała zawartość kafelków */}
            </div>
        </div>
    );
};

export default HomePage;