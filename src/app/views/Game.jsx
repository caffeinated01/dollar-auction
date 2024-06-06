import { motion } from "framer-motion";
import Image from "next/image";
import Chad1 from "../../../public/chad_1.jpeg";
import Chad2 from "../../../public/chad_2.jpeg";
import Chad3 from "../../../public/chad_3.jpeg";
import { useState, useRef } from "react";
import { flushSync } from "react-dom";

export default function Game() {
  const junctions = [
    [
      { body: "$0.15.", character: "you" },
      { body: "$0.20.", character: "bidder", align: "right" },
      {
        body: "$0.20! Do I hear $0.25?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "$0.25.", character: "you" },
      { body: "$0.30.", character: "bidder", align: "right" },
      {
        body: "$0.30! How about $0.40?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "$0.40.", character: "you" },
      { body: "$0.50.", character: "bidder", align: "right" },
      {
        body: "$0.50! How about $0.60?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "$0.60.", character: "you" },
      { body: "$0.70.", character: "bidder", align: "right" },
      {
        body: "$0.70! How about $0.80?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "$0.80.", character: "you" },
      { body: "$0.90.", character: "bidder", align: "right" },
      {
        body: "$0.90! Do I hear $1.00?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "$1.00.", character: "you" },
      { body: "$1.10.", character: "bidder", align: "right" },
      {
        body: "We have $1.10! Remember, both the highest and second-highest bidders must pay their final bids. Anyone for $1.20?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      {
        body: "Wait, if I stop now, I lose $1.00. I'll bid $1.20.",
        character: "you",
      },
      {
        body: "You are making a rational decision to avoid losing your previous bid of $1.00 by bidding more, thinking you can still get a better outcome.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      {
        body: "I can't lose $1.10. I bid $1.30.",
        character: "bidder",
        align: "right",
      },
      {
        body: "The bidder is also making a rational decision to avoid losing their $1.10 bid, escalating the commitment to minimise losses.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$1.40.", character: "you" },
      {
        body: "Your rational decision is driven by the desire to avoid the sunk cost of $1.20, further escalating the bids.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$1.50.", character: "bidder", align: "right" },
      { body: "$1.60.", character: "you" },
      {
        body: "The cycle of rational decisions continues, with each bid attempting to minimise loss.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$1.70.", character: "bidder", align: "right" },
      {
        body: "$1.70! Going once, going twice…",
        character: "auctioneer",
        align: "right",
      },
      { body: "$1.80.", character: "you" },
      {
        body: "Both bidders are now deeply committed, each new bid aimed at minimising a perceived loss.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$1.90.", character: "bidder", align: "right" },
      {
        body: "$1.90! Will you go $2.00?",
        character: "auctioneer",
        align: "right",
      },
      { body: "$2.00.", character: "you" },
      {
        body: "The escalation of commitment keeps driving the bids higher, well beyond the value of the hundred-dollar bill.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$2.10.", character: "bidder", align: "right" },
      {
        body: "$2.10! Any higher?",
        character: "auctioneer",
        align: "right",
      },
      { body: "I bid $2.20.", character: "you" },
      {
        body: "Each bidder is now trapped in a cycle where stopping means a significant loss, thus rational decisions perpetuate irrational outcomes.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$2.30.", character: "bidder", align: "right" },
      {
        body: "$2.30! Going once, going twice, sold to bidder for $2.30. Congratulations! You win the hundred-dollar bill.",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "Damn! I lost $2.20.", character: "you" },
      {
        body: "Despite rational attempts to minimise losses, you end up losing a substantial amount.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      {
        body: "And I lost $1.30 after getting the $1.00.",
        character: "bidder",
        align: "right",
      },
      {
        body: "In the end, even the winning bidder faces a significant net loss.",
        character: "narrator",
        align: "right",
      },
    ],
  ];

  const charToAvatar = {
    you: Chad1,
    auctioneer: Chad2,
    bidder: Chad3,
  };

  const [conversation, setConversation] = useState([
    {
      body: "Welcome to our exciting dollar auction! Today, we're auctioning off a crisp dollar bill. Who wants to start?",
      character: "auctioneer",
      align: "right",
    },
    { body: "I'll start with $0.05.", character: "you" },
    { body: "I bid $0.10.", character: "bidder", align: "right" },
    {
      body: "We have $0.10. How about $0.15?",
      character: "auctioneer",
      align: "right",
    },
  ]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const buttonRef = useRef(null);

  function handleConversation() {
    if (currentIdx < junctions.length) {
      flushSync(() => {
        setConversation((prev) => [...prev, ...junctions[currentIdx]]);
        setCurrentIdx(currentIdx + 1);
      });
      buttonRef.current.scrollIntoView({
        top: 50,
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
    if (currentIdx >= junctions.length - 1) {
      setShowButton(false);
    }
  }

  return (
    <div className="flex flex-col gap-10 items-center my-40 p-5 border-2 rounded-2xl">
      <ul className="flex flex-col w-[90vw] md:w-[50vw]">
        {conversation.map((text, idx) => (
          <Text
            key={idx}
            body={text.body}
            character={text.character}
            avatar={charToAvatar[text.character]}
            align={text.align}
          />
        ))}
      </ul>
      {showButton ? (
        <motion.button
          ref={buttonRef}
          onClick={handleConversation}
          whileHover={{
            scale: "1.2",
          }}
          style={{ scale: "1", rotate: 0 }}
          transition={{ delay: 0.02 }}
          className="rounded-md py-2 px-4 border border-zinc-200 bg-black text-zinc-200"
        >
          <span className="font-switzer flex items-center">
            NEXT
            <svg
              fill="none"
              height="22"
              width="22"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </span>
        </motion.button>
      ) : (
        <div ref={buttonRef}></div>
      )}
    </div>
  );
}

function Text({ body, character, avatar, align }) {
  return character != "narrator" ? (
    <div
      className={`flex flex-col ${
        align === "right" ? "items-end" : "items-start"
      } gap-2 my-5`}
    >
      <div
        className={`flex ${
          !align ? "flex-row-reverse" : ""
        } items-center gap-2`}
      >
        <span className="text-2xl text-zinc-500">
          {character[0].toUpperCase() + character.slice(1)}
        </span>
        <Image
          src={avatar}
          alt="Avatar"
          className="max-w-14 aspect-square rounded-full border border-zinc-100"
        />
      </div>
      <div className="bg-white rounded-lg p-5 max-w-[600px] shadow-md">
        <p className="text-xl md:text-2xl">{body}</p>
      </div>
    </div>
  ) : (
    <motion.div
      whileHover={{
        scale: "1.1",
        translateY: -20,
        zIndex: "20",
      }}
      style={{ scale: "1", rotate: 0 }}
      transition={{ delay: 0.02 }}
      className="w-full bg-black text-zinc-200 min-h-20 rounded-md p-5"
    >
      <div className="flex items-center justify-center size-5 rounded-full border my-2">
        i
      </div>
      <p className="text-2xl">{body}</p>
    </motion.div>
  );
}
