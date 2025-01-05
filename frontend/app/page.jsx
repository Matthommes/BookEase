import Link from "next/link";
import NavBar from "./components/nav";
import Hero from "./components/hero";
import dynamic from "next/dynamic";

const Feature = dynamic(() => import("./components/feature"));
const HowItWorks = dynamic(() => import("./components/works"));

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Feature />
      <HowItWorks/>
    </main>
  );
}
