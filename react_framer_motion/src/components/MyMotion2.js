import { motion } from "framer-motion";
import "./MyMotion1.css";

// 외부 상자
const boxVariants = {
  // 없다가 나타나는 효과
  start: { opacity: 0, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    // delayChildren: 0.3, staggerChildren: 0.2 => 자식들에게 주는 효과
    transition: { type: "spring", delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

// 내부 원
const circleVariants = {
  // 아래쪽에서 나오는 효과
  start: { y: 50, opacity: 0 },
  end: { y: 0, opacity: 1, transition: { type: "spring" } },
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
