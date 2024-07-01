import React from 'react'
import Image from 'next/image';
import MScript from '../../../public/images/music-script.webp';
import GroupSinging from '../../../public/images/group-singing.webp';
import SingingMic from '../../../public/images/singing-with-mic.webp';
import OlderLady from '../../../public/images/older-lady.webp';


export default function Cards() {
  return (
    <div className="cards-container">
      <h2>Recent Posts</h2>
      <div className="cards">
        <div className="card">
          <Image src={MScript} alt="Music script" />
          <div className="post-content">
            <p>
              The Composition classes at the Stratford & East London Music
              Festival are a new innovation - they only started last year.
            </p>
            <button type="button">Read More</button>
          </div>
        </div>

        <div className="card">
          <Image src={GroupSinging} alt="Group singers" />
          <div className="post-content">
            <p>
              We had a fabulous day on Monday 5 February at our annual Choirs,
              Orchestras and Bands Day at St Mary’s Church in South Woodford.
            </p>
            <button type="button">Read More</button>
          </div>
        </div>
        <div className="card">
          <Image src={SingingMic} alt="Singing with microphone" />
          <div className="post-content">
            <p>
              Stratford & East London Music Festival celebrates 141 years of
              amazing live music and really great live performances.
            </p>
            <button type="button">Read More</button>
          </div>
        </div>
        <div className="card">
          <Image src={OlderLady} alt="Older lady" />
          <div className="post-content">
            <p className="lst-child">
              Stella Redburns report on the 2023 Festival highlights
              exceptional performances and the vibrant spirit of the event.
            </p>
            <button type="button">Read More</button>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button type="button">View More News</button>
      </div>
    </div>
  );
}
