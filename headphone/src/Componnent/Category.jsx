import React from 'react';
import image1 from '../assets/category/earphone.png';
import image2 from '../assets/category/watch.png';
import image3 from '../assets/category/macbook.png';

const Category = () => {
  return (
  <>
  <div className='justify-center items-center text-3xl mt-20'>
    <h1 className='flex justify-center items-center font-bold text-3xl sm:text-5xl'>category</h1>
  </div>
    <div className='py-8 px-4 sm:px-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
          {/* First Column */}
          <div className='hover:-translate-y-5 transition duration-400 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-6 pl-5 bg-gradient-to-r from-gray-900 to-gray-600 text-white rounded-3xl relative h-[280px] sm:h-[320px] flex items-end overflow-hidden'>
            <div>
              <div className='mb-4'>
                <h1 className='text-2xl sm:text-3xl font-bold'>Enjoy</h1>
                <h1 className='text-2xl sm:text-3xl'>with</h1>
                <h1 className='text-2xl sm:text-3xl md:text-4xl uppercase text-gray-500 font-bold tracking-wider'>earphone</h1>
                <button className='cursor-pointer bg-red-500 hover:bg-red-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl mt-2 transition-all'>
                  browse now
                </button>
              </div>
            </div>
            <img 
              src={image1} 
              alt='Earphone' 
              className='py-10 flex justify-center items-center w-[200px] sm:w-[250px] md:w-[270px] absolute bottom-0 right-0 transform translate-x-4 sm:translate-x-0'
            />
          </div>
          
          {/* Second Column */}
          <div className='hover:-translate-y-5 transition duration-400 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] py-10 pl-5 bg-gradient-to-r from-yellow-300 to-gray-600 text-white rounded-3xl relative h-[280px] sm:h-[320px] flex items-end overflow-hidden'>
            <div>
              <div className='mb-4'>
                <h1 className='text-2xl sm:text-3xl font-bold'>Enjoy</h1>
                <h1 className='text-2xl sm:text-3xl'>with</h1>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-gray-200 font-bold tracking-wider'>watch</h1>
                <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl mt-2 transition-all'>
                  browse now
                </button>
              </div>
            </div>
            <img 
              src={image2} 
              alt='Watch'
              className='py-20 flex justify-center items-center w-[200px] sm:w-[250px] md:w-[250px] absolute bottom-6 right-0 transform translate-x-4 sm:translate-x-0'
            />
          </div>
          
          {/* Third Column - spans 2 columns on lg screens */}
          <div className='hover:-translate-y-5 transition duration-400 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] col-span-1 sm:col-span-2 lg:col-span-2 py-6 pl-5 bg-gradient-to-r from-red-700 to-gray-600 text-white rounded-3xl relative h-[280px] sm:h-[320px] flex items-end overflow-hidden'>
            <div>
              <div className='mb-15'>
                <h1 className='text-2xl sm:text-3xl font-bold'>Enjoy</h1>
                <h1 className='text-2xl sm:text-3xl'>with</h1>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-gray-200 font-bold tracking-wider'>laptop</h1>
                <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl mt-2 transition-all'>
                  browse now
                </button>
              </div>
            </div>
            <img 
              src={image3} 
              alt='Laptop'
              className='py-8 flex justify-center items-center w-[250px] sm:w-[210px] md:w-[300px] absolute bottom-2 right-0 transform translate-x-4 sm:translate-x-0'
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Category;