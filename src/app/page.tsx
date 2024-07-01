import Image from "next/image";
import Welcome from "./welcome/page";
import OurFestival from "./ourfestival/page";
import FollowUs from "./followus/page";
import Cards from "./cards/page";
import OurHistory from "./ourhistory/page";

export default function Home() {
  return (
   <div>
    <Welcome />
    <OurFestival />
    <OurHistory />
    <Cards />
    <FollowUs />
   </div>
  );
}
