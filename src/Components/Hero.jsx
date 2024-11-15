import React from 'react'
import { motion } from 'framer-motion'
import { HERO_CONTENT } from '../constants'

import Img from '../assets/helloj.png'
import { clipPath } from 'framer-motion/client'

export default function Hero() {
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }
    const ContainerVariant = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    }
    const ImgVariant = {
        hidden: { clipPath: 'inset(0 50% 0 50%)' },
        visible: {
            clipPath: 'inset(0 0% 0 0%)',
            transition: { duration: 1.2, ease: 'easeInOut' }
        }
    }
    return (
        <>
            <div className="flex justify-center mt-32 md:mt-20 items-center relative z-10 flex-wrap md:flex-row text-white" id='Home'>

                <motion.div variants={ContainerVariant} initial='hidden' animate='visible' className='w-full md:w-1/2 p-8'>
                    <motion.h1 variants={textVariant} className='text-2xl md:5xl'>{HERO_CONTENT.greeting}</motion.h1>
                    <motion.h1 variants={textVariant} className='text-2xl md:5xl'>{HERO_CONTENT.introduction}</motion.h1>
                    <motion.h1 variants={textVariant} className='text-2xl md:5xl'>{HERO_CONTENT.description}</motion.h1>
                    <motion.button className='p-3 rounded-full bg-white font-medium text-xl text-black mt-4 hover:bg-gray-100' variants={textVariant}>{HERO_CONTENT.resumeLinkText}</motion.button>
                </motion.div>

                <motion.div className='w-full md:w-1/2 p-8' initial='hidden' animate='visible' variants={ImgVariant}>
                    <img src={Img} className='rounded-3xl'></img>
                </motion.div>

            </div>
        </>
    )
}
