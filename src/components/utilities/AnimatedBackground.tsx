import { motion } from "framer-motion";

const circleVariants = {
  animate: {
    y: ["0px", "-1000px"],
    rotate: [0, 720],
    borderRadius: ["0%", "50%"],
    opacity: [1, 0],
    transition: {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

interface CircleProps {
  delay?: number;
  size?: number;
  duration?: number;
  leftPosition?: number;
}

const Circle: React.FC<CircleProps> = ({
  delay,
  size,
  duration,
  leftPosition,
}) => {
  return (
    <motion.li
      className={`absolute bg-blue-200 opacity-20`}
      style={{
        left: `${leftPosition}%`,
        width: `${size}px`,
        height: `${size}px`,
        bottom: "-150px",
        listStyle: "none",
        borderRadius: "50%",
      }}
      initial={{ y: 0 }}
      variants={circleVariants}
      animate="animate"
      transition={{
        delay: delay,
        duration: duration,
      }}
    ></motion.li>
  );
};

const AnimatedBackground = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="relative h-full w-full from-white to-gray-200/20 dark:from-gray-900 dark:to-gray-900 overflow-hidden">
        <ul className="absolute inset-0">
          <Circle size={80} delay={0} duration={25} leftPosition={25} />
          <Circle size={20} delay={2} duration={12} leftPosition={10} />
          <Circle size={20} delay={4} duration={25} leftPosition={70} />
          <Circle size={60} delay={0} duration={18} leftPosition={40} />
          <Circle size={20} delay={0} duration={25} leftPosition={65} />
          <Circle size={110} delay={3} duration={25} leftPosition={75} />
          <Circle size={150} delay={7} duration={25} leftPosition={35} />
          <Circle size={25} delay={15} duration={45} leftPosition={50} />
          <Circle size={15} delay={2} duration={35} leftPosition={20} />
          <Circle size={150} delay={0} duration={11} leftPosition={85} />
        </ul>
      </div>
    </div>
  );
};

export default AnimatedBackground;
