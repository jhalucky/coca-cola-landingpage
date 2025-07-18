import React from "react";

const Page4 = () => {
  return (
     <section className="bg-[#971017f8] text-black dark:bg-black dark:text-white transition-colors duration-300 w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll">
      {/* Top content */}
      <div className="text-center mt-10">
        <h1 className="text-4xl md:text-5xl text-black dark:text-white font-bold">
          Let's Connect
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mt-4">
          Got a fizzing idea? Reach out and let’s refresh the world together.
        </p>
      </div>

      {/* SVG Coca-Cola Bottle Logo at Bottom */}
      <div className="w-full flex justify-center mt-auto">
        <img
          src="always_coke.svg"
          alt="Coca-Cola Bottle Logo"
          className="w-[180px] md:w-[260px] object-contain"
        />
      </div>
    </section>
  );
};

export default Page4;


