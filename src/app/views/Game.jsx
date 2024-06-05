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
      { body: "Sure, $10.", character: "you" },
      { body: "I'll go $20.", character: "bidder", align: "right" },
      {
        body: "We have $20. How about $30?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "$30.", character: "you" },
      { body: "$40.", character: "bidder", align: "right" },
      {
        body: "$40! Do I hear $50?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "$50.", character: "you" },
      { body: "$60.", character: "bidder", align: "right" },
      {
        body: "$60! Can I get $70?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "$70.", character: "you" },
      { body: "$80.", character: "bidder", align: "right" },
      {
        body: "$80 for a hundred-dollar bill! Who bids $90?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "$90.", character: "you" },
      { body: "$100.", character: "bidder", align: "right" },
      {
        body: "We have $100! Remember, both the highest and second-highest bidders must pay their final bids. Anyone for $110?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      {
        body: "Wait, if I stop now, I lose $90. I'll bid $110.",
        character: "you",
      },

      {
        body: "You are making a rational decision to avoid losing your previous bid of $90 by bidding more, thinking you can still get a better outcome.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      {
        body: "I can't lose $100. I bid $120.",
        character: "bidder",
        align: "right",
      },

      {
        body: "The bidder is also making a rational decision to avoid losing their $100 bid, escalating the commitment to minimize losses.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$130.", character: "you" },
      {
        body: "Your rational decision is driven by the desire to avoid the sunk cost of $110, further escalating the bids.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$140.", character: "bidder", align: "right" },
      { body: "$150.", character: "you" },
    ],
    [
      {
        body: "The cycle of rational decisions continues, with each bid attempting to minimize loss.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$160.", character: "bidder", align: "right" },
      {
        body: "$160! Going once, going twice…",
        character: "auctioneer",
        align: "right",
      },
    ],
    [{ body: "$170.", character: "you" }],
    [
      {
        body: "Both bidders are now deeply committed, each new bid aimed at minimizing a perceived loss.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$180.", character: "bidder", align: "right" },
      {
        body: "$180! Will you go $190?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "$190.", character: "you" },
      {
        body: "The escalation of commitment keeps driving the bids higher, well beyond the value of the hundred-dollar bill.",
        character: "narrator",
        align: "right",
      },
    ],
    [
      { body: "$200.", character: "bidder", align: "right" },
      {
        body: "$200! Any higher?",
        character: "auctioneer",
        align: "right",
      },
    ],
    [
      { body: "I bid $210.", character: "you" },
      {
        body: "Each bidder is now trapped in a cycle where stopping means a significant loss, thus rational decisions perpetuate irrational outcomes.",
        character: "narrator",
        align: "right",
      },],[
      { body: "$220.", character: "bidder", align: "right" },
      {
        body: "$220! Going once, going twice, sold to bidder for $240. Congratulations! You win the hundred-dollar bill.",
        character: "auctioneer",
        align: "right",
      },],[
      { body: "Damn! I lost $210.", character: "you" },
      {
        body: "Despite rational attempts to minimize losses, you end up losing a substantial amount.",
        character: "narrator",
        align: "right",
      },],[
      {
        body: "And I lost $120 after getting the $100.",
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
      body: "Welcome to our exciting dollar auction! Today, we're auctioning off a crisp hundred-dollar bill. The starting bid is just $1. Who wants to start?",
      character: "auctioneer",
      align: "right",
    },
    { body: "I'll start with $1.", character: "you" },
    { body: "I bid $5.", character: "bidder", align: "right" },
    {
      body: "Great! We have $5. Can I get $10?",
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
        block: "start",
        inline: "nearest",
      });
    }
    if (currentIdx >= junctions.length - 1) {
      setShowButton(false);
    }
  }

  return (
    <div className="flex flex-col gap-10 items-center mt-24 p-5 border-2 rounded-2xl">
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
        <button
          ref={buttonRef}
          onClick={handleConversation}
          className="rounded-md py-2 px-14 border border-zinc-200 bg-black text-zinc-200"
        >
          <span className="font-switzer">NEXT</span>
        </button>
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
      <motion.div
        whileHover={{
          scale: "1.2",
          zIndex: "20",
          translateX: align === "right" ? -30 : 30,
          translateY: -20,
        }}
        style={{ scale: "1", rotate: 0 }}
        transition={{ delay: 0.02 }}
        className="bg-white rounded-lg p-5 max-w-[600px] shadow-md"
      >
        <p className="text-xl md:text-2xl">{body}</p>
      </motion.div>
    </div>
  ) : (
    <div className="w-full bg-black text-zinc-200 min-h-20 rounded-md p-5">
      <div className="flex items-center justify-center size-5 rounded-full border my-2">
        i
      </div>
      <p className="text-2xl">{body}</p>
    </div>
  );
}
