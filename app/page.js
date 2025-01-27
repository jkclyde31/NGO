import Banner from "@/app/sections/Banner";
import AboutUs from "./sections/AboutUs";
import WhatWeDo from "./sections/WhatWeDo";

export const metadata = {
  title: "Homepage"
}

export default function Home() {
  return (
    <div className="">
      <Banner />
      <AboutUs />
      <WhatWeDo />
    </div>
  );
}
