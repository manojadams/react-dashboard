import { motion } from "framer-motion"; 

function DashAnim() {
    return (
        <motion.svg width="120" height="120" animate={{
            rotate: [0, 0, 270, 270, 0]
        }}>
            <motion.rect
                width="120"
                height="120"
                x="0"
                y="0"
                rx="20"
                stroke="#fff"
                fill="#fff"
                variants={draw}
                custom={3}
            />
        </motion.svg>
    )
}

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

export default DashAnim;
