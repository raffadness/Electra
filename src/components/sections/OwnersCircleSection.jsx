import { useState } from "react";
import {
  Users,
  Trophy,
  Heart,
  Shield,
  Star,
  ArrowRight,
  Crown,
  Sparkles,
} from "lucide-react";

export default function OwnersCircleSection() {
  const [activeBenefit, setActiveBenefit] = useState(0);

  const benefits = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Exclusive Events",
      description:
        "Access to private gatherings, product launches, and exclusive automotive experiences.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Concierge",
      description:
        "Dedicated support team providing personalized assistance for all your needs.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Extended Warranty",
      description:
        "Comprehensive coverage and peace of mind with our premium warranty program.",
    },
  ];

  const membershipTiers = [
    {
      name: "Silver",
      price: "$5,000",
      subtitle: "Entry Level",
      features: [
        "Priority Service Scheduling",
        "Exclusive Newsletter",
        "Member Events Access",
        "Extended Warranty",
      ],
    },
    {
      name: "Gold",
      price: "$15,000",
      subtitle: "Premium",
      features: [
        "All Silver Benefits",
        "Personal Concierge",
        "VIP Event Access",
        "Custom Vehicle Tours",
        "Priority Parts Access",
      ],
      recommended: true,
    },
    {
      name: "Platinum",
      price: "$50,000",
      subtitle: "Ultimate",
      features: [
        "All Gold Benefits",
        "Factory Tours",
        "Designer Consultations",
        "Exclusive Test Drives",
        "Limited Edition Access",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section
      id="owners-circle"
      className="min-h-screen bg-[#202020] text-white py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-px bg-[#ffee32]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-none">
            OWNERS CIRCLE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light tracking-wide max-w-4xl mx-auto leading-relaxed px-4">
            Join an exclusive community of Electra enthusiasts. Experience
            luxury beyond ownership with our comprehensive membership program.
          </p>
        </div>

        {/* Interactive Benefits Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
              Exclusive Benefits
            </h3>
            <p className="text-white/80 font-light tracking-wide max-w-2xl mx-auto">
              Discover the privileges that come with Electra ownership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center p-8 sm:p-12 rounded-lg border transition-all duration-500 cursor-pointer ${
                  activeBenefit === index
                    ? "bg-[#ffee32]/10 border-[#ffee32]/40"
                    : "bg-white/5 border-white/20 hover:border-[#ffee32]/30"
                }`}
                onClick={() => setActiveBenefit(index)}
              >
                <div className="mb-6 sm:mb-8">
                  <div
                    className={`w-20 sm:w-24 h-20 sm:h-24 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                      activeBenefit === index
                        ? "bg-[#ffee32] text-[#202020]"
                        : "bg-white/10 text-[#ffee32]"
                    }`}
                  >
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-xl sm:text-2xl font-light text-white mb-4 tracking-wide">
                  {benefit.title}
                </h4>
                <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ffee32]/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#ffd100]/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-[#ffee32]/30 rounded-full animate-pulse delay-500"></div>

        {/* Membership Tiers Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
              Membership Tiers
            </h3>
            <p className="text-white/80 font-light tracking-wide max-w-2xl mx-auto">
              Choose the level of exclusivity that matches your lifestyle
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-8 sm:p-12 rounded-lg border transition-all duration-500 ${
                  tier.recommended
                    ? "bg-[#ffee32]/5 border-[#ffee32]/30"
                    : "bg-white/5 border-white/20"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#ffee32] text-[#202020] px-4 py-2 rounded-full text-xs font-light tracking-wider uppercase">
                      Recommended
                    </div>
                  </div>
                )}

                <div className="text-center mb-8 sm:mb-12">
                  <h4 className="text-2xl sm:text-3xl font-light text-white mb-2 tracking-wide">
                    {tier.name}
                  </h4>
                  <div className="text-lg sm:text-xl text-[#ffee32] font-light mb-2">
                    {tier.price}
                  </div>
                  <div className="text-sm text-white/60 font-light tracking-wider uppercase">
                    {tier.subtitle}
                  </div>
                </div>

                <div className="space-y-4 mb-8 sm:mb-12">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#ffee32] rounded-full flex-shrink-0"></div>
                      <span className="text-white/90 font-light tracking-wide text-sm sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="group relative w-full px-6 sm:px-8 py-3 sm:py-4 border border-[#ffee32] text-[#ffee32] rounded-none hover:bg-[#ffee32] hover:text-[#202020] transition-all duration-500 overflow-hidden">
                  <span className="relative z-10 font-light tracking-wider uppercase text-sm flex items-center justify-center gap-2">
                    Join {tier.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-[#ffee32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-white/5 backdrop-blur-sm p-8 sm:p-12 rounded-lg mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
              Our Community
            </h3>
            <p className="text-white/80 font-light tracking-wide max-w-2xl mx-auto">
              Join thousands of satisfied Electra owners worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-[#ffee32] mb-2">
                15,000+
              </div>
              <div className="text-white/70 font-light tracking-wide uppercase text-sm">
                Active Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-[#ffee32] mb-2">
                50+
              </div>
              <div className="text-white/70 font-light tracking-wide uppercase text-sm">
                Countries
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-[#ffee32] mb-2">
                200+
              </div>
              <div className="text-white/70 font-light tracking-wide uppercase text-sm">
                Events Yearly
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-[#ffee32] mb-2">
                98%
              </div>
              <div className="text-white/70 font-light tracking-wide uppercase text-sm">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <div className="w-32 sm:w-48 h-32 sm:h-48 mx-auto border border-[#ffee32]/30 rounded-full flex items-center justify-center mb-8">
                <Crown className="w-16 sm:w-24 h-16 sm:h-24 text-[#ffee32]/60" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 sm:mb-8 tracking-wide">
              Beyond Ownership
            </h3>
            <p className="text-white/80 font-light leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto px-4">
              "The Electra Owners Circle is more than a membership program; it's
              a community of passionate individuals who share our vision of
              automotive excellence. Together, we celebrate the art of driving
              and the pursuit of perfection."
            </p>
            <div className="mt-8 sm:mt-12">
              <div className="text-white/60 font-light tracking-wider uppercase text-sm">
                — Electra Community Director
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
