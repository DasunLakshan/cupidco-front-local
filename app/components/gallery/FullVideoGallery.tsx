"use client";
import React from "react";

interface FullVideoGalleryProps {
  videos: string[];
  videoWidth?: string;
  videoHeight?: string;
}

const FullVideoGallery: React.FC<FullVideoGalleryProps> = ({
  videos,
  videoWidth,
  videoHeight,
}) => {
  return (
    <div className="bg-[#FFF4F1]">
      {/* Navigation Bar */}
      <nav className="bg-[#4d194d] py-4">
        <div className="flex items-center justify-center">
          <p className="text-white text-m font-bold sm:text-lg md:text-xl lg:text-2xl">
            Video Gallery
          </p>
        </div>
      </nav>

      {/* Video Grid */}
      <div className="bg-[#FFF4F1] mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videos.map((videos, index) => (
          <div key={index} className="flex max-md:justify-center">
            <video
              className={`rounded-lg ${videoWidth} ${videoHeight}`}
              controls
            >
              <source src={videos} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullVideoGallery;
