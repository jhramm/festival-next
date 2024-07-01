import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import biffLogo from '../../public/images/BIFF logo_prev_ui.webp';
import FaceBook from '../../public/images/Facebook (1).webp';
import Instagram from '../../public/images/insta-white.webp';
import Twitter from '../../public/images/twitter-white.webp';
import Linkedin from '../../public/images/linkedin-white.webp';
import { FaAngleDoubleUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <h3>Subscribe For Updates</h3>
      <input
        type="text"
        placeholder="Email Address"
        className="py-[20px] text-[20px] mb-[20px] text-center"
      />
      <button type="button" className="py-[20px] text-[20px]">
        Submit
      </button>
      <div className="footer-image">
        <Image src={biffLogo} alt="BIFF Logo" />
      </div>
      <ul>
        <li>
          <Link href="#">Rules & Regulations</Link>
        </li>
        <li>
          <Link href="#">Child Protection Policy</Link>
        </li>
        <li>
          <Link href="#">Safety Policy</Link>
        </li>
        <li>
          <Link href="#">Privacy Policy</Link>
        </li>
      </ul>
      <ul className="footer-new-icons">
        <li>
          <Link href="#">
            <Image src={FaceBook} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src={Instagram} alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src={Twitter} alt="Twitter" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src={Linkedin} alt="LinkedIn" />
          </Link>
        </li>
      </ul>
      <p>Registered Charity No. 208659</p>
      <div className="to-top z-[20]">
        <a href="#to-top">
          <FaAngleDoubleUp className="text-[20px]" />
        </a>
      </div>
    </div>
  );
}
