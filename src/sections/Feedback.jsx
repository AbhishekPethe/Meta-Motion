/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { planet9 } from "../assets";
import stamp from "../assets/stamp.png";
const Feedback = () => {
  return (
    <section className={`${styles.paddings}  `}>
     
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col-reverse relative lg:flex-row gap-6 h-[500px]`}
      >
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{type : "tween" , duration : 1}}
          
          src={stamp} alt="stamp" className="w-[150px] h-[150px] absolute left-[17%] z-20 hidden lg:block" />
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{
            x: 0,
            opacity : 1
          }}
          transition={{
            type: "tween",
            duration : 1
          }}
          className="flex flex-col h-full w-full md:w-[100%] gap-10 border-[1px] border-zinc-50 rounded-2xl p-5 lg:pt-[150px] flex-1"
        >
          <div>
            <h2 className="text-white text-5xl font-semibold ">Samantha</h2>
            <h4 className="text-white text-xl">Founder | Metavarsus</h4>
          </div>
          <h2  className="text-white text-lg">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</h2>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: "100%" }}
         whileInView={{
           x: 0,
           opacity : 1
         }}
         transition={{
           type: "spring",
           duration : 2
          }}
        className="rounded-[10px] overflow-hidden h-full w-full flex-3">
          <img src={planet9} alt="photo" className="object-cover h-full w-full " />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
