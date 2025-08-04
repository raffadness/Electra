import { useState, useEffect } from "react";
import {
  Leaf,
  Zap,
  Recycle,
  Globe,
  ArrowRight,
  Target,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function SustainabilitySection() {
  const [currentMetric, setCurrentMetric] = useState(0);

  const sustainabilityMetrics = [
    {
      number: "100%",
      label: "Carbon Neutral",
      description: "All manufacturing processes are carbon neutral",
    },
    {
      number: "95%",
      label: "Recycled Materials",
      description: "Of materials used are recycled or sustainable",
    },
    {
      number: "0",
      label: "Emissions",
      description: "Zero emissions from our electric vehicles",
    },
    {
      number: "50%",
      label: "Energy Reduction",
      description: "Reduction in energy consumption since 2010",
    },
  ];

  const initiatives = [
    {
      title: "Green Manufacturing",
      description:
        "Our state-of-the-art facilities use renewable energy and sustainable practices.",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      title: "Electric Innovation",
      description:
        "Leading the transition to electric mobility with cutting-edge technology.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Circular Economy",
      description:
        "Implementing closed-loop systems for maximum resource efficiency.",
      icon: <Recycle className="w-6 h-6" />,
    },
    {
      title: "Global Impact",
      description:
        "Contributing to worldwide sustainability goals and initiatives.",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % sustainabilityMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sustainabilityMetrics.length]);

  return (
    <section
      id="sustainability"
      className="min-h-screen bg-[#202020] text-white py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-px bg-[#ffee32]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-none">
            SUSTAINABILITY
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light tracking-wide max-w-4xl mx-auto leading-relaxed px-4">
            Committed to a sustainable future. Our environmental responsibility
            drives every decision we make.
          </p>
        </div>

        {/* Dynamic Metrics Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
              Our Impact
            </h3>
            <p className="text-white/80 font-light tracking-wide max-w-2xl mx-auto">
              Real numbers that reflect our commitment to sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {sustainabilityMetrics.map((metric, index) => (
              <div
                key={index}
                className={`text-center p-6 sm:p-8 rounded-lg border transition-all duration-700 ${
                  index === currentMetric
                    ? "bg-[#ffee32]/10 text-white border-[#ffee32]/40"
                    : "bg-white/5 border-[#ffee32]/20"
                }`}
              >
                <div
                  className={`text-3xl sm:text-4xl md:text-5xl font-light mb-2 tracking-tight ${
                    index === currentMetric ? "text-white" : "text-white"
                  }`}
                >
                  {metric.number}
                </div>
                <div
                  className={`text-sm font-light tracking-wider uppercase mb-2 ${
                    index === currentMetric ? "text-white/80" : "text-white/70"
                  }`}
                >
                  {metric.label}
                </div>
                <div
                  className={`text-xs sm:text-sm font-light ${
                    index === currentMetric ? "text-white/70" : "text-white/60"
                  }`}
                >
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Journey */}
        <div className="bg-white/5 text-white py-16 sm:py-20 lg:py-24 mb-20 sm:mb-24 lg:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                Our Sustainability Journey
              </h3>
              <p className="text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                A comprehensive approach to environmental responsibility
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {initiatives.map((initiative, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6 sm:mb-8">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-6">
                      <div className="text-[#ffee32]">{initiative.icon}</div>
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-light text-white mb-3 tracking-wide">
                    {initiative.title}
                  </h4>
                  <p className="text-white/80 font-light text-sm sm:text-base">
                    {initiative.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 sm:p-12 rounded-lg border border-[#ffee32]/20">
            <div className="text-center mb-8 sm:mb-12">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#ffee32]" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                Innovation in Action
              </h3>
              <p className="text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                Pioneering sustainable technologies for the future of mobility
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-[#ffee32]" />
                </div>
                <h4 className="text-base font-light text-white mb-2 tracking-wide">
                  Green Energy
                </h4>
                <p className="text-white/70 font-light text-sm">
                  Solar-powered facilities
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#ffee32]" />
                </div>
                <h4 className="text-base font-light text-white mb-2 tracking-wide">
                  Battery Tech
                </h4>
                <p className="text-white/70 font-light text-sm">
                  Advanced energy storage
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-4">
                  <Recycle className="w-6 h-6 text-[#ffee32]" />
                </div>
                <h4 className="text-base font-light text-white mb-2 tracking-wide">
                  Material Recovery
                </h4>
                <p className="text-white/70 font-light text-sm">
                  Closed-loop recycling
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#ffee32]" />
                </div>
                <h4 className="text-base font-light text-white mb-2 tracking-wide">
                  Global Standards
                </h4>
                <p className="text-white/70 font-light text-sm">
                  International compliance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ffee32]/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#ffd100]/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-[#ffee32]/30 rounded-full animate-pulse delay-500"></div>

        {/* Philosophy Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <div className="w-32 sm:w-48 h-32 sm:h-48 mx-auto border border-[#ffee32]/30 rounded-full flex items-center justify-center mb-8">
                <Sparkles className="w-16 sm:w-24 h-16 sm:h-24 text-[#ffee32]/60" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 sm:mb-8 tracking-wide">
              A Greener Tomorrow
            </h3>
            <p className="text-white/80 font-light leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto px-4">
              "Sustainability is not just a goal; it's our responsibility. Every
              Electra vehicle represents our commitment to preserving the planet
              while delivering uncompromising luxury and performance."
            </p>
            <div className="mt-8 sm:mt-12">
              <div className="text-white/60 font-light tracking-wider uppercase text-sm">
                — Electra Sustainability Team
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
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-[#ffee32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
