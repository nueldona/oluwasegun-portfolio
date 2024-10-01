import React from "react";
import { motion, Variants } from "framer-motion";

const dropAnimation: Variants = {
  initial: { top: "-50%" },
  animate: { top: "110%" }, // Define the animate states without transitions here
};
const LinesAnimation = ({ className }: { className: string }) => {
  const transitionSettings = {
    duration: 7,
    repeat: Infinity,
    ease: [0.4, 0.26, 0, 0.97],
  };

  const positions = [
    { left: "10%", delay: 0 },
    { left: "25%", delay: 1 },
    { left: "40%", delay: 2 },
    { left: "60%", delay: 1.5 },
    { left: "75%", delay: 2.5 },
    { left: "90%", delay: 3 },
  ];
  return (
    <div className={className}>
      <div className="relative w-[90vw] h-full mx-auto">
        {positions.map((pos, index) => (
          <div
            key={index}
            className="absolute w-[2px] h-full bg-white/10"
            style={{ left: pos.left }}
          >
            <motion.div
              className="absolute w-full h-[15vh] bg-gradient-to-b from-transparent to-orange-600 dark:to-zinc-200"
              initial="initial"
              animate="animate"
              variants={dropAnimation}
              transition={{ ...transitionSettings, delay: pos.delay }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinesAnimation;
