import { useState, useEffect } from "react";
import {
  ArrowRight,
  Star,
  Zap,
  Settings,
  Shield,
  Car,
  Truck,
  Bike,
  X,
  Eye,
} from "lucide-react";
import { vehicles } from "../../data/vehicles";

export default function CollectionSection() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Function to get appropriate icon based on vehicle type
  const getVehicleIcon = (vehicleName) => {
    const name = vehicleName.toLowerCase();
    if (name.includes("sedan") || name.includes("luxury"))
      return <Car className="w-8 h-8" />;
    if (name.includes("suv") || name.includes("crossover"))
      return <Truck className="w-8 h-8" />;
    if (name.includes("sport") || name.includes("coupe"))
      return <Bike className="w-8 h-8" />;
    return <Car className="w-8 h-8" />;
  };

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
  };

  // Show only 3 vehicles on mobile for better performance
  const displayedVehicles = isMobile ? vehicles.slice(0, 3) : vehicles;

  return (
    <section
      id="collection"
      className="min-h-screen bg-[#202020] text-white py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-px bg-[#ffee32]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-none">
            COLLECTION
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light tracking-wide max-w-4xl mx-auto leading-relaxed px-4">
            Discover our range of luxury vehicles, each crafted with precision
            engineering and timeless design principles.
          </p>
        </div>

        {/* Vehicles List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {displayedVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative bg-white/5 p-8 sm:p-12 rounded-lg border border-[#ffee32]/20 hover:border-[#ffee32]/40 transition-all duration-500 hover:bg-white/10 cursor-pointer"
              onClick={() => openModal(vehicle)}
            >
              {/* Vehicle Icon */}
              <div className="mb-6 sm:mb-8">
                <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto bg-[#ffee32]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ffee32]/30 transition-all duration-500">
                  <div className="text-[#ffee32] group-hover:scale-110 transition-transform duration-500">
                    {getVehicleIcon(vehicle.name)}
                  </div>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2 tracking-tight">
                  {vehicle.name}
                </h3>
                <div className="text-sm sm:text-base font-light text-[#ffee32]/80 tracking-wide uppercase mb-2">
                  {vehicle.subtitle}
                </div>
                <div className="text-lg sm:text-xl font-light text-[#ffee32] tracking-wide">
                  {vehicle.price}
                </div>
              </div>

              {/* Brief Description - Hidden on mobile */}
              <p className="hidden sm:block text-white/80 font-light leading-relaxed text-sm sm:text-base mb-6 sm:mb-8 line-clamp-3">
                {vehicle.description}
              </p>

              {/* Key Specs Preview - Hidden on mobile */}
              <div className="hidden sm:grid grid-cols-2 gap-4 mb-6 sm:mb-8">
                {vehicle.specifications.power && (
                  <div className="text-center">
                    <div className="text-sm text-[#ffee32]/80 font-light tracking-wide uppercase mb-1">
                      Power
                    </div>
                    <div className="text-white font-light text-sm">
                      {vehicle.specifications.power}
                    </div>
                  </div>
                )}
                {vehicle.specifications.acceleration && (
                  <div className="text-center">
                    <div className="text-sm text-[#ffee32]/80 font-light tracking-wide uppercase mb-1">
                      0-60
                    </div>
                    <div className="text-white font-light text-sm">
                      {vehicle.specifications.acceleration}
                    </div>
                  </div>
                )}
              </div>

              {/* View Details Button */}
              <div className="flex items-center justify-center">
                <button className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 border border-[#ffee32] text-[#ffee32] rounded-none hover:bg-[#ffee32] hover:text-[#202020] transition-all duration-500 overflow-hidden">
                  <span className="relative z-10 font-light tracking-wider uppercase text-sm flex items-center gap-2">
                    View Details
                    <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-[#ffee32] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-px bg-[#ffee32]/50"></div>
          </div>
          <button className="group relative px-8 sm:px-12 py-3 sm:py-4 border border-[#ffee32] text-[#ffee32] rounded-none hover:bg-[#ffee32] hover:text-[#202020] transition-all duration-500 overflow-hidden">
            <span className="relative z-10 font-light tracking-wider uppercase text-sm flex items-center gap-2">
              Explore All Models
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-[#ffee32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Vehicle Detail Modal */}
      {isModalOpen && selectedVehicle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8">
          <div className="bg-[#202020] text-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg border border-[#ffee32]/20">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-[#ffee32]/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ffee32]/20 rounded-full flex items-center justify-center">
                    <div className="text-[#ffee32]">
                      {getVehicleIcon(selectedVehicle.name)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                      {selectedVehicle.name}
                    </h3>
                    <div className="text-sm sm:text-base font-light text-[#ffee32]/80 tracking-wide uppercase">
                      {selectedVehicle.subtitle}
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="text-xl sm:text-2xl font-light text-[#ffee32] tracking-wide">
                {selectedVehicle.price}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Description */}
              <div className="mb-8 sm:mb-12">
                <p className="text-white/90 font-light leading-relaxed text-base sm:text-lg">
                  {selectedVehicle.description}
                </p>
              </div>

              {/* Specifications */}
              <div className="mb-8 sm:mb-12">
                <h4 className="text-lg sm:text-xl font-light text-[#ffee32] tracking-wider uppercase flex items-center gap-2 mb-6">
                  <Settings className="w-5 h-5" />
                  Specifications
                </h4>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {selectedVehicle.specifications.battery && (
                    <div className="bg-white/10 p-4 rounded-lg border border-[#ffee32]/20">
                      <div className="text-sm text-[#ffee32]/80 font-light tracking-wide uppercase mb-1">
                        Battery
                      </div>
                      <div className="text-white font-light">
                        {selectedVehicle.specifications.battery}
                      </div>
                    </div>
                  )}
                  {selectedVehicle.specifications.engine && (
                    <div className="bg-white/10 p-4 rounded-lg border border-[#ffee32]/20">
                      <div className="text-sm text-[#ffee32]/80 font-light tracking-wide uppercase mb-1">
                        Engine
                      </div>
                      <div className="text-white font-light">
                        {selectedVehicle.specifications.engine}
                      </div>
                    </div>
                  )}
                  <div className="bg-white/10 p-4 rounded-lg border border-[#ffee32]/20">
                    <div className="text-sm text-[#ffee32]/80 font-light tracking-wide uppercase mb-1">
                      Power
                    </div>
                    <div className="text-white font-light">
                      {selectedVehicle.specifications.power}
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-[#ffee32]/20">
                    <div className="text-sm text-[#ffee32]/80 font-light tracking-wide uppercase mb-1">
                      Acceleration
                    </div>
                    <div className="text-white font-light">
                      {selectedVehicle.specifications.acceleration}
                    </div>
                  </div>
                  {selectedVehicle.specifications.topSpeed && (
                    <div className="bg-white/10 p-4 rounded-lg border border-[#ffee32]/20">
                      <div className="text-sm text-[#ffee32]/80 font-light tracking-wide uppercase mb-1">
                        Top Speed
                      </div>
                      <div className="text-white font-light">
                        {selectedVehicle.specifications.topSpeed}
                      </div>
                    </div>
                  )}
                  {selectedVehicle.specifications.range && (
                    <div className="bg-white/10 p-4 rounded-lg border border-[#ffee32]/20">
                      <div className="text-sm text-[#ffee32]/80 font-light tracking-wide uppercase mb-1">
                        Range
                      </div>
                      <div className="text-white font-light">
                        {selectedVehicle.specifications.range}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8 sm:mb-12">
                <h4 className="text-lg sm:text-xl font-light text-[#ffee32] tracking-wider uppercase flex items-center gap-2 mb-6">
                  <Star className="w-5 h-5" />
                  Key Features
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedVehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#ffee32] rounded-full flex-shrink-0"></div>
                      <span className="text-white/90 font-light tracking-wide text-sm sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="group relative flex-1 px-8 sm:px-12 py-3 sm:py-4 bg-[#ffee32] text-[#202020] rounded-none hover:bg-[#ffd100] transition-all duration-500 overflow-hidden">
                  <span className="relative z-10 font-light tracking-wider uppercase text-sm flex items-center justify-center gap-2">
                    Configure {selectedVehicle.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-[#ffd100] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
                <button className="group relative flex-1 px-8 sm:px-12 py-3 sm:py-4 border border-[#ffee32] text-[#ffee32] rounded-none hover:bg-[#ffee32] hover:text-[#202020] transition-all duration-500 overflow-hidden">
                  <span className="relative z-10 font-light tracking-wider uppercase text-sm flex items-center justify-center gap-2">
                    Schedule Test Drive
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-[#ffee32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
