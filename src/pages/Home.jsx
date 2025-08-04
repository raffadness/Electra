import {
  HeroSection,
  HeritageSection,
  ArtOfMakingSection,
  CollectionSection,
  PersonalizationSection,
  OwnersCircleSection,
  SustainabilitySection,
  PrivateInquirySection,
} from "../components/sections";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeritageSection />
      <ArtOfMakingSection />
      <CollectionSection />
      <PersonalizationSection />
      <OwnersCircleSection />
      <SustainabilitySection />
      <PrivateInquirySection />
    </div>
  );
}
