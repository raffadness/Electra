import { ChevronDown, Play, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col bg-[#202020] items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle animated line above title */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-12 sm:w-16 h-px bg-[#ffee32]/50 animate-pulse"></div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white mb-4 sm:mb-6 tracking-tight leading-none">
          ELECTRA
        </h1>

        {/* Subtitle with elegant typography */}
        <div className="mb-8 sm:mb-12">
          <p className="text-base sm:text-lg md:text-xl text-[#ffee32]/90 font-light tracking-wide uppercase mb-2">
            Luxury Automotive
          </p>
          <p className="text-sm sm:text-base text-[#ffee32]/70 font-light tracking-wider">
            Since 1990
          </p>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-light mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Where precision engineering meets timeless elegance.
          <br className="hidden md:block" />
          Experience automotive excellence redefined.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <button className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-[#ffee32] text-[#202020] rounded-none hover:bg-[#ffd100] transition-all duration-500 overflow-hidden w-full sm:w-auto">
            <span className="relative z-10 font-light tracking-wider uppercase text-sm flex items-center justify-center gap-2">
              Discover Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-[#ffd100] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>

          <button className="group relative px-8 sm:px-12 py-3 sm:py-4 border border-[#ffee32] text-[#ffee32] rounded-none hover:bg-[#ffee32] hover:text-[#202020] transition-all duration-500 overflow-hidden w-full sm:w-auto">
            <span className="relative z-10 font-light tracking-wider uppercase text-sm flex items-center justify-center gap-2">
              Experience Electra
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-[#ffee32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#ffee32]/40 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#ffd100]/50 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-[#ffee32]/30 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#ffd100]/40 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
}
