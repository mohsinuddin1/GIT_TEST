import React from 'react';
import mainimg from '../assets/mainImg.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className=' bg-custom-image
  bg-hero bg-no-repeat bg-cover  h-[700px] md:h-[750px] lg:h-[800px] bg-center py-24'>
    <div className='container mx-auto flex 
    h-full'>
      <div >
        <div>
          <div className=' mx-3 lg:text-8xl md:text-6xl text-red-400 :text-4xl font-extrabold'>New Trend</div>
        </div>
        <h1 className=' mx-3 sm:text-[70px] text-[50px] leading-[1.1] font-light mb-4'>
          WINTER SALE STYLISH <br />
          <span className=' font-semibold'>WOMENS</span>
        </h1>
      </div>
    </div>
    </section>;
};

export default Hero;
