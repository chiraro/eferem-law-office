import Image from "next/image";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import PracticeAreas from "./PracticeAreas";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative">
        <Hero />
        <AboutUs />
        <PracticeAreas />
    </div>
)}
