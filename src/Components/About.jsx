import React from 'react'
import { ABOUT_CONTENT } from '../constants'
import { motion } from 'framer-motion'


export default function About() {
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }

    return (
        <>
            <div className="p-8 flex flex-col" id='about'>

                <div className="">

                    <h1 className='text-2xl md:text-5xl font-medium mb-8'>About</h1>
                    <div className="h-1 w-32 bg-white mb-8 rounded-full"></div>

                </div>

                <div className="p-8">
                    {ABOUT_CONTENT.paragraphs.map((para, index) => {
                        return (
                            <>
                             <motion.h1 className='text-2xl leading-tight md:text-5xl' key={index} initial='hidden' whileInView={'visible'} variants={textVariant} viewport={{once : true}}>{para}</motion.h1>
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    )
}
