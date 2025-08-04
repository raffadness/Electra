import { Building2, Clock, Award, Users } from "lucide-react";

export default function HeritageSection() {
  return (
    <section
      id="heritage"
      className="min-h-screen bg-[#202020] text-white py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-px bg-[#ffee32]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-none">
            HERITAGE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light tracking-wide max-w-4xl mx-auto leading-relaxed px-4">
            Three decades of automotive excellence, where tradition meets
            innovation in perfect harmony.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Timeline */}
          <div className="space-y-12 sm:space-y-16">
            {/* 1990s */}
            <div className="relative">
              <div className="flex items-start gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 sm:w-16 h-px bg-[#ffee32]/60 mt-4"></div>
                  <div className="text-xs sm:text-sm font-light text-white/60 tracking-wider uppercase mt-2">
                    1990 - 1999
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4 tracking-wide">
                    The Foundation
                  </h3>
                  <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg">
                    Electra was born from a vision to redefine luxury
                    automotive. Our founders established the principles of
                    precision engineering and timeless design that continue to
                    guide us today.
                  </p>
                </div>
              </div>
            </div>

            {/* 2000s */}
            <div className="relative">
              <div className="flex items-start gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 sm:w-16 h-px bg-[#ffee32]/60 mt-4"></div>
                  <div className="text-xs sm:text-sm font-light text-white/60 tracking-wider uppercase mt-2">
                    2000 - 2009
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4 tracking-wide">
                    Innovation Era
                  </h3>
                  <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg">
                    Pioneering hybrid technology and sustainable luxury, we set
                    new standards for environmental responsibility while
                    maintaining the uncompromising quality our clients expect.
                  </p>
                </div>
              </div>
            </div>

            {/* 2010s */}
            <div className="relative">
              <div className="flex items-start gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 sm:w-16 h-px bg-[#ffee32]/60 mt-4"></div>
                  <div className="text-xs sm:text-sm font-light text-white/60 tracking-wider uppercase mt-2">
                    2010 - 2019
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4 tracking-wide">
                    Digital Revolution
                  </h3>
                  <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg">
                    Embracing the digital age with cutting-edge connectivity and
                    autonomous driving features, while preserving the
                    craftsmanship that defines our heritage.
                  </p>
                </div>
              </div>
            </div>

            {/* 2020s */}
            <div className="relative">
              <div className="flex items-start gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 sm:w-16 h-px bg-[#ffee32]/60 mt-4"></div>
                  <div className="text-xs sm:text-sm font-light text-white/60 tracking-wider uppercase mt-2">
                    2020 - Present
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4 tracking-wide">
                    Future Forward
                  </h3>
                  <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg">
                    Leading the charge toward a sustainable future with electric
                    vehicles that combine zero emissions with uncompromising
                    luxury and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Statistics */}
          <div className="space-y-12 sm:space-y-16">
            {/* Key Numbers */}
            <div className="space-y-8 sm:space-y-12">
              <div className="border-l-2 border-[#ffee32]/40 pl-6 sm:pl-8">
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-2 tracking-tight">
                  30+
                </div>
                <div className="text-white/70 font-light tracking-wide uppercase text-sm">
                  Years of Excellence
                </div>
              </div>

              <div className="border-l-2 border-[#ffee32]/40 pl-6 sm:pl-8">
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-2 tracking-tight">
                  50,000+
                </div>
                <div className="text-white/70 font-light tracking-wide uppercase text-sm">
                  Vehicles Produced
                </div>
              </div>

              <div className="border-l-2 border-[#ffee32]/40 pl-6 sm:pl-8">
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-2 tracking-tight">
                  100%
                </div>
                <div className="text-white/70 font-light tracking-wide uppercase text-sm">
                  Handcrafted Quality
                </div>
              </div>
            </div>

            {/* Philosophy Statement */}
            <div className="bg-[#ffee32]/5 backdrop-blur-sm p-8 sm:p-12 border border-[#ffee32]/20 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-[#ffee32]/70" />
                <h4 className="text-lg sm:text-xl font-light text-white tracking-wide">
                  Our Philosophy
                </h4>
              </div>
              <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg mb-6">
                "We believe that true luxury is not merely about opulence, but
                about the perfect harmony of form, function, and innovation.
                Every Electra vehicle is a testament to this philosophy."
              </p>
              <div className="pt-6 border-t border-[#ffee32]/20">
                <div className="text-white/60 font-light tracking-wider uppercase text-sm">
                  — Electra Design Team
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-px bg-[#ffee32]/50"></div>
          </div>
          <button className="group relative px-8 sm:px-12 py-3 sm:py-4 border border-[#ffee32] text-[#ffee32] rounded-none hover:bg-[#ffee32] hover:text-[#202020] transition-all duration-500 overflow-hidden">
            <span className="relative z-10 font-light tracking-wider uppercase text-sm">
              Explore Our Legacy
            </span>
            <div className="absolute inset-0 bg-[#ffee32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
