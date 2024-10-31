import { motion } from 'framer-motion'
import React from 'react'
import {FaNodeJs, FaPhp } from 'react-icons/fa'
import {RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si'

const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
     duration:duration,
     ease:"linear",
     repeat:Infinity,
     repeatType:'reverse'
    }
  }
})
const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h1
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
       className='my-20 text-4xl text-center'>Technologies</motion.h1>
      <motion.div
       whileInView={{ opacity:1, x:0}}
       initial={{x:-100, opacity:0}}
       transition={{duration:1.5}}
       className='flex flex-wrap justify-center items-center gap-4'>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-7xl'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-500'/>
        </motion.div>
        <motion.div  
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssLine className='text-7xl text-cyan-600'/>
        </motion.div>
        <motion.div  
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPhp className='text-7xl text-violet-300'/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMysql className='text-7xl'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
