import React from 'react';

const Page3 = () => {
  const videos = [
    { src: "clip1.mp4", label: "Glass Bottle" },
    { src: "clip2.mp4", label: "Plastic Bottle" },
    { src: "clip3.mp4", label: "Can Pouring" },
    { src: "clip4.mp4", label: "Extra Clip" },
  ];

  return (
    <section className="bg-[#971017f8] text-black dark:bg-black dark:text-white transition-colors duration-300 w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1600px]">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden rounded-xl shadow-xl aspect-[9/16] bg-white-200 dark:bg-neutral-900"
          >
            <video
              src={video.src}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Optional overlay label */}
            {/* <div className="absolute bottom-2 left-2 text-black dark:text-white text-xs bg-black/60 px-2 py-1 rounded">
              {video.label}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page3;

