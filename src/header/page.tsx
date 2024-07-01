import React from 'react'
import Image from "next/image";
import Hero from '../../public/images/boys-with-violin.webp';
import CountdownTimer from '../app/countdown/page';

export default function Header() {
  return (
     <>
      <div className="hero">
        <Image src={Hero} alt="Boys with violin" className='z-[5]'/>
        <div className="hero-content">
          <h1>Registration for our 2024 festival is now closed</h1>
          <div>
            <button type="button">Latest Updates</button>
          </div>
          <div className="countdown" id="countdown"><CountdownTimer /></div>
        </div>
      </div>
    </>
  )
}
