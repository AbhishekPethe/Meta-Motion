/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React from "react";
import styles from "../styles";

const StartSteps = ({ index, text }) => {
  return (
    <motion.div
      className={`flex flex-row gap-4 `}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 2,
      }}
    >
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
      >
        <p className="font-bold text-[20px] text-white">0{index + 1}</p>
      </div>
      <p className="flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
        {text}
      </p>
    </motion.div>
  );
};

export default StartSteps;
