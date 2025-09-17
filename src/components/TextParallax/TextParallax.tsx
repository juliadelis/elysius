import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Picture from "/public/img/stone-pillar.png";
import { useRef } from "react";

export default function TextParallax() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <section className="overflow-hidden w-[100vw]">
      <div className="md:hidden h-[10vh]" />
      <div ref={container}>
        <div>
          <Slide
            src={Picture}
            direction={"left"}
            left={"-40%"}
            progress={scrollYProgress}
          />
          <Slide
            src={Picture}
            direction={"right"}
            left={"-25%"}
            progress={scrollYProgress}
          />
          <Slide
            src={Picture}
            direction={"left"}
            left={"-15%"}
            progress={scrollYProgress}
          />
        </div>
        <div className="h-[10vh] md:h-[30vh]" />
      </div>
    </section>
  );
}

type Direction = "left" | "right";
type SlideProps = {
  src: string;
  direction: Direction;
  left: string;
  progress: MotionValue<number>;
};

function Slide({ src, direction, left, progress }: SlideProps) {
  const dir = direction === "left" ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [150 * dir, -150 * dir]);

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap">
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
}

function Phrase({ src }: { src: string }) {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[5.5vw] font-glamore uppercase">
        Descubra um novo mundo
      </p>
      <span className="relative h-[5.5vw] aspect-[3/2] overflow-hidden">
        <img
          src={src}
          alt="Imagem decorativa"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          sizes="(max-width: 768px) 20vw, 20vw"
        />
      </span>
    </div>
  );
}
