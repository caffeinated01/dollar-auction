import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

function Bento({ children }) {
  return (
    <div className="grid grid-flow-dense grid-cols-10 gap-4">{children}</div>
  );
}

function Block({ className, rotation, ...props }) {
  let r = rotation;
  if (!rotation) {
    r = "0deg";
  }
  return (
    <motion.div
      whileHover={{ rotate: r, scale: "1.1", zIndex: "20" }}
      style={{ scale: "1", rotate: 0 }}
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

export { Bento, Block, Index };
