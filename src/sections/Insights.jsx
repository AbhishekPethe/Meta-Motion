import React from 'react'
import styles from '../styles'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import { TitleText, TypingText } from '../components/CustomTexts'
import { insights } from '../constants'
import InsightsCard from '../components/InsightsCard'

const Insights = () => {
  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
       
          <TypingText title="| Insights" textStyles="text-center" />
          <TitleText title="Insight about metaverse" textStyles="text-center" />
        
        
        <motion.div className='flex flex-col gap-10 mt-[70px]'>
          {
            insights.map((each, i) => {
              return (
                
                <InsightsCard title={each.title} text={each.subtitle} img={each.imgUrl} key={i} />
              )
            })
          }
        </motion.div>
      </motion.div>      

    </section>
  )
}
 
export default Insights