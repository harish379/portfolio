
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";

const socials = [
    {
        link: 'https://github.com/harish379',
        label: "GitHub",
        Icon: SiGithub,
    },
    {
        link: 'https://leetcode.com/u/harish379/',
        label: "Leetcode",
        Icon: SiLeetcode,
    },
    {
        link: 'https://www.linkedin.com/in/harish379',
        label: "LinkedIn",
        Icon: SiLinkedin,
    },
]


const Navbar = ({className}:{className?:string}) => {
  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down',className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Harish 🧑🏻‍💻</h1>



        <div className='flex items-center gap-5'>
            {socials.map((social,index) => {

                const Icon = social.Icon
                return( 
                
                <Link 
                href={social.link} 
                key={index} 
                aria-label={social.label}
                target='_blank'
                >

                < Icon className='w-5 h-5 hover:scale-125 transition-all' />

                </Link>
                )
            }
            )}
        </div>

    </nav>
  )
}

export default Navbar