"use client";
import React from "react";

interface VideoGalleryProps {
  videos: string[];
  videoWidth?: string;
  videoHeight?: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  videoWidth,
  videoHeight,
}) => {
  return (
    <div className="bg-[#FFF4F1]">
      <div className="py-4 bg-[#4D194D]">
        <div className="max-w-xl mx-auto p-2">
          <nav className="py-4">
            <div className="flex items-center justify-center flex-wrap space-x-6">
              <button
                type="button"
                className="text-white font-medium hover:font-bold focus:outline-none mb-2 sm:mb-0"
              >
                About
              </button>
              <button
                type="button"
                className="text-white font-medium hover:font-bold focus:outline-none mb-2 sm:mb-0"
              >
                Photos
              </button>
              <button
                type="button"
                className="text-white font-medium hover:font-bold focus:outline-none mb-2 sm:mb-0"
              >
                Videos
              </button>
              <button
                type="button"
                className="text-white font-medium hover:font-bold focus:outline-none mb-2 sm:mb-0"
              >
                Requirements & Others
              </button>
              <button
                type="button"
                className="text-white font-medium hover:font-bold focus:outline-none mb-2 sm:mb-0"
              ></button>
            </div>
          </nav>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videos.map((videos, index) => (
          <div key={index} className="flex justify-center sm:justify-center">
            <video
              className={`rounded-lg overflow-hidden ${videoWidth} ${videoHeight}`}
              controls
            >
              <source src={videos} type="video/mp4" />
            </video>
          </div>
        ))}
        <div className="flex justify-center mt-4 sm:justify-end">
          <button className="border-2 border-[#4D194D] text-[#4D194D] px-4 py-2 rounded-full sm:mr-2">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
