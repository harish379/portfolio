"use client";

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiCss3, SiFigma, SiGit, SiHtml5, SiJavascript, SiMysql,SiTailwindcss } from 'react-icons/si'
import { FaJava } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";

const skills = [
    {
        text : 'Java',
        Icon: FaJava,
    },

    {
        text : 'MySQL',
        Icon: SiMysql,
    },

    {
        text : 'HTML',
        Icon: SiHtml5,
    },

    {
        text : 'CSS',
        Icon: SiCss3,
    },

    {
        text : 'JavaScript',
        Icon: SiJavascript,
    },

    {
        text : 'Tailwind CSS',
        Icon: SiTailwindcss,
    },

    {
        text : 'Bootstrap',
        Icon: FaBootstrap,
    },

    {
        text : 'Git',
        Icon: SiGit,
    },

    {
        text : 'Figma',
        Icon: SiFigma,
    },

    


    

    

]

const Skills = () => {
  return (
    <div className='max-w-5xl mx-auto px-8'>
         <Title text='Skills 🔪' className='flex flex-col items-center justify-center -rotate-6'/>

         <HoverEffect items={skills}/>
      
    </div>
  )
}

export default Skills
