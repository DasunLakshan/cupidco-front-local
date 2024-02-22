"use client";
import React from "react";

interface GalleryComponentProps {
  images: string[];
  imageWidth?: string;
  imageHeight?: string;
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({
  images,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className="bg-[#FFF4F1] relative">
      {/* Add relative positioning */}
      <div className="py-4 bg-[#4d194d]">
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
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative">
        {images.map((imageUrl, index) => (
          <div key={index} className="flex justify-end">
            <img
              className={`h-auto max-w-full rounded-lg ${imageWidth} ${imageHeight}`}
              src={imageUrl}
              alt={`Gallery Image ${index + 1}`}
            />
          </div>
        ))}

        <div className="bottom-4 left-4">
          {/* Add fixed positioning */}
          <button className="border-2 border-[#4D194D] text-[#4D194D] px-4 py-2 rounded-full">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
