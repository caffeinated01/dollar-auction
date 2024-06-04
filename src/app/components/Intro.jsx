import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import MartinShubikAvatar from "../../../public/martin_shubik.jpeg";
import BentoCover from "../../../public/bento_cover.jpeg";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex min-h-screen items-center max-w-[80vw  ] md:px-10 px-2 py-12">
      <div className="grid grid-flow-dense grid-cols-10 gap-4">
        <Block className="col-span-10 md:col-span-6">
          <Index index={1} />
          <Para
            title={"What is the Dollar Auction"}
            body={
              "The dollar auction is a game theory scenario that highlights the paradoxes in rational decision-making and escalation of commitment. It was introduced by Martin Shubik, a renowned economist famous for his works in economics and game theory."
            }
          />
        </Block>
        <Block
          className="col-span-10 md:col-span-4 flex items-center justify-center"
          rotation={"-2deg"}
        >
          <div className="max-w-56">
            <Image
              src={MartinShubikAvatar}
              className="rounded-full aspect-square object-cover"
              alt="Martin Shubik"
            />
          </div>
        </Block>
        <Block className="col-span-10 md:col-span-4 flex items-center justify-center">
          <Image
            src={BentoCover}
            className="rounded-md object-cover max-h-52 m-5"
            alt="Bento Cover"
          />
        </Block>
        <Block className="col-span-10 md:col-span-6" rotation={"-2deg"}>
          <Index index={2} />
          <Para
            title={"How It Works"}
            body={
              "Imagine I offered you a hundred-dollar bill for one buck. Sounds like a great deal, right? That's the premise of the dollar auction, but with a twist that makes it a fascinating study in decision-making. "
            }
          />
        </Block>
      </div>
    </div>
  );
}

function Block({ className, rotation, ...props }) {
  let r = rotation;
  if (!rotation) {
    r = "2deg";
  }
  return (
    <motion.div
      whileHover={{ rotate: r, scale: "1.1", zIndex: "20" }}
      transition={{ delay: 0.02 }}
      className={twMerge(
        "col-span-5 rounded-lg p-5 border border-zinc-100 bg-white",
        className
      )}
      {...props}
    ></motion.div>
  );
}

function Index({ index }) {
  return (
    <div className="flex items-center justify-center size-10 rounded-full border mb-2">
      {index}
    </div>
  );
}

function Para({ title, body }) {
  return (
    <div>
      <h2 className="text-3xl pb-2">{title}</h2>
      <p className="text-2xl">{body}</p>
    </div>
  );
}
