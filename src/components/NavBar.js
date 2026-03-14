import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group text-dark`}>
            {title}
            <span className={`
                h-[1px] inline-block bg-dark 
                absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4' />
            <CustomLink href="/about" title="About" className='mx-4' />
            <CustomLink href="/projects" title="Projects" className='mx-4' />
            <CustomLink href="/articles" title="Articles" className='ml-4' />
        </nav>
        
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>

        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://twitter.com" target={"_blank"} 
            whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3">
                <TwitterIcon />
            </motion.a>
            <motion.a href="https://github.com" target={"_blank"}
            whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3">
                <GithubIcon />
            </motion.a>
            <motion.a href="https://linkedin.com" target={"_blank"}
            whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3 text-[#0077b5]">
                <LinkedInIcon />
            </motion.a>
            <motion.a href="https://pinterest.com" target={"_blank"}
            whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3 text-[#E60023]">
                <PinterestIcon />
            </motion.a>
            <motion.a href="https://dribbble.com" target={"_blank"}
            whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3 text-[#ea4c89]">
                <DribbbleIcon />
            </motion.a>

            <button className='ml-3 p-1 rounded-full flex items-center justify-center bg-dark text-light'>
                <MoonIcon className={"fill-dark"} />
            </button>
        </nav>
    </header>
  )
}

export default NavBar
