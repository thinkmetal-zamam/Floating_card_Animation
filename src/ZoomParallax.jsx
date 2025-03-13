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
  const z = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const tanslateX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const tanslateMinX = useTransform(scrollYProgress, [0, 1], ["0vw", "100vw"]);

  let miniValue = 500;

  return (
    <div ref={container} className="container my-[50vh] h-[200vh]">
      <div className="container_sticky overflow-hidden flex sticky top-0  perspective-[1000px] bg-amber-400 h-[100vh]">
        <motion.div
          style={{ translateZ: z, translateX: tanslateX }}
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
          }}
          className="el w-full h-full absolute top-40 left-52"
        >
          <div className="img_container w-[25vw] h-[25vh] relative">
            <div className="w-[30vw] rounded-2xl h-[50vh] bg-red-500"></div>
          </div>
        </motion.div>

        {/* <motion.div
          style={{
            // scale: scale4,
            translateX: tanslateMinX,
          }}
          className="el w-full h-full absolute block top-40 left-[700px]"
        >
          <div className="img_container w-[25vw] h-[25vh] relative">
            <div className="w-[30vw] rounded-2xl h-[50vh] bg-blue-500"></div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default ZoomParallax;
