import Contact from "./sections/contact";
import Features from "./sections/features";
import { Hero } from "./sections/hero";
import Stats from "./sections/stats";
import Testimonials from "./sections/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Contact />
    </div>
  );
}
