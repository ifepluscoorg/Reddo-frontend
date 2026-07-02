import CommunitySection from "../components/CommunitySection";
import { CountdownSection } from "../components/CountdownSection";
import FeaturesSection from "../components/FeaturesSection";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import MoreThanDeskSection from "../components/MoreThanDeskSection";
import NewsletterSection from "../components/NewsletterSection";
import SpacesSection from "../components/SpaceSection";
import TestimonialsSection from "../components/TestimonialsSection";

function page() {
  return (
    <div>
      <HeroSection />
      {/* <FeaturesSection /> */}
      <SpacesSection />
      <MoreThanDeskSection />
      <MapSection />
      <CommunitySection />
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}

export default page;
