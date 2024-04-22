import React from 'react';
import '../styles/App.css';
import '../styles/Mapa.css'; 

const Mapa = () => {
    return (
        <div>
            <h1>Mapa</h1>
            <p className='par'>Mapa przedstawiająca obszary występowania grzybów.</p>
            <div className="mapa-container">
                <img src='https://bi.im-g.pl/im/8f/f6/17/z25126031IH,Mapa-grzybow-2019.jpg'></img>
            </div>
        </div>
    );
};

export default Mapa;