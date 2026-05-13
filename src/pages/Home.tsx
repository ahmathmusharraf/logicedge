import Hero from "../components/Hero";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Premium Digital Experiences" 
        description="Logic Edge is a premier digital agency specializing in precision-built UI/UX design and high-performance web development."
      />
      <Hero />
      <Services />
      <Showcase />
      <Process />
      <Testimonials />
    </>
  );
}
