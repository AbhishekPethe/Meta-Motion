/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import React from 'react'
import styles from '../styles'

const NewFeature = ({title , text , img}) => {
  return (
    <motion.div className={`flex flex-col gap-3 sm:max-w-[250px] min-w-[210px]`}
   
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
          }}>
      <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <img src={img} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
    </motion.div>
  )
}

export default NewFeature