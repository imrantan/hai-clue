import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const setRandomBackgroundImage = () => {
  const images = [
    'src/assets/images/backgrounds/bamboo.jpg',
    'src/assets/images/backgrounds/seamless-geometric-pattern.jpg',
    'src/assets/images/backgrounds/l986.jpg',
    'src/assets/images/backgrounds/free_pattern_1.png'
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.setProperty('--background-image', `url(${randomImage})`);
};

const Main = () => {
  useEffect(() => {
    setRandomBackgroundImage();
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);

