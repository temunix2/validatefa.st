import React from 'react';

const DemoSection = () => {
  // Internal variables
  const mainTitle = "See WritingGroupAI in Action";
  const highlightedText = "and elevate your writing";
  const videoUrl = "https://www.youtube.com/embed/u_ovh4B8l7k"; // Replace with your actual video URL
  const isYouTube = true; // Set to false if using a direct video file

  return (
    <section className="py-16 bg-base-200 flex flex-col justify-center min-h-[85vh]" id="demo">
      <div className="container mx-auto px-4">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-8 md:mb-12 text-center">
          {mainTitle}
          <span className="block mt-2 md:mt-4">
            <span className="bg-neutral text-neutral-content px-2 md:px-4 leading-relaxed whitespace-nowrap">
              {highlightedText}
            </span>
          </span>
        </h2>
        <div className="max-w-6xl mx-auto h-[50vh]">
          {isYouTube ? (
            <iframe
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <video controls className="w-full h-full object-contain bg-black">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;