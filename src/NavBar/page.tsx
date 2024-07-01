"use client";
import React, { useState } from 'react'
import Image from "next/image";
import Header from '@/header/page'
import Link from 'next/link';
import Logo from '../../public/images/selmf-primary-logo-rgb.webp';
import facebook from '../../public/images/Facebook.webp';
import instagram from '../../public/images/insta-black.webp';
import twitter from '../../public/images/twitter-black.webp';
import linkedin from '../../public/images/linkedin-black.webp';


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div id="to-top">
        <div id="page-top">
          <nav className="navbar">
            <div className="logo">
              <Link href="/">
                <Image src={Logo} alt="Stratford Music Festival Logo" />
              </Link>
            </div>
            <div>
              <div className="social-icons-top">
                <Link href="#">
                  <Image src={facebook} alt="Facebook" />
                </Link>
                <Link href="#">
                  <Image src={instagram} alt="Instagram" />
                </Link>
                <Link href="#">
                  <Image src={twitter} alt="Twitter" />
                </Link>
                <Link href="#">
                  <Image src={linkedin} alt="LinkedIn" />
                </Link>
              </div>
              <div className="menu">
                <Link href="/">Home</Link>
                <a href="#about">About Us</a>
                <Link href="#">The 2024 Festival</Link>
                <Link href="#">Get Involved</Link>
                <Link href="#">FAQs</Link>
                <Link href="#">News</Link>
                <Link href="#">Contact Us</Link>
              </div>
            </div>
            <div className="hamburger" id="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>

          <div
            className={`mobile-menu ${menuOpen ? "open" : ""}`}
            id="mobile-menu"
          >
            <div className="social-icons-top-mobile">
              <Link href="#">
                <Image src={facebook} alt="Facebook" />
              </Link>
              <Link href="#">
                <Image src={instagram} alt="Instagram" />
              </Link>
              <Link href="#">
                <Image src={twitter} alt="Twitter" />
              </Link>
              <Link href="#">
                <Image src={linkedin} alt="LinkedIn" />
              </Link>
            </div>
            <Link href="/">Home</Link>
            <a href="#about">About Us</a>
            <Link href="#">The 2024 Festival</Link>
            <Link href="#">Get Involved</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">News</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
      </div>
      <Header />
    </>
  );
}
