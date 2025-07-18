import React, { useRef, useState, useEffect } from 'react';

const Page5 = () => {
  const videoRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);

  // Replay video on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
          setShowMessage(false); // Hide message on replay
        }
      },
      { threshold: 0.6 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const handleEnded = () => {
    setShowMessage(true); // Show text when video ends
  };

  return (
    <section className="bg-[#971017f8] text-black dark:bg-black dark:text-white transition-colors duration-300 w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll">
      {/* Faint Centered Logo */}
      <img
        src="coca-logo.svg"
        alt="Coca-Cola"
        className="absolute top-1/2 left-1/2 w-[400px] max-w-[80%] opacity-15 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
      />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-[1200px] relative z-10">
        {/* Video Section */}
        <div className="aspect-video w-full lg:w-2/3 rounded-xl overflow-hidden shadow-2xl relative">
          <video
            ref={videoRef}
            src="video.mp4"
            className="w-full h-full object-cover"
            controls={false}
            muted
            playsInline
            onEnded={handleEnded}
          />

          {/* Bottom Right Watermark */}
          <img
            src="coca-logo.svg"
            alt="Coca-Cola"
            className="absolute bottom-4 right-4 w-[50px] sm:w-[40px] md:w-[100px] opacity-20 pointer-events-none z-20"
          />
        </div>

        {/* Message on Video End */}
        {showMessage && (
          <div className="text-3xl font-semibold lg:w-1/3 text-center lg:text-left animate-fadeIn">
            Enjoy your drink 🥤
          </div>
        )}
      </div>
    </section>
  );
};

export default Page5;
