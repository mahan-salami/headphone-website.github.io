import React from 'react';
import Slider from "react-slick";
import Image1 from '../assets/hero/headphone.png';
import Image2 from '../assets/category/gaming.png';
import Image3 from '../assets/category/macbook.png';

const HeroData = [
  { id: 1, img: Image1, subtitle: "Beats Solo", title2: "Wireless", description: "HEADPHONE" },
  { id: 2, img: Image2, subtitle: "Bests Solo", title2: "Immersive", description: "VR HEADSET" },
  { id: 3, img: Image3, subtitle: "Bests Solo", title2: "Powerful", description: "MACBOOK" },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 '>
      <div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-100 to-gray-50 mt-10 p-4 sm:p-6 lg:p-8 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>

        <Slider {...settings}>
          {HeroData.map(({ id, img, subtitle, title2, description }) => (
            <div key={id} className='relative flex flex-col sm:flex-col lg:flex-row items-center justify-center min-h-[450px] sm:min-h-[550px] lg:min-h-[470px]'>

              {/* تصویر */}
              <div className='w-full flex justify-center items-center mb-6 sm:mb-6 lg:mb-0 lg:absolute lg:inset-0'>
                <img
                  src={img}
                  alt={`${title2} - ${description}`}
                  className='z-40 w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[500px] h-auto object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)]'
                />
              </div>

              {/* متن */}
              <div className='relative z-10 flex flex-col gap-4 text-center lg:text-left px-4 sm:px-6 lg:px-20 mt-10'>
                <p className='text-lg sm:text-xl font-medium text-gray-400'>{subtitle}</p>
                <h1 className='text-4xl sm:text-6xl font-bold text-black'>{title2}</h1>
                <h1 className='text-5xl uppercase text-gray-500 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold tracking-widest'>
                  {description}
                </h1>
                <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full w-fit mx-auto sm:mx-0 transition-all'>
                  Shop By Category
                </button>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
