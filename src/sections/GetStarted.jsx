import React from "react";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import styles from "../styles";
import image from "../assets/get-started.webp"
import { TitleText, TypingText } from "../components/CustomTexts";
import { startTransition } from "react";
import { startingFeatures } from "../constants";
import StartSteps from "../components/StartSteps";


const GetStarted = () => {
  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={` ${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          initial={{
            x: "-100%",
            opacity: 0,
            rotate: -180,
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
            alt="get-started"
            className="w-[95%] h-[95%] object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
          }}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus Works" />
          <TitleText
            title={
              <>
                Get started with <br />
                just a few clicks
              </>
            }
          />

          <div className="mt-[30px] flex flex-col gap-4 max-w-[370px]" >
            {
              startingFeatures.map((each, i) => {
                console.log(each);
                return (
                  <StartSteps key={i} text={each} index={i} />
                )
              })
            }
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
};


// const GetStarted = () => (
//   <section className={`${styles.paddings} relative z-10`}>
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
//     >
//       <motion.div
//          initial = {{
//                     x: "-100%",
//                     opacity: 0,
//                     rotate: -180,
//                   }}
//                     whileInView={{
//                       opacity: 1,
//                       x: 0,
//                       rotate: 0,
//                     }}
//                     transition={{
//                       type: "spring",
//                       duration: 2,
//                     }}
//                     viewport={{ once : true}}
//         className={`flex-1 ${styles.flexCenter}`}
//       >
//         <img
//           src={image}
//           alt="get-started"
//           className="w-[90%] h-[90%] object-contain"
//         />
//       </motion.div>
//       <motion.div
//         initial={{
//           x: 200,
//           opacity : 1
//         }}
//         whileInView={{
//           x: 0,
//           opacity : 1
//         }}
//         className="flex-[0.75] flex justify-center flex-col"
//       >
//         <TypingText title="| How Metaversus Works" />
//         <TitleText title={<>Get started with just a few clicks</>} />
//         {/* <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
//           {startingFeatures.map((feature, index) => (
//             <StartSteps
//               key={feature}
//               number={`${index < 10 ? '0' : ''} ${index + 1}`}
//               text={feature}
//             />
//           ))}
//         </div> */}
//       </motion.div>
//     </motion.div>
//   </section>
// );

export default GetStarted;
