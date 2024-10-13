import React from 'react'
import { FaCss3, FaHtml5, FaNodeJs, FaPhp } from 'react-icons/fa'
import { RiJavascriptLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h1 className='my-20 text-4xl text-center'>Technologies</h1>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-7xl'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssLine className='text-7xl text-cyan-600'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPhp className='text-7xl text-violet-300'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMysql className='text-7xl'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
