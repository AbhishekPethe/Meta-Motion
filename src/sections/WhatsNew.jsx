import React from 'react'
import styles from '../styles'
import { motion } from 'framer-motion'
import { TitleText, TypingText } from '../components/CustomTexts'
import image from "../assets/whats-new.webp"
import { staggerContainer } from '../utils/motion'
import { newFeatures } from '../constants'
import NewFeature from '../components/newFeature'


const WhatsNew = () => {
  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={` ${styles.innerWidth} mx-auto flex flex-col lg:flex-row  gap-8`}
        viewport={{ once: false, amount: 0.25 }}
      >
       

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| What's New" />
          <TitleText
            title={
              <>
               Whats new about <br />
                Metaverse
              </>
            }
          />
          <div className="mt-[30px] flex flex-col md:flex-row  gap-4 max-w-[370px]">
            {
              newFeatures.map((each , i) => {
                return (
                  <NewFeature key={i} title={each.title} text={each.subtitle} img={each.imgUrl} />
                )
              })
            }
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: "100%",
            opacity: 0,
            rotate: 180,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          transition={{
            type: "spring",
            duration: 2,
          }}
          viewport={{ once: true }}
          className={` flex-1 ${styles.flexCenter} `}
        >
          <img
            src={image}
            alt="What's New"
            className="w-[95%] h-[95%] object-contain"
          />
        </motion.div>
      </motion.div>
   </section>
  )
}

export default WhatsNew 