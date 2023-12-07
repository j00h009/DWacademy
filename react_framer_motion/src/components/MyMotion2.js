import { motion } from "framer-motion";
import "./MyMotion1.css";

const boxVariants = {
  // 없다가 나타나는 효과
  start: { opacity: 0, scale: 0 },
  end: { opacity: 1, scale: 1, transition: { type: "spring", delay: 0.5 } },
};
const circleVariants = {
  // 아래쪽에서 나오는 효과
  start: { y: 50, opacity: 0 },
  end: { y: 0, opacity: 1, transition: { type: "spring", delay: 1 } },
};

export function MyMotion2() {
  return (
    <>
      <div className="container">
        <motion.div
          className="box2"
          variants={boxVariants}
          initial="start"
          animate="end"
        >
          <motion.div className="circle" variants={circleVariants}></motion.div>
          <motion.div className="circle" variants={circleVariants}></motion.div>
          <motion.div className="circle" variants={circleVariants}></motion.div>
          <motion.div className="circle" variants={circleVariants}></motion.div>
        </motion.div>
      </div>
    </>
  );
}
