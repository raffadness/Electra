import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-[#202020] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 tracking-wide">
              ELECTRA
            </h3>
            <div className="w-12 sm:w-16 h-px bg-[#ffee32]/50 mb-6"></div>
            <p className="text-white/80 font-light leading-relaxed text-sm sm:text-base mb-6">
              Where precision engineering meets timeless elegance.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#ffee32]" />
                <span className="text-white/90 font-light tracking-wide text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ffee32]" />
                <span className="text-white/90 font-light tracking-wide text-sm">
                  info@electra.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#ffee32]" />
                <span className="text-white/90 font-light tracking-wide text-sm">
                  Electra Headquarters
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light text-white mb-4 tracking-wide">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="#collection"
                className="block text-white/80 font-light tracking-wide text-sm hover:text-[#ffee32] transition-colors duration-300"
              >
                Collection
              </a>
              <a
                href="#personalization"
                className="block text-white/80 font-light tracking-wide text-sm hover:text-[#ffee32] transition-colors duration-300"
              >
                Personalization
              </a>
              <a
                href="#owners-circle"
                className="block text-white/80 font-light tracking-wide text-sm hover:text-[#ffee32] transition-colors duration-300"
              >
                Owners Circle
              </a>
              <a
                href="#sustainability"
                className="block text-white/80 font-light tracking-wide text-sm hover:text-[#ffee32] transition-colors duration-300"
              >
                Sustainability
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-light text-white mb-4 tracking-wide">
              Stay Connected
            </h4>
            <p className="text-white/80 font-light text-sm mb-4">
              Subscribe for exclusive updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 font-light text-sm rounded-none focus:outline-none focus:border-[#ffee32] transition-colors duration-300"
              />
              <button className="px-4 py-2 border border-[#ffee32] text-[#ffee32] hover:bg-[#ffee32] hover:text-[#202020] transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white/50 font-light tracking-wide text-xs">
              © 2024 Electra Automotive. All rights reserved.
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffee32]/20 transition-all duration-300 group"
                >
                  <div className="text-white/60 group-hover:text-[#ffee32] transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
