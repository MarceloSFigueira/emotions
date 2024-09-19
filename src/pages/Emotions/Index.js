import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const emotions = [
    { id: 3, image: require(`../../assets/emotions/Medo.png`), hoverImage: require(`../../assets/emotionsHover/MedoHover.png`), value: 'Medo', className: 'medo',color: '138,68,229', gradient: '0,0,0' },
    { id: 2, image: require(`../../assets/emotions/Ansiedade.png`), hoverImage: require(`../../assets/emotionsHover/AnsiedadeHover.png`), value: 'Ansiedade', className: 'ansiedade', color: '255,212,0', gradient: '221,102,24' },
    { id: 4, image: require(`../../assets/emotions/Raiva.png`), hoverImage: require(`../../assets/emotionsHover/RaivaHover.png`), value: 'Raiva', className: 'raiva', color: '255,23,0', gradient: '0,0,0'},
    { id: 5, image: require(`../../assets/emotions/Nojinho.png`), hoverImage: require(`../../assets/emotionsHover/NojinhoHover.png`), value: 'Nojinho', className: 'nojinho',color: '31,229,0', gradient: '11,85,0' },
    { id: 6, image: require(`../../assets/emotions/Inveja.png`), hoverImage: require(`../../assets/emotionsHover/InvejaHover.png`), value: 'Inveja', className:'inveja',color: '26,227,200', gradient: '1,39,34' },
    { id: 1, image: require(`../../assets/emotions/Alegria.png`), hoverImage: require(`../../assets/emotionsHover/AlegriaHover.png`), value: 'Alegria', className: 'alegria', color: '249,246,90',gradient: '101,87,0' },
    { id: 7, image: require(`../../assets/emotions/Tristeza.png`), hoverImage: require(`../../assets/emotionsHover/TristezaHover.png`), value: 'Tristeza', className: 'tristeza', color: '0,43,244', gradient: '20,56,101' },
    { id: 8, image: require(`../../assets/emotions/Vergonha.png`), hoverImage: require(`../../assets/emotionsHover/VergonhaHover.png`), value: 'Vergonha', className: 'vergonha' ,color: '215,48,149', gradient: '51,0,30'},
    { id: 9, image: require(`../../assets/emotions/Tedio.png`), hoverImage: require(`../../assets/emotionsHover/TedioHover.png`), value: 'Tedio', className:'tedio', color: '68,63,185', gradient: '0,0,0' },
  ];

  const emotionsCard = [
    { id: 1, image: require(`../../assets/emotions/Alegria.png`), hoverImage: require(`../../assets/emotionsHover/AlegriaHover.png`), value: 'Alegria', className: 'alegria', color: '249,246,90', gradient: '101,87,0' },
    { id: 7, image: require(`../../assets/emotions/Tristeza.png`), hoverImage: require(`../../assets/emotionsHover/TristezaHover.png`), value: 'Tristeza', className: 'tristeza', color: '0,43,244', gradient: '20,56,101' },
    { id: 4, image: require(`../../assets/emotions/Raiva.png`), hoverImage: require(`../../assets/emotionsHover/RaivaHover.png`), value: 'Raiva', className: 'raiva', color: '255,23,0', gradient: '0,0,0' },
    { id: 3, image: require(`../../assets/emotions/Medo.png`), hoverImage: require(`../../assets/emotionsHover/MedoHover.png`), value: 'Medo', className: 'medo', color: '138,68,229', gradient: '0,0,0'  },
    { id: 2, image: require(`../../assets/emotions/Ansiedade.png`), hoverImage: require(`../../assets/emotionsHover/AnsiedadeHover.png`), value: 'Ansiedade', className: 'ansiedade', color: '255,212,0', gradient: '221,102,24' },
    { id: 9, image: require(`../../assets/emotions/Tedio.png`), hoverImage: require(`../../assets/emotionsHover/TedioHover.png`), value: 'Tedio', className: 'tedio', color: '68,63,185', gradient: '0,0,0' },
    { id: 8, image: require(`../../assets/emotions/Vergonha.png`), hoverImage: require(`../../assets/emotionsHover/VergonhaHover.png`), value: 'Vergonha', className: 'vergonha', color: '215,48,149', gradient: '51,0,30' },
    { id: 6, image: require(`../../assets/emotions/Inveja.png`), hoverImage: require(`../../assets/emotionsHover/InvejaHover.png`), value: 'Inveja', className: 'inveja', color: '26,227,200', gradient: '1,39,34' },
    { id: 5, image: require(`../../assets/emotions/Nojinho.png`), hoverImage: require(`../../assets/emotionsHover/NojinhoHover.png`), value: 'Nojinho', className: 'nojinho', color: '31,229,0', gradient: '11,85,0' }
  ];
  

const Emotions = () => {
  const navigate = useNavigate();
  

  const handleClick = (emotion) => {
    localStorage.setItem('selectedEmotion', emotion.value);
    navigate('/forms');
  };

  return (
    <>
        <div className='logo-container'>
            <img 
                src= {require(`../../assets/logo.png`)}
                alt='logo'
                className='logo'
            />
        </div>
        <div className="emotions-container">
        {emotions.map(emotion => (
            <div key={emotion.id} className={`emotion-item ${emotion.className}`}>
               <button onClick={() => handleClick(emotion)} className="emotion-button">
                  <img
                  src={emotion.image}
                  alt={emotion.value}
                  className="emotion-img"
                  />
                  <img
                  src={emotion.hoverImage}
                  alt={emotion.value}
                  className="emotion-hover-img"
                  />
              </button>
            </div>
        ))}
        <div className="gradient-oval"></div>
        </div>
        <div className='card-container'>
          {emotionsCard.map(emotion => (
          <div 
            key={emotion.id} 
            className={`card ${emotion.value}`}
            style={{
              background: `linear-gradient(200deg, rgba(${emotion.color}, 1) 0%, rgba(${emotion.gradient}, 1) 100%)`
            }} 
            onClick={() => handleClick(emotion)}>
            <img src={emotion.image} alt={emotion.value} />
            <div className='text-container'>
              <p className='card-text' >{emotion.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Emotions;