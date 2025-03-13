import React, { useEffect, useRef } from "react";
import "./index.css";
import { useScroll, useTransform, motion } from "framer-motion";

const ZoomParallax = () => {
  const container = useRef(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  console.log(scrollY);

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const z = useTransform(scrollYProgress, [0, 1], [-1000, 2000]);
  const tanslateX = useTransform(scrollYProgress, [0, 0.3], [0, -500]);
  const tanslateMinX = useTransform(scrollYProgress, [0, 1], ["0vw", "100vw"]);
  const z1 = useTransform(scrollYProgress, [0, 1], [-1000, 3000]);
  const greenTranslateX = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const blueTranslateX = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  let miniValue = 500;

  return (
    <div ref={container} className="container my-[50vh] h-[200vh]">
      <div
        className="container_sticky overflow-hidden flex sticky top-0  perspective-[71vw] bg-amber-400 h-[100vh] w-screen 
      "
      >
        <motion.div
          style={{ translateZ: z, translateX: tanslateX, perspective: "73vw" }}
          className="el w-full h-full absolute top-40 left-60"
        >
          <div className="img_container w-[25vw] h-[25vh] relative">
            <div className="w-[30vw] rounded-2xl h-[50vh] bg-pink-500"></div>
          </div>
        </motion.div>

        <motion.div
          style={{
            scale: scale4,
            translateX: tanslateX,
            translateZ: z1,
          }}
          className="el w-full h-full absolute top-40 left-52"
        >
          <div className="img_container w-[25vw] h-[25vh] relative">
            <div className="w-[30vw] rounded-2xl h-[50vh] bg-red-500"></div>
          </div>
        </motion.div>

        <motion.div
          style={{
            scale: scale3,
            translateX: blueTranslateX,
          }}
          className="el w-full h-full absolute block top-40 left-[700px]"
        >
          <div className="img_container w-[25vw] h-[25vh] relative">
            <div className="w-[30vw] rounded-2xl h-[40vh] bg-blue-500 absolute top-6 left-10"></div>
          </div>
        </motion.div>
        <motion.div
          style={{
            scale: scale3,
            translateX: greenTranslateX,
          }}
          className="el w-full h-full absolute block top-40 left-[700px]"
        >
          <div className="img_container w-[25vw] h-[25vh] relative">
            <div className="w-[30vw] rounded-2xl h-[40vh] bg-green-300"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ZoomParallax;
