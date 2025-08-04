import { useState } from "react";
import {
  Palette,
  Settings,
  Zap,
  Car,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";

export default function PersonalizationSection() {
  const [activeTab, setActiveTab] = useState("exterior");

  const personalizationOptions = {
    exterior: {
      title: "Exterior Personalization",
      subtitle: "Exterior",
      description:
        "Transform your Electra's appearance with our extensive range of exterior customization options, from paint finishes to aerodynamic enhancements.",
      options: [
        {
          count: "500+",
          name: "Paint Finishes",
          detail: "Exclusive colors and finishes",
        },
        {
          count: "50+",
          name: "Wheel Designs",
          detail: "Custom alloy and forged wheels",
        },
        { count: "25+", name: "Body Kits", detail: "Aerodynamic enhancements" },
        {
          count: "100+",
          name: "Badge Options",
          detail: "Personalized branding elements",
        },
      ],
    },
    interior: {
      title: "Interior Craftsmanship",
      subtitle: "Interior",
      description:
        "Create your perfect sanctuary with our bespoke interior options, featuring the finest materials and personalized comfort features.",
      options: [
        {
          count: "200+",
          name: "Leather Options",
          detail: "Premium hides and textures",
        },
        {
          count: "50+",
          name: "Stitching Patterns",
          detail: "Custom embroidery and patterns",
        },
        {
          count: "30+",
          name: "Trim Materials",
          detail: "Wood, carbon fiber, and metals",
        },
        {
          count: "75+",
          name: "Ambient Lighting",
          detail: "Personalized mood lighting",
        },
      ],
    },
    performance: {
      title: "Performance Enhancement",
      subtitle: "Performance",
      description:
        "Elevate your driving experience with our performance customization options, designed to match your driving style and preferences.",
      options: [
        {
          count: "15+",
          name: "Suspension Setups",
          detail: "Custom ride characteristics",
        },
        {
          count: "20+",
          name: "Exhaust Systems",
          detail: "Signature sound profiles",
        },
        {
          count: "10+",
          name: "Brake Packages",
          detail: "Enhanced stopping power",
        },
        {
          count: "25+",
          name: "ECU Tuning",
          detail: "Optimized engine performance",
        },
      ],
    },
  };

  return (
    <section
      id="personalization"
      className="min-h-screen bg-[#202020] text-white py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-px bg-[#ffee32]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-none">
            PERSONALIZATION
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light tracking-wide max-w-4xl mx-auto leading-relaxed px-4">
            Your Electra, your way. Every detail can be tailored to reflect your
            unique vision and preferences.
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="flex bg-[#ffee32]/10 p-2 rounded-lg">
            {Object.keys(personalizationOptions).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 sm:px-8 py-3 text-sm font-light tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#ffee32] text-[#202020] rounded-md"
                    : "text-white/70 hover:text-white/90"
                }`}
              >
                {personalizationOptions[tab].subtitle}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 sm:mb-6 tracking-tight">
              {personalizationOptions[activeTab].title}
            </h3>
            <p className="text-lg sm:text-xl text-white/80 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-4">
              {personalizationOptions[activeTab].description}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {personalizationOptions[activeTab].options.map((option, index) => (
              <div
                key={index}
                className="group relative bg-[#ffee32]/5 p-6 sm:p-8 rounded-lg border border-[#ffee32]/20 hover:border-[#ffee32]/40 transition-all duration-500 hover:bg-[#ffee32]/10"
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl font-light text-white mb-2">
                    {option.count}
                  </div>
                  <div className="w-8 sm:w-12 h-px bg-[#ffee32]/60 group-hover:bg-[#ffee32]/80 transition-colors duration-300"></div>
                </div>
                <h4 className="text-base sm:text-lg font-light text-white mb-2 tracking-wide">
                  {option.name}
                </h4>
                <p className="text-sm text-white/70 font-light tracking-wide">
                  {option.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bespoke Process Section */}
        <div className="bg-white/5 text-white py-16 sm:py-20 lg:py-24 mb-16 sm:mb-20 lg:mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                The Bespoke Process
              </h3>
              <p className="text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                A collaborative journey to create your perfect Electra
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl sm:text-3xl font-light text-[#ffee32]">
                    01
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-light text-white mb-3 tracking-wide">
                  Consultation
                </h4>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  Meet with our personalization specialists to discuss your
                  vision and explore available options.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl sm:text-3xl font-light text-[#ffee32]">
                    02
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-light text-white mb-3 tracking-wide">
                  Design
                </h4>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  Our designers create detailed specifications and renderings of
                  your personalized vehicle.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl sm:text-3xl font-light text-[#ffee32]">
                    03
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-light text-white mb-3 tracking-wide">
                  Creation
                </h4>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  Skilled craftsmen bring your vision to life using the finest
                  materials and techniques.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl sm:text-3xl font-light text-[#ffee32]">
                    04
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-light text-white mb-3 tracking-wide">
                  Delivery
                </h4>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  Experience the moment when your perfectly personalized Electra
                  becomes reality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <div className="w-32 sm:w-48 h-32 sm:h-48 mx-auto border border-[#ffee32]/30 rounded-full flex items-center justify-center mb-8">
                <Sparkles className="w-16 sm:w-24 h-16 sm:h-24 text-[#ffee32]/60" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 sm:mb-8 tracking-wide">
              Beyond Customization
            </h3>
            <p className="text-white/80 font-light leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto px-4">
              "Personalization is not just about options; it's about creating a
              vehicle that becomes an extension of your personality, your
              lifestyle, and your aspirations. Every choice reflects who you
              are."
            </p>
            <div className="mt-8 sm:mt-12">
              <div className="text-white/60 font-light tracking-wider uppercase text-sm">
                — Electra Personalization Team
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-px bg-[#ffee32]/50"></div>
          </div>
          <button className="group relative px-8 sm:px-12 py-3 sm:py-4 border border-[#ffee32] text-[#ffee32] rounded-none hover:bg-[#ffee32] hover:text-[#202020] transition-all duration-500 overflow-hidden">
            <span className="relative z-10 font-light tracking-wider uppercase text-sm flex items-center gap-2">
              Begin Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-[#ffee32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
