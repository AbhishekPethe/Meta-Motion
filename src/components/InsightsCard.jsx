/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import React from 'react'
import styles from '../styles'
import arrow from "../assets/arrow.svg"
const InsightsCard = ({title , img , text}) => {
  return (
      <motion.div className={`flex flex-col md:flex-row gap-8`}>
          <img src={img} alt="image" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"  />
          <div className='flex flex-col gap-8 flex-1 text-white justify-center '>
              <h1 className='flex-start text-3xl md:text-5xl '>{title}</h1>
              <p className='flex-start'>{ text }</p>
          </div>
          <div className="lg:flex hidden self-center items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
              <img src={arrow} alt="" className='object-contain w-[40%] h-[40%]'/>
          </div>
    </motion.div>
  )
}

export default InsightsCard