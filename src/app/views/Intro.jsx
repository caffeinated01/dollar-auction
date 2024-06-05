import { Bento } from "../components/Bento";
import { Block } from "../components/Bento";
import { Index } from "../components//Bento";
import MartinShubikAvatar from "../../../public/martin_shubik.jpeg";
import BentoCover from "../../../public/bento_cover.jpeg";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex min-h-[110vh] items-center max-w-[90vw] md:max-w-[80vw] py-12">
      <Bento>
        <Block className="col-span-10 md:col-span-6" rotation={"2deg"}>
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
        <Block
          className="col-span-10 md:col-span-4 flex items-center justify-center"
          rotation={"2deg"}
        >
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
              "Imagine I offered you a hundred-dollar bill for one buck. Sounds like a great deal, right? That's the premise of the dollar auction, but with a twist that makes it a fascinating study in decision-making. Let's unveil how the game plays out next."
            }
          />
        </Block>
      </Bento>
    </div>
  );
}

function Para({ title, body }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl pb-2">{title}</h2>
      <p className="text-xl md:text-2xl">{body}</p>
    </div>
  );
}
