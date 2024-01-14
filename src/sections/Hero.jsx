import React from "react";
import { delay, motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import styles from "../styles";
import image from "../assets/cover.webp";
import stamp from "../assets/stamp.png";


const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount : 0.25 }}  //false means it will animate again if we scroll down and then scroll up , true means vise-versa
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex flex-col justify-center items-center relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className={`${styles.heroHeading}`}
          >
            METAVERSE
          </motion.h1>
          <motion.div
            className={`${styles.heroHeading} flex flex-row justify-center items-center`}
            variants={textVariant(1.3)}
          >
            <h1>MA</h1>
            <div className={`${styles.heroDText}`} />
            <h1>NESS</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          {/* <img src={image} alt="cover" className="absolute -mt-[6px] z-10 w-full h-auto object-contain" /> */}

          <img
            src={image}
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <img src={stamp} alt="stamp" className="w-[150px] h-[150px] absolute top-[80%] left-[85%]  z-20" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

{
  /* <motion.h1 
className={styles.heroHeading}
initial={{ y: 100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{
  type: "spring",
  delay: 2,
  duration : 3 
}}
>
METAVERSE

</motion.h1>
<motion.h1 
className={styles.heroHeading}
initial={{ y: 100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{
  type: "spring",
  delay: 2.1,
  duration : 3 
}}
>
MADNESS

</motion.h1> 


<a href="#explore">
  <img src={stamp} alt="stamp" className="w-[150px] h-[150px] absolute top-[80%] left-[85%] z-20" />
</a>

*/
}
