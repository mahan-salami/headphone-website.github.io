import React from 'react';
import { motion } from 'framer-motion';
import aparatLogo from '../assets/brand/br-1.png';
import foodImage1 from '../assets/brand/br-2.png';
import foodImage2 from '../assets/brand/br-3.png';
import foodImage3 from '../assets/brand/br-4.png';
import socialSecurityLogo from '../assets/brand/br-5.png';


const Partners = () => {
    const logos = [aparatLogo, foodImage1, foodImage2, foodImage3, socialSecurityLogo];
    
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const logoHover = {
        scale: 1.05,
        filter: 'grayscale(0%)',
        opacity: 1,
        transition: { duration: 0.3 }
    };

    return (
        <motion.div 
            className='w-full overflow-hidden container mx-auto py-20 gap-8 lg:px-8 flex sm:flex-row flex-col sm:items-center items-start relative'
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
        >
            {/* Text section */}
            <motion.div 
                className='w-[300px] shrink-0 px-6 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-20 sm:text-xl font-semibold text-left relative'
                variants={item}
            >
                Proud Partner <br /> Hubspot and segment
            </motion.div>
    
            {/* Logos container */}
            <div className='flex-1 overflow-hidden relative'>
                <motion.div 
                    className='flex animate-marquee whitespace-nowrap'
                    animate={{
                        x: ['0%', '-100%'],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    {logos.map((logo, index) => (
                        <motion.img 
                            key={index} 
                            src={logo} 
                            alt="partner logo" 
                            className='mx-6 h-20 w-36 object-contain grayscale opacity-70'
                            whileHover={logoHover}
                            variants={item}
                        />
                    ))}

                    {/* Duplicate logos for seamless looping */}
                    {logos.map((logo, index) => (
                        <motion.img 
                            key={`duplicate-${index}`} 
                            src={logo} 
                            alt="partner logo" 
                            className='mx-6 h-20 w-36 object-contain grayscale opacity-70'
                            whileHover={logoHover}
                            variants={item}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Partners;