/* eslint-disable react/prop-types */
import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn } from '../utils/motion'
import headset from "../assets/headset.svg"


const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
    <motion.div
    //   variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
            type: "spring",
            duration: 2.5,
            delay : index * 0.5

        }}
        viewport={{ once : false , amount : 0.25}}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-all duration-[0.7s] ease-out cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} lg:w-[60px] lg:h-[60px] rounded-[24px] w-[30px] h-[30px] glassmorphism mb-[16px]`}
          >
            <img
              src={headset}
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enter Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
  

export default ExploreCard

// const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
//     return (
//         <motion.div
//             variants={fadeIn("right", "spring", index * 0.5, 1.75)}
          
//             className={`relative h-[750px]  w-[150px] rounded-[25px] overflow-hidden ${active === id ? "w-[00px] transition-all ease-in duration-750" : " transition-all ease-in duration-750"}`}>
            
//             <img src={imgUrl} alt="image" className='object-cover w-[100%] h-[100%]' onClick={()=>handleClick(id)}  />
//     </motion.div>
//   )
// }