"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Intro from "./components/Intro";

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
      {/* <h1 className="text-3xl">
        Idea is to have how the game plays out as a text message displayed on a
        phone of some sort
      </h1> */}
    </main>
  );
}
