import { motion } from "framer-motion";
import Image from "next/image";

export const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[8rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-200 p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-8 w-8 rounded-full bg-[#ABC5DE] flex flex-shrink-0 justify-center items-center">
          <Image
            src="/me-memoji.png"
            width={42}
            height={42}
            alt="me-memoji"
            className="relative top-[2px]"
          />
        </div>
        <div className="w-full h-6 rounded-full text-foreground/70">
          <span className="text-sm text-center mb-4">
            boa tarde, gostaria de um agendamento!
          </span>
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-200 p-2 items-center space-x-2 w-3/4 ml-auto bg-white"
      >
        <div className="w-full h-6 rounded-full text-foreground/70 flex justify-end">
          <span className="text-sm text-center mb-4">
            Claro, estou aqui para te ajudar? Qual seu nome?
          </span>
        </div>
        <div className="h-8 w-8 rounded-full bg-[#FECAD6] flex-shrink-0">
          <Image
            src="/robot-memoji.png"
            width={40}
            height={40}
            alt="me-memoji"
            className="relative"
          />
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-200 p-2 items-center space-x-2 bg-white"
      >
        <div className="h-8 w-8 rounded-full bg-[#ABC5DE] flex flex-shrink-0 justify-center items-center">
          <Image
            src="/me-memoji.png"
            width={42}
            height={42}
            alt="me-memoji"
            className="relative top-[2px]"
          />
        </div>
        <div className="w-full h-6 rounded-full text-foreground/70">
          <span className="text-sm text-center mb-4">Meu nome é Lucas!</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
