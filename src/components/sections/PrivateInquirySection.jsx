import { useState } from "react";
import {
  ArrowRight,
  Shield,
  Lock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function PrivateInquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    budget: "",
    timeline: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Private inquiry submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="private-inquiry"
      className="min-h-screen bg-[#202020] text-white py-16 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 sm:w-24 h-px bg-[#ffee32]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 sm:mb-8 tracking-tight leading-none">
            PRIVATE INQUIRY
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light tracking-wide max-w-4xl mx-auto leading-relaxed px-4">
            For exclusive clients seeking bespoke solutions and confidential
            consultations. Your privacy is our priority.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Information Section */}
          <div className="space-y-8 sm:space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-6 tracking-wide">
                Confidential Consultation
              </h3>
              <p className="text-white/80 font-light leading-relaxed text-base sm:text-lg">
                Our private inquiry service is designed for discerning clients
                who require the highest level of discretion and personalized
                attention.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ffee32]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#ffee32]" />
                </div>
                <div>
                  <h4 className="text-lg font-light text-white mb-2 tracking-wide">
                    Complete Privacy
                  </h4>
                  <p className="text-white/80 font-light text-sm sm:text-base">
                    All inquiries are handled with absolute confidentiality and
                    discretion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ffee32]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-[#ffee32]" />
                </div>
                <div>
                  <h4 className="text-lg font-light text-white mb-2 tracking-wide">
                    Personal Concierge
                  </h4>
                  <p className="text-white/80 font-light text-sm sm:text-base">
                    Dedicated representative for your exclusive needs and
                    requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ffee32]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#ffee32]" />
                </div>
                <div>
                  <h4 className="text-lg font-light text-white mb-2 tracking-wide">
                    Secure Communication
                  </h4>
                  <p className="text-white/80 font-light text-sm sm:text-base">
                    Encrypted channels for all correspondence and sensitive
                    information.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-[#ffee32]/20">
              <h4 className="text-lg font-light text-white mb-4 tracking-wide">
                Direct Contact
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#ffee32]" />
                  <span className="text-white/90 font-light text-sm">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#ffee32]" />
                  <span className="text-white/90 font-light text-sm">
                    private@electra.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 sm:p-12 rounded-lg border border-[#ffee32]/20">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-6 tracking-wide">
                  Submit Inquiry
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-white/80 font-light text-sm mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-light text-sm rounded-none focus:outline-none focus:border-[#ffee32] transition-colors duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white/80 font-light text-sm mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-light text-sm rounded-none focus:outline-none focus:border-[#ffee32] transition-colors duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-white/80 font-light text-sm mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-light text-sm rounded-none focus:outline-none focus:border-[#ffee32] transition-colors duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-white/80 font-light text-sm mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-light text-sm rounded-none focus:outline-none focus:border-[#ffee32] transition-colors duration-300"
                        placeholder="Your company (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry"
                      className="block text-white/80 font-light text-sm mb-2"
                    >
                      Inquiry Details *
                    </label>
                    <textarea
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-light text-sm rounded-none focus:outline-none focus:border-[#ffee32] transition-colors duration-300 resize-none"
                      placeholder="Please describe your requirements..."
                      required
                    ></textarea>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-white/80 font-light text-sm mb-2"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white font-light text-sm rounded-none focus:outline-none focus:border-[#ffee32] transition-colors duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m+">$1M+</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-white/80 font-light text-sm mb-2"
                      >
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white font-light text-sm rounded-none focus:outline-none focus:border-[#ffee32] transition-colors duration-300"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate</option>
                        <option value="3-months">3 months</option>
                        <option value="6-months">6 months</option>
                        <option value="1-year">1 year</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full px-8 sm:px-12 py-3 sm:py-4 bg-[#ffee32] text-[#202020] rounded-none hover:bg-[#ffd100] transition-all duration-500 overflow-hidden"
                  >
                    <span className="relative z-10 font-light tracking-wider uppercase text-sm flex items-center justify-center gap-2">
                      Submit Private Inquiry
                      <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-[#ffd100] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#ffee32]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#ffee32]" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
                  Inquiry Submitted
                </h3>
                <p className="text-white/80 font-light text-base mb-8">
                  Thank you for your private inquiry. Our team will contact you
                  within 24 hours through your preferred method.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 border border-[#ffee32] text-[#ffee32] hover:bg-[#ffee32] hover:text-[#202020] transition-all duration-300"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-px bg-[#ffee32]/50"></div>
          </div>
          <button className="group relative px-8 sm:px-12 py-3 sm:py-4 border border-[#ffee32] text-[#ffee32] rounded-none hover:bg-[#ffee32] hover:text-[#202020] transition-all duration-500 overflow-hidden">
            <span className="relative z-10 font-light tracking-wider uppercase text-sm flex items-center gap-2">
              Schedule Private Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-[#ffee32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
