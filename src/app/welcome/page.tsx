import React from 'react'
import Image from 'next/image';
import groupSinging from '../../../public/images/group-singing2.webp';

export default function Welcome() {
  return (
    <div className="welcome">
      <Image src={groupSinging} alt="Group singing" />
      <div className="welcome-text">
        <h2>Welcome</h2>
        <p>
          Founded in 1882, we are a competitive Music, Speech & Drama Festival
          held every February in East London.
        </p>
        <button type="button">More About Us</button>
      </div>
    </div>
  );
}
