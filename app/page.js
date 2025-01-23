import Banner from "@/app/sections/Banner";
import AboutUs from "./sections/AboutUs";

export const metadata = {
  title: "Homepage"
}

export default function Home() {
  return (
    <div className="">
      <Banner />
      <AboutUs />
    </div>
  );
}
