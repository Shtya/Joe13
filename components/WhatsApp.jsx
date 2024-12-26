import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsApp = () => {
  return (
    <div className="whats">
      <Link href="https://api.whatsapp.com/send?phone=966570002013" passHref>
        <div target="_blank" rel="noopener noreferrer">
          <Image
            src="/sep/whatsApp.png"
            width={60}
            height={60}
            alt="WhatsApp"
          />
        </div>
      </Link>
    </div>
  );
};

export default WhatsApp;
