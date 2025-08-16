import React from 'react'
import { FaWallet } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

const servicecard = [
  {
    id: 1,
    icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
    title: 'Free Shipping',
    description: "Free shipping on all order"
  },
  {
    id: 2,
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
    title: 'Quality Guarantee',
    description: "30 days quality guarantee"
  },
  {
    id: 3,
    icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
    title: 'Safe Payment',
    description: "30 days money back"
  },
  {
    id: 4,
    icon: <FaHeadphones className='text-4xl md:text-5xl text-primary' />,
    title: '24/7 Support',
    description: "Customer support available"
  },
]

const Services = () => {
  return (
    <>
      <div className='justify-center items-center text-3xl mt-20'>
    <h1 className='flex justify-center items-center font-bold text-3xl sm:text-5xl'>our services</h1>
  </div>
   
    <div className='py-12 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {servicecard.map((service) => (
            <div 
              key={service.id} 
              className='bg-white p-6 rounded-lg shadow-sm   text-center hover:bg-blue-500 hover:text-amber-50 transition duration-400 hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:-translate-y-4'
            >
              <div className='flex justify-center mb-4'>
                {service.icon}
              </div>
              <h3 className='text-lg font-semibold mb-2 '>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
     </>
  )
}

export default Services