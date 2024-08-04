import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import bamboo from './assets/images/backgrounds/bamboo.jpg';
import seamlessPattern from './assets/images/backgrounds/seamless-geometric-pattern.jpg';
import l986 from './assets/images/backgrounds/l986.jpg';
import freePattern from './assets/images/backgrounds/free_pattern_1.png'; 

const setRandomBackgroundImage = () => {
  const images = [bamboo, seamlessPattern, l986, freePattern];
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

