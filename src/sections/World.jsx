import { motion } from 'framer-motion'
import React from 'react'
import styles from '../styles'
import { TitleText, TypingText } from '../components/CustomTexts'
import world from "../assets/map.png"
import { staggerContainer } from '../utils/motion'
import { people1 , people2 , people3 } from '../assets'

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      
      <motion.div className={`${styles.innerWidth} mx-auto flex flex-col gap-4`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
       
      >
        <motion.div >
          <TypingText title="| People on the World" textStyles="text-center" />
          <TitleText title="Track friends around you and invite them to play together in the same world" textStyles="text-center" />
        </motion.div>
        <div className='relative mt-10'>
          <img src={world} alt="world" />
          <img src={people1} alt="" className="absolute h-14 w-14 top-[10%] left-[15%]"/>
          <img src={people2} alt="" className="absolute h-14 w-14 top-[30%] left-[63%]"/>
          <img src={people3} alt="" className="absolute h-14 w-14 top-[75%] right-[10%]"/>

        </div>
      </motion.div>

   </section>
  )
}

export default World 