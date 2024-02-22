"use client";

import MiniForm from "../../form/Form";
import Image from "next/image";

const ContactSection1 = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen max-sm:p-1 md:p-10 lg:p-20 xl:p-24">
      <Image
        src="/images/ContactBackground.png"
        alt="Your alt text"
        width={100}
        height={100}
      />
      <div className="w-[100%]">
        <MiniForm />
      </div>
    </div>
  );
};

export default ContactSection1;
