import React from 'react'
import about from '../assets/about.jpg'
import { ABOUT_TEXT, ABOUT_TEXT2 } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
      <div className='flex flex-wrap'>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.7}}
         className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center items-center'>
            <img className='rounded-2xl' src={about} alt="about_img" />
          </div>
        </motion.div>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <motion.p
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:100}}
             transition={{duration:0.7}}
            className='py-6 my-6 max-w-xl'>{ABOUT_TEXT} <br /> <br /> {ABOUT_TEXT2}</motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
