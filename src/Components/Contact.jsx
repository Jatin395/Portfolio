import React from 'react'
import { delay, motion } from 'framer-motion'
import { CONTACT_CONTENT } from '../constants'

export default function Contact() {
     
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }
    const ContainerVariant = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    }
    return (
        <>
            <div className="flex justify-center flex-col flex-wrap p-8" id='contact'>

                <h1 className='text-2xl md:text-5xl font-medium mb-8'>Contact</h1>
                <div className="h-1 w-32 bg-white mb-8 rounded-full"></div>

                <motion.div initial='hidden' whileInView={'visible'} className='' variants={ContainerVariant} viewport={{once : true}}>

                    <motion.h1 className='text-2xl md:text-8xl leading-none mb-4' variants={textVariant} >{CONTACT_CONTENT.headline}</motion.h1>
                    <motion.p className='text-xl md:text-3xl' variants={textVariant} >{CONTACT_CONTENT.description}</motion.p>
                    <motion.h1 className='mt-4 md:text-3xl text-lg' variants={textVariant}>{CONTACT_CONTENT.email}</motion.h1>

                    <motion.div className='mt-4 text-5xl md:text-8xl' variants={textVariant}>
                    <a target='_blank' href='https://www.linkedin.com/in/jatin-sharma-262a67288/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' rel='noopener'><i class="ri-linkedin-line"></i></a>
                    <a href='https://github.com/Jatin395' target='_blank' rel='noopener norefferer'><i class="ri-github-fill"></i> </a>
                    <a href='https://www.instagram.com/jatin_sharma_888/' target='_blank' rel='noopener norefferer'><i class="ri-instagram-line"></i></a>                    
                    <a href=''><i class="ri-facebook-fill"></i> </a> 
                    <h1 className='text-2xl mt-8 text-center mb-4'>{CONTACT_CONTENT.footerText}</h1>

                    </motion.div>

                </motion.div>

            </div>
        </>
    )
}
