import Hero from "./components/Hero";
import Layout3 from "./components/Layout3";
import Projects from "./components/ProjectsSection";
import SecondHomeSection from "./components/SecondHomeSection";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <SecondHomeSection />
      <Projects />
      <Layout3 />
    </div>
  );
}
