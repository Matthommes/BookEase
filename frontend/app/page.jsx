import Link from "next/link";
import NavBar from "./components/nav";
import Hero from "./components/hero";
import Feature from "./components/feature";
import HowItWorks from "./components/works";

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
