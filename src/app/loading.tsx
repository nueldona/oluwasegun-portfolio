"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import LinesAnimation from "@/components/utilities/LinesAnimation";


const loading = () => {
  const barVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };
  const barTransition: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1,
      },
    },
  };

  const textTransition = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <LinesAnimation className="absolute -z-10 h-full w-full" />
      <div className="flex justify-center items-center h-screen">
        <div>
          <motion.div
            className="flex justify-between space-x-2"
            variants={barVariants}
            initial="hidden"
            animate="visible"
          >
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className="w-2 md:w-3 h-10 md:h-11 bg-blue-800 dark:bg-white"
                variants={barTransition}
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </motion.div>
          <motion.div
            className="text-center font-semibold text-blue-700 dark:text-white mt-4"
            variants={textTransition}
          >
            Loading...
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default loading;
