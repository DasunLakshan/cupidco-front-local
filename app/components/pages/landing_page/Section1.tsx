"use client";

import Description from "../../common/texts/Description";
import Title from "../../common/texts/Title";
import PrimaryButton from "../../common/buttons/PrimaryButton";
import SecondaryButton from "../../common/buttons/SecondaryButton";
import Image from "next/image";

const LandingPageSection1 = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen p-20"
      style={{ backgroundImage: "url(/images/homeBackground1.png)" }}
    >
      <div>
        <Title
          text="Discover your soul's perfect counterpart"
          fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        />
      </div>

      <div className="grid md:grid-cols-2 mt-10">
        <div>
          <div className="text-justify">
            <Description text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. " />
          </div>
          <div className="mt-10 flex gap-5 max-md:justify-center">
            <SecondaryButton
              label="Learn More"
              fontSize="text-md md:text-sm lg:text-lg"
              height="py-0 md:py-0 lg:px-5"
              width="px-2 md:px-2 lg:px-5"
              radius="rounded-md"
            />
            <PrimaryButton
              label="Register"
              fontSize="text-md md:text-sm lg:text-lg"
              height="py-0 md:py-0 lg:px-5"
              width="px-2 md:px-2 lg:px-10"
              radius="rounded-md"
            />
          </div>
        </div>
        <div className="relative flex justify-center h-auto w-auto max-md:hidden">
          <Image
            src="/images/DoubleImages.png"
            alt="Double Images"
            width={400}
            height={400}
            className="min-lg:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageSection1;
