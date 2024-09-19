import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import ColorBalls from '../../components/color_balls'

const Home = () => {
    const navigate = useNavigate();

    return(
        <div className='home-container'>
            <h1 className='home-title'>Como você está se sentindo hoje?</h1>

            <button className='navigate-button' onClick={() => navigate('/emotions')}>
                Responder
            </button>
                       
            <img src={require('../../assets/Home/Medo.png')} alt='imagem do medo' className='corner-image bottom-left-image'></img>
            <img src={require('../../assets/Home/Raiva-ball.png')} alt='imagem do raiva' className='corner-image  bottom-right-image'></img>
            <img src={require('../../assets/Home/Teclat.png')} alt='logo da tecla' className='corner-image top-left-image'></img>
            <img src={require('../../assets/Home/Alegria.png')} alt='imagem da alegria' className='corner-image top-right-image'></img>
            <div className="color-balls-wrapper">
                <ColorBalls className="bottom-left-ball" bgColor="#834bab" direction="horizontal" />
                <ColorBalls className="bottom-left-ball-2" bgColor="#834bab" direction="vertical" /> 
                <ColorBalls className='top-right-ball' bgColor="#ffea00" direction="vertical" />
                <ColorBalls className="top-right-ball-2" bgColor="#ffea00" direction="horizontal" /> 
                <ColorBalls className="top-left-ball" bgColor="#00e131" direction="horizontal" />
                <ColorBalls className="bottom-right-ball" bgColor="#ff1700" direction="horizontal" />
            </div>
        </div>
    )
}

export default Home;