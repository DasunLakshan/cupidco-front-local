"use-client";

import React from "react";
import Image from "next/image";
import Title from "../../common/texts/Title";
import Description from "../../common/texts/Description";
import SliderComponent from "../../common/sliders/ServiceSlider";

const HomeSc2 = () => {
  const sliderSettings = {};

  return (
    <div className="relative items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HomeSc2.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto p-5 px-4 px-4sm:px-6 lg:px-8 z-10 relative space-y-3">
        {/* Title */}
        <div className="text-center">
          <Title
            text="Our Services"
            center={true}
            fontSize="max-sm:text-xl  md:text-2xl pt-5 xl:text-4xl "
          />
        </div>

        {/* Description */}
        <div className="text-center p-2 px-9">
          <Description
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            center={true}
            fontWeight="font-regular"
            fontSize="max-sm:text-md xl:text-xl"
          />
        </div>

        {/* Slider Component */}
        <div className="py-6">
          <SliderComponent {...sliderSettings} />
        </div>
      </div>
    </div>
  );
};

export default HomeSc2;
