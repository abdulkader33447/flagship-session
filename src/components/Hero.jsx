import React from 'react';
import bannerImg from '../assets/banner.png'

const Hero = () => {
  return (
    <div className='py-12'>
      <img className='w-full max-w-md' src={bannerImg} alt="banner image" />
    </div>
  );
};

export default Hero;
