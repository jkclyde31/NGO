import Banner from "@/app/sections/Banner";
import AboutUs from "./sections/AboutUs";
import WhatWeDo from "./sections/WhatWeDo";
import ProjectsSection from "./sections/Projects";
import ChartSection from "./sections/ChartSection";

export const metadata = {
  title: "Homepage"
}

export default function Home() {
  return (
    <div className="">
      <Banner />
      <AboutUs />
      <WhatWeDo />
      <ProjectsSection />
      <ChartSection />

    </div>
  );
}
