"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SecondaryButton from "../buttons/SecondaryButton";
import Description from "../texts/Description";
import Title from "../texts/Title";
import Image from "next/image";

type CardComponentProps = {
  overlayTitle: string;
  gradientTitle: string;
  descriptionText: string;
  buttonText: string;
  onButtonClick: () => void;
  image: string;
};

const CardComponent: React.FC<CardComponentProps> = ({
  overlayTitle,
  gradientTitle,
  descriptionText,
  buttonText,
  onButtonClick,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const overlayBaseClasses =
    "absolute inset-0 p-5 flex flex-col justify-center items-center text-center text-white bg-primary-purple px-10 transition-all duration-800 space-y-5 max-sm:space-y-5 sm:space-y-5 md:p-4 md:space-y-2 xl:p-12";
  const overlayHoverClasses = isHovered
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-full";

  const gradientBaseClasses =
    "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-purple to-transparent p-2 transition-opacity duration-800";
  const gradientHoverClasses = isHovered ? "opacity-0" : "opacity-100";

  return (
    <div
      className="
        relative overflow-hidden rounded-2xl  
        w-full pb-[120%] h-[100%] group
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        <Image
          src={image}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 group-hover:opacity-75"
        />
      </div>

      {/* Overlay content */}
      <div className={`${overlayBaseClasses} ${overlayHoverClasses}`}>
        {/* Title */}
        <Title
          text={overlayTitle}
          center={true}
          fontColor="text-white"
          fontWeight="font-bold"
          fontSize=" text-2xl max-sm:text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl
          "
        />
        {/* Description */}
        <Description
          text={descriptionText}
          center={true}
          fontColor="text-white"
          fontSize=" text-sm max-sm:text-xs sm:text-md md:text-xs lg:text-sm xl:text-sm md:p-2"
          fontFamily="font-Quicksand"
          fontWeight="font-medium"
        />
        {/* Button */}
        <SecondaryButton
          label={buttonText}
          invert={true}
          height="p-2 sm:p-1 max-sm:p-1 xl:p-1"
          width="w-32 max-sm:w-25 xl:w-40"
          radius="rounded-md"
          fontSize="
            text-md 
            max-sm:text-xs 
            am:text-xs
            md:text-sm
            lg:text-md
            xl:text-lg 
          "
        />
      </div>

      {/* Existing gradient overlay */}
      <div className={`${gradientBaseClasses} ${gradientHoverClasses}`}>
        <div className="p-1 mb-1 md:p-0 lg:p-1">
          <Title
            text={gradientTitle}
            center={true}
            fontColor="text-white"
            fontSize="max-sm:text-xs text-2xl sm:text-sm md:text-lg lg:text-xl"
          />
        </div>
      </div>
    </div>
  );
};

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        <div className="px-card">
          <CardComponent
            overlayTitle="Title 1"
            gradientTitle="Title 1"
            descriptionText="Description for card 1"
            buttonText="Learn More"
            onButtonClick={() => console.log("Button 1 clicked")}
            image="/images/SliderImage1.png"
          />
        </div>
        <div className="px-card">
          <CardComponent
            overlayTitle="Title 1"
            gradientTitle="Title 1"
            descriptionText="Description for card 1"
            buttonText="Learn More"
            onButtonClick={() => console.log("Button 1 clicked")}
            image="/images/SliderImage2.png"
          />
        </div>
        <div className="px-card">
          <CardComponent
            overlayTitle="Title 1"
            gradientTitle="Title 1"
            descriptionText="Description for card 1"
            buttonText="Learn More"
            onButtonClick={() => console.log("Button 1 clicked")}
            image="/images/SliderImage3.png"
          />
        </div>
        <div className="px-card">
          <CardComponent
            overlayTitle="Title 1"
            gradientTitle="Title 1"
            descriptionText="Description for card 1"
            buttonText="Learn More"
            onButtonClick={() => console.log("Button 1 clicked")}
            image="/images/SliderImage1.png"
          />
        </div>
        <div className="px-card">
          <CardComponent
            overlayTitle="Title 1"
            gradientTitle="Title 1"
            descriptionText="Description for card 1"
            buttonText="Learn More"
            onButtonClick={() => console.log("Button 1 clicked")}
            image="/images/SliderImage2.png"
          />
        </div>
        <div className="px-card">
          <CardComponent
            overlayTitle="Title 1"
            gradientTitle="Title 1"
            descriptionText="Description for card 1"
            buttonText="Learn More"
            onButtonClick={() => console.log("Button 1 clicked")}
            image="/images/SliderImage3.png"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
