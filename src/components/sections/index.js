import { lazy } from "react";

export const HeroSection = lazy(() => import("./HeroSection"));
export const HeritageSection = lazy(() => import("./HeritageSection"));
export const ArtOfMakingSection = lazy(() => import("./ArtOfMakingSection"));
export const CollectionSection = lazy(() => import("./CollectionSection"));
export const PersonalizationSection = lazy(() =>
  import("./PersonalizationSection")
);
export const OwnersCircleSection = lazy(() => import("./OwnersCircleSection"));
export const SustainabilitySection = lazy(() =>
  import("./SustainabilitySection")
);
export const PrivateInquirySection = lazy(() =>
  import("./PrivateInquirySection")
);
