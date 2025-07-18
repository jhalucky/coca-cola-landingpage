import React from "react";
import { motion } from "framer-motion";

const Page1 = () => {
  return (
    <section className="h-screen w-full bg-[#971017f8] text-black dark:bg-black dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Center Coke Splash + Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none flex items-center justify-center w-[80%] max-w-[400px]">
        {/* Bottle Splash Image */}
        <img
          src="cokebottle.svg"
          alt="Coke Splash"
          className="absolute w-[120px] sm:w-[150px] md:w-[1000px] right-5 bottom-50 rotate-[-360deg] z-[1] opacity-50"
        />

        {/* Coca-Cola Logo */}
        <img
          src="coca-logo.svg"
          alt="Coca-Cola Logo"
          className="w-full h-auto relative z-[2]"
        />
      </div>

      {/* Bottom Left Bottle */}
      <img
        src="cokebottle.svg"
        alt="Coke Bottle Left"
        className="absolute bottom-10 left-0 w-20 sm:w-24 md:w-28 opacity-90 pointer-events-none z-20"
      />

      {/* Bottom Right Bottle */}
      <img
        src="cokebottle.svg"
        alt="Coke Bottle Right"
        className="absolute bottom-10 right-0 w-20 sm:w-24 md:w-28 opacity-90 pointer-events-none z-20"
      />

      {/* Top Left Bottle */}
      <img
        src="cokebottle.svg"
        alt="Coke Bottle Top Left"
        className="absolute top-10 left-0 w-20 sm:w-24 md:w-28 opacity-90 pointer-events-none z-20"
      />

      {/* Top Right Bottle */}
      <img
        src="cokebottle.svg"
        alt="Coke Bottle Top Right"
        className="absolute top-10 right-0 w-20 sm:w-24 md:w-28 opacity-90 pointer-events-none z-20"
      />
    </section>
  );
};

export default Page1;








