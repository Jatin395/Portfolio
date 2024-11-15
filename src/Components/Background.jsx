import React from 'react'
import { motion } from 'framer-motion'

export default function Background() {
    const circleanimate = {
        animate1: {
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],

            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        animate2: {
            scale: [1, 1.1, 1],
            x: [0, 120, 1],
            y: [0, -60, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        animate3: {
            scale: [1, 1.3, 1],
            x: [0, 140, 0],
            y: [0, 70, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        animate4: {
            scale: [1, 1.4, 1],
            x: [0, 160, 0],
            y: [0, -80, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        animate5: {
            scale: [1, 1.5, 1],
            x: [0, 140, 0],
            y: [0, 90, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        animate6: {
            scale: [1, 1.6, 1],
            x: [0, 200, 0],
            y: [0, -100, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
    }
    return (
        <>
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none flex justify-center items-center filter blur-[100px] -z-10 overflow-hidden">
            <motion.div className='w-[350px] h-[250px] bg-yellow-500 rounded-full' variants={circleanimate} animate='animate1'></motion.div>
            <motion.div className='w-[350px] h-[250px] bg-orange-500 rounded-full' variants={circleanimate} animate='animate2'></motion.div>
            {/* <motion.div className='w-[350px] h-[250px] bg-green-500 rounded-full' variants={circleanimate} animate='animate3'></motion.div> */}
            <motion.div className='w-[350px] h-[250px] bg-purple-500 rounded-full' variants={circleanimate} animate='animate4'></motion.div>
            {/* <motion.div className='w-[350px] h-[250px] bg-blue-500 rounded-full' variants={circleanimate} animate='animate5'></motion.div> */}
            <motion.div className='w-[350px] h-[250px] bg-pink-500 rounded-full' variants={circleanimate} animate='animate6'></motion.div>
        </div>
        </>
    )
}
