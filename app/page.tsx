import Benchmarks from "./sections/benchmarks";
import { Hero } from "./sections/hero";
import HowItWorks from "./sections/how-it-works";
import Testimonials from "./sections/testimonials";
import DoorCta from "./sections/door-cta";
import PerformanceMetrics from "./sections/performance-metrics";
import FadeIn from "./components/fade-in";
import Footer from "./components/footer";
import StripeLayoutWrapper from "./components/StripeLayoutWrapper";
import StripeSectionWrapper from "./components/StripeSectionWrapper";

import { META_DESCRIPTION } from "./config/constants";
import PitchBanner from "./sections/pitch-banner";
import AppPanels from "./sections/app-panels";
//

export const metadata = {
  description: META_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <StripeSectionWrapper>
        <PitchBanner />
        <AppPanels />
      </StripeSectionWrapper>
      <StripeLayoutWrapper>
        <FadeIn>
          <HowItWorks />
        </FadeIn>
        <FadeIn>
          <Testimonials />
        </FadeIn>
        <FadeIn>
          <Benchmarks />
        </FadeIn>
        <PerformanceMetrics />
        <FadeIn>
          <DoorCta />
        </FadeIn>
        <Footer />
      </StripeLayoutWrapper>
    </main>
  );
}
