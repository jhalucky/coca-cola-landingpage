import React from "react";

const PageCanArt = () => {
  return (
     <section className="bg-[#971017f8] text-black dark:bg-black dark:text-white transition-colors duration-300 w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 pt-6 sm:pt-10 md:pt-0">
    
    {/* Bottle Section */}
    <div className="w-[160px] sm:w-[220px] md:w-[400px] -mt-6 sm:mt-0 mb-4 md:mb-0 flex-shrink-0">
      {/* Light Mode Bottle */}
      <img
        src="lightcoke.png"
        alt="Coca-Cola Bottle"
        className="block dark:hidden w-full h-auto"
      />
      {/* Dark Mode Bottle */}
      <img
        src="darkcoke.png"
        alt="Coca-Cola Bottle"
        className="hidden dark:block w-full h-auto"
      />
    </div>

    {/* Text Section */}
    <div className="flex-1 text-black dark:text-white text-center  -mt-4 sm:mt-0">
      <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold font-[cursive] mb-3 sm:mb-6">
        "Real Magic in Every Sip"
      </h2>

      {/* Show paragraph only on sm+ */}
      <p className="hidden sm:block text-base md:text-xl leading-relaxed font-[cursive] max-w-[680px] mx-auto px-2">
        Coca-Cola isn’t just a drink — it’s a feeling. It’s the fizz that brings people together.  
        The clink of a chilled bottle on a summer afternoon.  
        A timeless symbol of celebration and togetherness.  
        Each sip tells a story of heritage, joy, and shared moments.  
        From bustling cities to quiet hometowns, it speaks one language: refreshment.  
        Its bold flavor awakens nostalgia with every pour.  
        Generations have grown up with its magic by their side.  
        Whether under stadium lights or quiet family dinners.  
        Coca-Cola remains a beacon of happiness and harmony.  
        One bottle. One world. One unforgettable taste.
      </p>
    </div>
  </div>
</section>


  );
};

export default PageCanArt;






