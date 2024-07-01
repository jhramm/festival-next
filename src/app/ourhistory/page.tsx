"use client";
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import GroupSingers from "../../../public/images/group-singers.webp";
import SingingMic from "../../../public/images/singing-with-mic.webp";
import Piano from "../../../public/images/Image by Siniz Kim.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function OurHistory() {
  return (
    <div
      className="flex flex-col items-center text-center pb-[40px] my-[30px] mx-0"
      id="about"
    >
      {/* Carousel Start */}
      <div className="w-[100%] h-[100%] p-[30px] object-cover">
        <Swiper
          cssMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={GroupSingers}
              alt="Group Singers"
              className="w-[100%] h-[600px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={SingingMic}
              alt="Women with mic"
              className="w-[100%] h-[600px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Piano} alt="Piano" className="w-[100%] h-[600px]" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Carousel End */}
      <h2 className="text-[50px] my-[40px] mx-0 text-[#2dbfb2]">Our History</h2>
      <p className="text-[20px] py-0 px-[30px] mb-[30px]">
        The Stratford & East London Music Festival was founded in 1882, making
        it the UK’s oldest music and drama festival. It has continued to grow in
        popularity since that time. Our festival is affiliated with the British
        and International Federation of Festivals for Music, Dance and Speech
        (BIFF). Many musicians and actors can trace the start of their careers
        from success at the Stratford & East London Music Festival. These
        include Jonathan Antoine, one half of ‘Jonathan and Charlotte’, who were
        runners-up in Britain’s Got Talent in 2012 (losing out to dancing dog
        act ‘Ashleigh and Pudsey’) and Charlotte Barbour-Condini, who reached
        the final of the BBC Young Musician of the Year in 2012. The Stratford &
        East London Music Festival usually runs across two weeks in February.
      </p>
    </div>
  );
}
