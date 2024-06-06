import { motion } from "framer-motion";
import OneBill from "../../../public/one_bill.jpeg";
import Image from "next/image";

export default function End() {
  return (
    <div className="md:max-w-[55vw]">
      <div className="flex flex-col gap-3 min-h-screen items-center justify-center">
        <h1 className="text-xl">
          The main difficulty in Dollar Auction is that the line between a
          rational decision and irrational decision gets muddy.
        </h1>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          {new Array(3).fill(null).map((_, i) => (
            <motion.div
              key={i}
              variants={{
                offscreen: {
                  y: 100,
                },
                onscreen: {
                  y: 0,
                },
              }}
              transition={{ delay: 0.2 * i }}
            >
              <Image
                src={OneBill}
                className={`max-w-[300px] -translate-y-${20 * i} scale-${(
                  100 +
                  i * 5
                ).toString()}`}
                alt={`Dollar Bill ${i + 1}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row h-screen items-center justify-center gap-10">
        <div className="p-5 md:w-[30vw] flex flex-col md:items-end">
          <h1 className="text-2xl">Irrational</h1>
          <p>To bid a dollar for more than a dollar is irrational...</p>
        </div>
        <div className="relative top-50 md:left-50 w-[90vw] md:h-[90vh] md:w-0 border border-black border-dashed" />
        <div className="p-5 md:w-[30vw]">
          <h1 className="text-2xl">Rational</h1>
          <p>However, to continue bidding to minimize losses is rational</p>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-xl">
          It&apos;s difficult to make a choice when the rational one is not always
          crystal clear, which leads to a situation where rational decisions
          perpetuate irrational outcomes. Each player starts with making
          rational decisions. But as the game went on, they fell into an
          escalation trap, and it progressively gets harder and harder to quit.
        </h1>
        <motion.div
          className="space-y-2 text-center p-1"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h1>Bid once</h1>
          {new Array(5).fill("Bid more").map((i, idx) => (
            <motion.div
              className="flex flex-col items-center"
              variants={{
                offscreen: {
                  y: 300,
                  opacity: 0,
                },
                onscreen: {
                  y: 0,
                  rotate: idx % 2 == 0 ? 5 : -5,
                  opacity: 1,
                },
              }}
              transition={{ delay: idx * 0.2 }}
              key={idx}
            >
              <motion.svg
                style={{ rotate: idx % 2 == 0 ? 15 : -15 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </motion.svg>
              <h1>{i}</h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <div className="space-y-1 text-xl">
          <h1>
            To put it simply, this game will never end until someone thinks that
            enough is enough.
          </h1>
          <h1>
            Sometimes, the best strategy is to
            <span className="font-switzer text-3xl p-1">QUIT</span>though you
            might end up with a loss.
          </h1>
        </div>
      </div>
    </div>
  );
}
