import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
   <nav className='mb-20 flex items-center justify-between py-1 '>
    <div className='flex flex-shrink-0 items-center '>
        <img className='mx-2 w-32 hover:cursor-pointer' src={logo} alt="logo" /> 
    </div>
    <div className='flex justify-center gap-4 text-2xl m-8 items-centercle'>
       <a href="https://www.linkedin.com/in/vishu23/"><FaLinkedin className='hover:cursor-pointer' /></a>
        <a href="https://github.com/iamvishukr"><FaGithub className='hover:cursor-pointer'/></a>
        <a href="https://x.com/iamvishukr"><FaSquareXTwitter className='hover:cursor-pointer'/></a>
        <a href="https://www.instagram.com/iamvishukr/"><FaInstagram className='hover:cursor-pointer'/></a>
    </div>
   </nav>
  )
}

export default Navbar