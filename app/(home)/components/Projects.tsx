import React from 'react'
import { SiCss3, SiHtml5,SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import Link from 'next/link'
import { FaJava } from "react-icons/fa6";

export default function Projects() {

    const projects = [

        {
            tite: 'Online Book Store (BookLab)',
            tech : [FaJava,SiHtml5,SiCss3,SiTailwindcss],
            link: "https://github.com/harish379/booklab",
            cover: "/project1.png",
            background : "bg-indigo-500",

        }


    ]


    return (
        <div className='py-10 p-5 sm:p-0'>
             <Title text='Projects 🎨' className='flex flex-col items-center justify-center rotate-6'
             />


             <div className='grid grid-col-1 place-items-center pt-20 gap-5'>

                {projects.map((project,index) => {

                    return<Link href={project.link} key={index}>

                        <div className={cn("lg:p-5 p-3 rounded-md",project.background)}>


                        <DirectionAwareHover imageUrl={project.cover}
                        className='w-min-[30vh] space-y-5 cursor-pointer'>

                        <div className='space-y-5'>

                            <h1 className='lg:text-2xl font-bold text-xl'>{project.tite}</h1>

                            <div className='flex items-center gap-5'>
                                {project.tech.map((Icon,index) => {

                                    return <Icon className='lg:w-8 lg:h-8 w-6 h-6' key={index} />
                                })}
                            </div>
                        </div>

                        </DirectionAwareHover>






                        </div>
                    </Link>


                })}

             </div>






        </div>

        
    )
}