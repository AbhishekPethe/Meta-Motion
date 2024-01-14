import React from 'react'
import styles from '../styles'
import { motion, stagger } from 'framer-motion'
import { footerVariants, staggerContainer } from '../utils/motion'
import { twitter , facebook , linkedin , instagram } from '../assets'

const Footer = () => {
  return (
    <section className={`${styles.paddings} relative`}>
      <div className="footer-gradient" />
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto flex flex-col gap-10`}  
      >
         
        <div className='flex flex-col gap-10 lg:flex-row lg:justify-between w-full text-white '>
          <h1 className='text-4xl  md:text-7xl font-semibold'>Enter The Metaverse</h1>
          <button className='p-5 bg-blue-600 rounded-2xl'>Contact US</button>
        </div>

        <hr />

        <div className='flex flex-col gap-7 lg:flex-row lg:justify-between text-white text-xl'>
          <h1>Metavarse</h1>
          <h1>Code@AB.dev | Figma Credit @JSM </h1>
          <div className='flex gap-4 cursor-pointer'>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />

          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default Footer 