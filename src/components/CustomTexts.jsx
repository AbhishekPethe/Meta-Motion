/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../utils/motion";


export const TypingText = ({title , textStyles}) => (
    <motion.p
        variants={textContainer}
        className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    > 
        {Array.from(title).map((letter , i) => (
            <motion.span
                variants={textVariant2}
                key={i}>
                {letter === ' ' ? '\u00a0' : letter }
            </motion.span>
        ))}
    </motion.p>
)

export const TitleText = ({title , textStyles}) => {
    return (
        <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className={`${textStyles} mt-[8px] font-bold md:text-[64px] text-[40px] text-white `}
        >
            {title}
        </motion.h2>
    )
}


// export const TypingText = ({ title, textStyles }) => {
//     return (
//         <div className="flex flex-row">
//             {
//                 Array.from(title).map((letter , i) => {
//                     return (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{
//                           type: "spring",
//                           duration: 3,
//                           delay: i * 0.1,
//                         }}
//                         viewport={{ once: false, amount: 0.7 }}
//                       >
//                         <span>{letter}</span>
//                       </motion.div>
//                     );
//                 })
//             }
//         </div>
//     )

// }