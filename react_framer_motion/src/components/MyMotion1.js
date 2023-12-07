import { animate, motion } from "framer-motion";
import "./MyMotion1.css";

const boxVariants = {
  phase1: {
    scale: 0,
    rotateZ: 0,
    transition: { type: "linear", delay: 1, duration: 1 },
  },
  phase2: {
    scale: 1,
    rotateZ: 360,
    transition: { type: "spring", delay: 1, duration: 1 },
  },
};

export function MyMotion1() {
  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          variants={boxVariants}
          initial="phase1"
          animate="phase2"

          // 직접 스타일 객체에 애니메이션을 넣는 방법
          // motion의 기본속성 3개

          // 오리지널(initial은 필수는 아님, 형태가 처음과 끝이 달라지는 경우)
          // initial={{ scale: 0 }}
          // 변화된 속성
          // animate={{ scale: 1, rotateZ: 360 }}
          // transition={{ type: "spring", delay: 1, duration: 1 }}
        ></motion.div>
      </div>
    </>
  );
}
