import {
  Settings,
  Palette,
  Zap,
  Award,
  Clock,
  Users,
  Target,
  Sparkles,
} from "lucide-react";

export default function ArtOfMakingSection() {
  return (
    <section
      id="art-of-making"
      className="min-h-screen bg-[#202020] text-white py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-px bg-[#ffee32]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-none">
            ART OF MAKING
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light tracking-wide max-w-4xl mx-auto leading-relaxed px-4">
            Where craftsmanship meets innovation. Every Electra vehicle is a
            masterpiece of precision engineering and artistic vision.
          </p>
        </div>

        {/* Three Pillars Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
              Three Pillars of Excellence
            </h3>
            <p className="text-white/80 font-light tracking-wide max-w-2xl mx-auto">
              The foundation of our manufacturing philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* Precision Engineering */}
            <div className="text-center">
              <div className="mb-6 sm:mb-8">
                <div className="w-24 sm:w-32 h-24 sm:h-32 mx-auto border border-[#ffee32]/30 rounded-full flex items-center justify-center mb-6">
                  <div className="w-12 sm:w-16 h-px bg-[#ffee32]/60 rotate-45"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-4 sm:mb-6 tracking-wide">
                Precision Engineering
              </h3>
              <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg">
                Every component is meticulously designed and tested to ensure
                the highest standards of performance and reliability, where form
                follows function with mathematical precision.
              </p>
            </div>

            {/* Timeless Design */}
            <div className="text-center">
              <div className="mb-6 sm:mb-8">
                <div className="w-24 sm:w-32 h-24 sm:h-32 mx-auto border border-[#ffee32]/30 rounded-full flex items-center justify-center mb-6">
                  <div className="w-12 sm:w-16 h-px bg-[#ffee32]/60"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-4 sm:mb-6 tracking-wide">
                Timeless Design
              </h3>
              <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg">
                Our design philosophy transcends trends, creating vehicles that
                remain beautiful and relevant for generations, embodying the
                perfect balance of elegance and functionality.
              </p>
            </div>

            {/* Sustainable Innovation */}
            <div className="text-center">
              <div className="mb-6 sm:mb-8">
                <div className="w-24 sm:w-32 h-24 sm:h-32 mx-auto border border-[#ffee32]/30 rounded-full flex items-center justify-center mb-6">
                  <div className="w-12 sm:w-16 h-px bg-[#ffee32]/60 -rotate-45"></div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-4 sm:mb-6 tracking-wide">
                Sustainable Innovation
              </h3>
              <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg">
                Pushing the boundaries of technology while respecting our
                environment, we create vehicles that are both cutting-edge and
                environmentally responsible.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white/5 text-white py-16 sm:py-20 lg:py-24 mb-20 sm:mb-24 lg:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                The Manufacturing Process
              </h3>
              <p className="text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                From concept to creation, every step is carefully orchestrated
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
                  Design & Concept
                </h4>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  Every vehicle begins with a vision, refined through countless
                  iterations until perfection is achieved.
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
                  Engineering
                </h4>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  Advanced engineering ensures that every component works in
                  perfect harmony with the overall design.
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
                  Craftsmanship
                </h4>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  Skilled artisans bring the design to life, using traditional
                  techniques combined with modern technology.
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
                  Quality Assurance
                </h4>
                <p className="text-white/80 font-light text-sm sm:text-base">
                  Rigorous testing ensures that every Electra vehicle meets our
                  exacting standards before delivery.
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
                <div className="w-16 sm:w-24 h-px bg-[#ffee32]/60"></div>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6 sm:mb-8 tracking-wide">
              The Art of Perfection
            </h3>
            <p className="text-white/80 font-light leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto px-4">
              "We don't just build cars; we create experiences. Every Electra
              vehicle is a testament to the belief that true luxury lies in the
              details, the craftsmanship, and the passion that goes into every
              component."
            </p>
            <div className="mt-8 sm:mt-12">
              <div className="text-white/60 font-light tracking-wider uppercase text-sm">
                — Electra Master Craftsmen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
