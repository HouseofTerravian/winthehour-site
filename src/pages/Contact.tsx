import { useState } from "react";

const inquiryTypes = [
  { value: "", label: "Select an inquiry type" },
  { value: "ask", label: "Ask about the app" },
  { value: "support", label: "Request support" },
  { value: "suggestion", label: "Suggest improvements" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-[100vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10]">
        <div className="max-w-2xl mx-auto text-center py-40">
          <div className="text-7xl mb-16">✓</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14">
            Message <span className="text-[#FF5E1A]">Sent!</span>
          </h1>
          <p className="text-lg sm:text-xl opacity-80 leading-relaxed mb-20">
            Thanks for reaching out. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", inquiryType: "", message: "" });
            }}
            className="text-[#FF5E1A] font-semibold text-lg hover:underline transition-colors"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10]">
        <div className="w-full max-w-[1600px] mx-auto text-center py-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 leading-tight">
            Get In{" "}
            <span className="text-[#FF5E1A]">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            Have a question? Need support? Want to suggest an improvement? We're listening.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-64 md:py-80 lg:py-96 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#1F2025]">
        <div className="w-full max-w-[700px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-16">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-6 opacity-90">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-[#0B0C10] border border-[#3C4F65] rounded-xl px-6 py-5 text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:outline-none focus:ring-2 focus:ring-[#FF5E1A] focus:border-transparent transition-all text-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-6 opacity-90">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-[#0B0C10] border border-[#3C4F65] rounded-xl px-6 py-5 text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:outline-none focus:ring-2 focus:ring-[#FF5E1A] focus:border-transparent transition-all text-lg"
              />
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-sm font-semibold mb-6 opacity-90">
                What can we help with?
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full bg-[#0B0C10] border border-[#3C4F65] rounded-xl px-6 py-5 text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FF5E1A] focus:border-transparent transition-all text-lg appearance-none cursor-pointer"
              >
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value} disabled={type.value === ""}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-6 opacity-90">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us what's on your mind..."
                className="w-full bg-[#0B0C10] border border-[#3C4F65] rounded-xl px-6 py-5 text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:outline-none focus:ring-2 focus:ring-[#FF5E1A] focus:border-transparent transition-all text-lg resize-none"
              />
            </div>

            <div className="pt-10">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#FF5E1A] text-[#FFFFFF] px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-64 md:py-80 lg:py-96 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#0B0C10]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid sm:grid-cols-3 gap-16 md:gap-24 lg:gap-32">
            <div className="bg-[#1F2025] rounded-2xl p-16 lg:p-20 border border-[#3C4F65] text-center">
              <div className="text-4xl mb-14">💬</div>
              <h3 className="text-xl font-bold mb-8">Ask About the App</h3>
              <p className="opacity-70 leading-relaxed">Curious how Win The Hour!™ works? Want to know if it's right for you? Just ask.</p>
            </div>
            <div className="bg-[#1F2025] rounded-2xl p-16 lg:p-20 border border-[#3C4F65] text-center">
              <div className="text-4xl mb-14">🛠️</div>
              <h3 className="text-xl font-bold mb-8">Request Support</h3>
              <p className="opacity-70 leading-relaxed">Running into an issue? We're here to help you get back to winning your hours.</p>
            </div>
            <div className="bg-[#1F2025] rounded-2xl p-16 lg:p-20 border border-[#3C4F65] text-center">
              <div className="text-4xl mb-14">💡</div>
              <h3 className="text-xl font-bold mb-8">Suggest Improvements</h3>
              <p className="opacity-70 leading-relaxed">Have an idea that would make Win The Hour!™ better? We build with our community in mind.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
