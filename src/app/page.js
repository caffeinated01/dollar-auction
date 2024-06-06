"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import Intro from "./views/Intro";
import Game from "./views/Game";
import End from "./views/End";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-5 bg-[#f7f7f7] overflow-hidden font-satoshi">
      <Hero />
      <Slider word={"INTRO"} />
      <Intro />
      <Slider word={"GAME"} />
      <Game />
      <Slider word={"WHAT?"} />
      <End />
      <Footer />
    </main>
  );
}
