import { useEffect, useRef, useState, type CSSProperties } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max));
}

export default function Banner() {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const [offset, setOffset] = useState(0);
  const [bottomLock, setBottomLock] = useState(false);

  const PARALLAX_STRENGTH = 60;

  useEffect(() => {
    let raf = 160;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!leftRef.current || !rightRef.current) return;
        const vh = window.innerHeight;

        const total = leftRef.current.offsetHeight - vh;
        const scrollTop = window.scrollY + vh - leftRef.current.offsetTop - vh;

        const progress = clamp(scrollTop / total, 0, 1);

        const offset = -progress * PARALLAX_STRENGTH;
        setOffset(offset);
        if (offset <= -60) {
          setBottomLock(true);
        } else {
          setBottomLock(false);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const baseStyle: CSSProperties = {
    maxWidth: "none",
    pointerEvents: "none",
    userSelect: "none",
  };

  const dynamicStyle: CSSProperties = bottomLock
    ? {
        ...baseStyle,
        position: "absolute",
        bottom: 20,
      }
    : {
        ...baseStyle,
        position: "fixed",
        marginTop: "-14%",
        top: leftRef.current?.offsetTop ?? 0,
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      };

  return (
    <section
      id="topo"
      className="relative w-screen px-4  "
      style={{ minHeight: "80vh" }}>
      <div className="container mx-auto grid grid-cols-12 gap-6 items-start pt-8 md:mb-[-20px]">
        <div
          id="test"
          ref={leftRef}
          className="col-span-12 md:col-span-5 flex flex-col justify-start">
          <div className="h-full mb-16 md:mb-0 md:h-[100vh] mt-11 md:mt-38 self-center text-[#020A17]">
            <img
              height={348}
              width={650}
              src="/img/logo-home.png"
              alt="Logo Elysus"
              className="max-w-full h-auto"
            />
          </div>

          <p
            id="about"
            className=" font-light mb-28 md:mb-0 h-full md:h-[65vh] max-w-[520px] text-left text-xl leading-relaxed text-[#020A17]/80">
            Elysius é um servidor de roleplay para GTA focado na cultura da
            mitologia grega. Destinada para bravos corações, quem escolhe o
            caminho a ser seguido é você. Sua evolução, destino, escolhas,
            consequências, tudo dependerá exclusivamente de você. Aqui, as
            histórias são recriadas de forma excêntrica, para mostrar o valor
            criativo que buscamos oferecer a todos. Seja semideus, criatura ou
            monstro, é seu nome que Elysius clama.
          </p>
        </div>

        <div
          ref={rightRef}
          className="col-span-12 hidden md:flex md:col-span-7 self-start mb-[-20px]"
          style={{ minHeight: leftRef.current?.offsetHeight || "100vh" }}>
          <div
            className="w-full"
            style={{
              position: "sticky",
              top: 0,
            }}>
            <img
              src="/img/poseidon_estatua_1.png"
              alt="Poseidon"
              width={736}
              style={dynamicStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
