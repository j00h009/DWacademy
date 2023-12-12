import "./MotionValue2.css";
import {
  motion,
  motionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";

export function MotionValue2() {
  const MotionValue = useMotionValue(0);
  const background = useTransform(
    motionValue,
    [-200, 200],
    [
      "linear-gradient(90deg, rgb(0,210,238), rgb(0,83,238)",
      "linear-gradient(90deg, rgb(0,238,155), rgb(238,178,0)",
    ]
  );
  return (
    <>
      <div className="container">
        <div className="bigbox">
          <motion.div className="box" drag="x" dragSnapToOrigin>
            <p className="text">Drag Me</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
