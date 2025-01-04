import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link'
import React from 'react'
import Title from './Title';

export default function Hero() {

    return (
    
    <div className='min-h-[60vh] flex flex-col-reverse items-center justify-between lg:flex-row gap-14 lg:gap-0 animate-move-up'>


     <div className='space-y-10 text-center lg:text-left'>

            <h1 className='text-4xl lg:text-7xl font-bold'>Nice to meet you! 👋<br/><span className='underline underline-offset-8 decoration-green-500'> I&apos;m Harish.</span></h1>

        <p className='md:w-96 text-lg text-gray-300'>Based in India, I&apos;m a Java Developer dedicated to building innovative web solutions. I&apos;m passionate about learning new technologies and frameworks, and I&apos;m always looking for new opportunities to grow and improve my skills.</p>


        <Link className='inline-block group' href={'mailto:harishs1917@gmail.com'}
        >
            <Title text='Contact Me 📫'/>
           
        </Link>

     </div>

     <div className='relative'> 
        <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>

            <div className='flex gap-3 translate-x-8'>
                <div className='w-32 h-32 rounded-2xl bg-green-500'>
                </div>

                <div className='w-32 h-32 rounded-full bg-indigo-500'>
                </div>

            </div>


            <div className='flex gap-3 -translate-x-8'>

            <div className='w-32 h-32 rounded-2xl bg-indigo-500'>
            </div>

                <div className='w-32 h-32 rounded-full bg-green-500'>
                </div>  
            </div>


            <div className='glow absolute top-[40%] right-1/2 -z-10'>

            </div>
        </div>

        
        <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>

        <div className='gap-3 flex flex-row items-center justify-center'>
            
        
        <Link className='inline-block group' href='/Harish-S-Resume.pdf' download target='_blank'>
        <p>💼 Available for Work</p>
        </Link>


        <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>

        </div>

        </MovingBorderBtn>



     </div>






    </div>
    );

}