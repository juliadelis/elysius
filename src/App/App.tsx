import { useEffect, useRef } from "react";
import Lenis from "lenis";

import Banner from "../components/Banner/Banner";
import Epiloge from "../components/Epiloge/Epiloge";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Menu";
import TextParallax from "../components/TextParallax/TextParallax";
import "./App.css";
import ZoomParallax from "../components/ZoomPic/ZoomParallax";
import Contact from "../components/Contact/Contact";

function App() {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };
    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <Epiloge />
      <TextParallax />
      <ZoomParallax />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
