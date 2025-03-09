import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/constants';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function Experience() {
    // Animation variant for fade-in and move-up effect
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8, 
                ease: "easeOut" 
            } 
        },
    };

    return (
        <>
            <div className="p-8" id='experience'>
                <motion.h1
                    className="text-2xl md:text-5xl font-medium mb-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={textVariant}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h1>

                <div className="h-1 w-32 bg-white mb-8 rounded-full"></div>

                {/* Timeline Container */}
                <div className="relative flex justify-center items-center text-center gap-8 flex-wrap w-full">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700 w-full"> 
                        {EXPERIENCES.map((experience, index) => {
                            return (
                                <motion.li
                                    key={index}                                    
                                    className="mb-10 ml-6 w-full"
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={textVariant}
                                    viewport={{ once: true }}
                                >
                                    {/* Timeline dot */}
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                        </svg>
                                    </span>

                                    <Card className="max-w-4xl mx-auto"> 
                                        <CardHeader>
                                            <div className="flex items-center flex-col sm:flex-row space-x-4">                                                
                                                <img
                                                    src={experience.img}
                                                    alt={experience.Name}
                                                    className="h-40 w-40 object-cover rounded-full"
                                                />
                                                
                                                {/* Text on the right */}
                                                <div className="flex flex-col gap-4 font-semibold">
                                                    <CardTitle>{experience.title}</CardTitle>
                                                    <CardDescription>{experience.location} | {experience.yearRange}</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent>
                                            {experience.description.map((line, i) => (
                                                <p key={i} className="text-base font-normal text-gray-500 dark:text-gray-400">
                                                    {line}
                                                </p>
                                            ))}
                                        </CardContent>
                                    </Card>
                                </motion.li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Experience;