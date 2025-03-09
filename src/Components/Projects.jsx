import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StylingProject from './StylingProject'
import FunctionalProject from './FunctionalProject'


export default function Projects() {
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
            <div className="p-8" id='projects'>
                <h1 className='text-2xl md:text-5xl font-medium mb-8'>Projects</h1>
                <div className="h-1 w-32 bg-white mb-8 rounded-full"></div>

                <div className="">
                    <Tabs defaultValue="Land" className="flex justify-center text-center items-center flex-col">
                        <TabsList className="sm:w-96 h-20 mb-4">
                            <TabsTrigger value="Land" className="text-black">Landing Projects</TabsTrigger>
                            <TabsTrigger value="fun" className="text-black">Features Projects</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Land"> <StylingProject /> </TabsContent>
                        <TabsContent value="fun"> <FunctionalProject /> </TabsContent>
                    </Tabs>
                </div>

            </div>
        </>
    )
}
