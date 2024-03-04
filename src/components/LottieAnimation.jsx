import React from "react";
import "../styles/Hero.css";
import Lottie from 'react-lottie';
import animationData from '../assets/web-design-layout.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieAnimation;
