import { useEffect, useRef, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max));
}

export default function Banner() {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const [offset, setOffset] = useState(0);
  const [fixed, setFixed] = useState(false);
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
        setOffset(-progress * PARALLAX_STRENGTH);

        const topLimit = leftRef.current.offsetTop;
        const bottomLimit =
          leftRef.current.offsetTop + leftRef.current.offsetHeight - vh;

        if (window.scrollY >= topLimit && window.scrollY <= bottomLimit) {
          setFixed(true);
          setBottomLock(false);
        } else if (window.scrollY > bottomLimit) {
          setFixed(false);
          setBottomLock(true);
        } else {
          setFixed(false);
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

  return (
    <section
      id="topo"
      className="relative w-screen overflow-hidden px-4  "
      style={{ minHeight: "80vh" }}>
      <div className="container mx-auto grid grid-cols-12 gap-6 items-start pt-8">
        <div
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
            className=" font-light mb-32 md:mb-0 h-full md:h-[70vh] max-w-[520px] text-left text-xl leading-relaxed text-[#020A17]/80">
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
          className="col-span-12 hidden md:flex md:col-span-7 relative self-start h-full "
          style={{ minHeight: leftRef.current?.offsetHeight || "100vh" }}>
          <div
            className="relative w-full h-full overflow-hidden"
            style={{
              height: leftRef.current?.offsetHeight || "100vh",
              position: "relative",
            }}>
            <img
              src="/img/poseidon_estatua_1.png"
              alt="Poseidon"
              width={736}
              style={{
                position: fixed ? "fixed" : "absolute",
                marginTop: "-22%",
                top: fixed
                  ? 0
                  : bottomLock
                  ? (leftRef.current?.offsetHeight || 0) - window.innerHeight
                  : 0,

                transform: `translateY(${offset}px)`,
                willChange: "transform",
                maxWidth: "none",
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
