"use client";
import React from "react";

interface FullImageGalleryProps {
  images: string[];
  imageWidth?: string;
  imageHeight?: string;
}

const FullImageGallery: React.FC<FullImageGalleryProps> = ({
  images,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className="bg-[#FFF4F1]">
      {/* Navigation Bar */}
      <nav className="bg-[#4d194d] py-4">
        <div className="flex items-center justify-center">
          <p className="text-white text-m font-bold sm:text-lg md:text-xl lg:text-2xl">
            Image Gallery
          </p>
        </div>
      </nav>

      {/* Image Grid */}
      <div className="bg-[#FFF4F1] mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="flex max-md:justify-center">
            <img
              className={`h-auto max-w-full rounded-lg ${imageWidth} ${imageHeight}`}
              src={imageUrl}
              alt={`Gallery Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullImageGallery;
