import React from "react";
import TextField from "../common/inputs/Input";
import TextArea from "../common/inputs/TextArea";
import Title from "../common/texts/Title";
import PrimaryButton from "../common/buttons/PrimaryButton";
import Logo from "../common/logo/Logo";
import Image from "next/image";

const MiniForm = () => {
  return (
    <div className="flex justify-end items-center p-10">
      <div className="bg-cover bg-center bg-no-repeat lg:h-[50%] lg:w-[50%] p-10 md:h-auto md:w-auto sm:h-[100%] sm:w-[50%] sm:p-10 rounded-2xl relative">
        <Image
          src="/images/FormBg.png"
          alt="Your alt text"
          width={100}
          height={100}
          className="w-[100%]"
        />
        <div className="mb-2">
          <Logo />
        </div>
        <div className="mb-5">
          <Title
            text="Contact us"
            center={true}
            fontSize="text-3xl sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </div>
        <div className="flex flex-col gap-5">
          <TextField
            label="Username"
            type="text"
            id="name"
            width="w-[100%]"
            bgColor="bg-transparent"
          />
          <TextField
            label="Password"
            type="password"
            id="password"
            bgColor="bg-transparent"
          />
          <TextArea
            id="opinion"
            label="Your opinion"
            bgColor="bg-transparent"
          />
          <PrimaryButton
            label="Send"
            height="py-1"
            width="w-[full]"
            radius="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniForm;
