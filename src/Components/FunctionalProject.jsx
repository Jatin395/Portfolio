import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

function FunctionalProject() {

    const ProjectVariant = {
        hidden: { opacity: 0, y: 50, rotate: -40, scale: 0.8 },
        visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                type: 'spring',
                bounce: 0.4,
            }
        }
    }

  return (
    <>
    <div className="flex flex-wrap justify-center items-center text-center gap-8">

                {PROJECTS.map((project, index) => {
                if (project.tag === "function") {
                    return (
                        <div className="" key={index}>
                            <motion.div 
                                className='rounded-lg w-64 sm:w-96 h-[500px] overflow-hidden transition transform relative'
                                initial='hidden' 
                                variants={ProjectVariant} 
                                whileInView={'visible'} 
                                viewport={{ once: true }}
                            >
                                <img 
                                    src={project.image} 
                                    className='absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300' 
                                    alt={project.name}
                                />
                                <div className="relative z-20 p-6 flex justify-between flex-col h-full bg-black/30 text-white">
                                    <h1 className='text-2xl font-medium mb-4'>{project.name}</h1>
                                    <div className="flex flex-col justify-between">
                                        <p className='mb-4 flex-grow text-2xl'>{project.description}</p>
                                        <div className="flex gap-6">
                                            <a 
                                                href={project.link} 
                                                target='_blank' 
                                                rel='noopener noreferrer' 
                                                className='bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center'
                                            >
                                                View on Github
                                            </a>
                                            <a 
                                                href={project.Livelink} 
                                                target='_blank' 
                                                rel='noopener noreferrer' 
                                                className='bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center'
                                            >
                                                View on Live
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )
                }
                return null;
            })}
    </div>
    </>
  )
}

export default FunctionalProject
