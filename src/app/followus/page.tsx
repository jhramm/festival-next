import React from 'react'
import Image from "next/image";
import Facebook from '../../../public/images/Facebook.webp';
import Instagram from '../../../public/images/insta-black.webp';
import Twitter from '../../../public/images/twitter-black.webp';
import Linkedin from '../../../public/images/linkedin-black.webp';

export default function FollowUs() {
  return (
    <div className="flex flex-col items-center my-[70px] mx-[10px]">
      <h2 className="text-[50px] text-[#2dbfb2] mb-[20px] pl-[15px]">
        Follow Us
      </h2>

      <ul className="flex list-none">
        <li>
          <Image
            src={Facebook}
            alt="Facebook icon"
            className="w-[40px] mr-[12px]"
          />
        </li>
        <li>
          <Image
            src={Instagram}
            alt="Instagram icon"
            className="w-[40px] mr-[12px]"
          />
        </li>
        <li>
          <Image
            src={Twitter}
            alt="Twitter icon"
            className="w-[40px] mr-[12px]"
          />
        </li>
        <li>
          <Image
            src={Linkedin}
            alt="LinkedIn icon"
            className="w-[40px] mr-[12px]"
          />
        </li>
      </ul>
    </div>
  );
}
