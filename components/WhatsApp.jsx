import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsApp = () => {
  return (
    <div className=" hover:opacity-80 duration-300  fixed bottom-10 right-5 z-10 ">
      <Link target="_blank" href="https://api.whatsapp.com/send?phone=966570002013" passHref>
        <div rel="noopener noreferrer">
          <Image
            className="w-[50] h-[50] max-sm:w-[40] max-sm:h-[40] "
            src="/sep/whatsApp.png"
            width={50}
            height={50}
            alt="WhatsApp"
          />
        </div>
      </Link>
    </div>
  );
};

export default WhatsApp;
