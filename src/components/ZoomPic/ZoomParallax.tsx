import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

import Picture1 from "/public/img/elysius/1.png";
import Picture2 from "/public/img/elysius/2.png";
import Picture3 from "/public/img/elysius/3.png";
import Picture4 from "/public/img/elysius/4.png";
import Picture5 from "/public/img/elysius/5.png";
import Picture6 from "/public/img/elysius/6.png";
import Picture7 from "/public/img/elysius/7.png";

type PictureDef = {
  src: string;
  scale: MotionValue<number>;
  positionClass: string;
};

export default function ZoomParallax() {
  const container2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container2,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures: PictureDef[] = [
    {
      src: Picture1,
      scale: scale4,
      positionClass: "relative w-[25vw] h-[25vh]",
    },

    {
      src: Picture2,
      scale: scale5,
      positionClass: "relative top-[-30vh] left-[5vw] w-[35vw] h-[30vh]",
    },

    {
      src: Picture3,
      scale: scale6,
      positionClass: "relative top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]",
    },

    {
      src: Picture4,
      scale: scale5,
      positionClass: "relative left-[27.5vw] w-[25vw] h-[25vh]",
    },

    {
      src: Picture5,
      scale: scale6,
      positionClass: "relative top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]",
    },

    {
      src: Picture6,
      scale: scale8,
      positionClass: "relative top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]",
    },

    {
      src: Picture7,
      scale: scale9,
      positionClass: "relative top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]",
    },
  ];

  return (
    <section
      ref={container2}
      className=" h-[300vh] relative m-auto mb-[100px] w-[100vw]">
      <div className="sticky overflow-hidden top-0 h-[100vh]">
        {pictures.map(({ src, scale, positionClass }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="w-full h-full top-0 absolute flex items-center justify-center">
              <div className={positionClass}>
                <img
                  src={src}
                  alt={`image-${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
