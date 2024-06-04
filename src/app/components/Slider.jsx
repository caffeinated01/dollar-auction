import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Slider({ word }) {
  const rowRef = useRef();

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["end start", "start end"],
  });

  return (
    <div className="overflow-hidden font-switzer">
      <div ref={rowRef}>
        <Row word={word} progress={scrollYProgress} />
      </div>
    </div>
  );
}

function Row({ word, progress }) {
  const x = useTransform(progress, [0, 1], [-250, 250]);

  return (
    <motion.div className={`relative flex whitespace-nowrap`} style={{ x }}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <Word key={i} word={word} />
      ))}
    </motion.div>
  );
}

function Word({ word }) {
  return (
    <div className="flex gap-5 items-center text-6xl px-5">
      <h1>{word}</h1>
    </div>
  );
}
