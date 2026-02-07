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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-[90vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal">
        <div className="max-w-2xl mx-auto text-center py-28">
          <div className="text-7xl mb-10">✓</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Message <span className="text-orange">Sent!</span>
          </h1>
          <p className="text-lg sm:text-xl opacity-80 leading-relaxed mb-10">
            Thanks for reaching out. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                inquiryType: "",
                message: "",
              });
            }}
            className="text-orange font-semibold text-lg hover:underline transition-colors"
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
      <section className="min-h-[80vh] flex items-center px-6 sm:px-10 lg:px-20 xl:px-32 bg-charcoal">
        <div className="w-full max-w-[1600px] mx-auto text-center py-28">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Get In <span className="text-orange">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-3xl mx-auto">
            Have a question? Need support? Want to suggest an improvement?
            We're listening.
          </p>
        </div>
      </section>

      {/* Touchpoint Cards + Form */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 xl:px-32 bg-slate">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            <div className="bg-charcoal rounded-3xl p-8 lg:p-10 border-2 border-steel text-center">
              <div className="w-14 h-14 mx-auto mb-6 border-2 border-orange rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#FF5E1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="opacity-70 text-sm">support@winthehour.com</p>
            </div>

            <div className="bg-charcoal rounded-3xl p-8 lg:p-10 border-2 border-steel text-center">
              <div className="w-14 h-14 mx-auto mb-6 border-2 border-orange rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#FF5E1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="opacity-70 text-sm">Join the movement online</p>
            </div>

            <div className="bg-charcoal rounded-3xl p-8 lg:p-10 border-2 border-steel text-center">
              <div className="w-14 h-14 mx-auto mb-6 border-2 border-orange rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#FF5E1A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Feedback</h3>
              <p className="opacity-70 text-sm">Shape the future of the app</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal rounded-3xl p-10 sm:p-14 md:p-16 border-2 border-steel">
            <h3 className="text-3xl sm:text-4xl font-bold mb-10">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-3 opacity-90"
                >
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
                  className="w-full bg-slate border-2 border-steel rounded-xl px-6 py-4 text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:outline-none focus:ring-2 focus:ring-[#FF5E1A] focus:border-transparent transition-all text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-3 opacity-90"
                >
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
                  className="w-full bg-slate border-2 border-steel rounded-xl px-6 py-4 text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:outline-none focus:ring-2 focus:ring-[#FF5E1A] focus:border-transparent transition-all text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-semibold mb-3 opacity-90"
                >
                  What can we help with?
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full bg-slate border-2 border-steel rounded-xl px-6 py-4 text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FF5E1A] focus:border-transparent transition-all text-lg appearance-none cursor-pointer"
                >
                  {inquiryTypes.map((type) => (
                    <option
                      key={type.value}
                      value={type.value}
                      disabled={type.value === ""}
                    >
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-3 opacity-90"
                >
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
                  className="w-full bg-slate border-2 border-steel rounded-xl px-6 py-4 text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:outline-none focus:ring-2 focus:ring-[#FF5E1A] focus:border-transparent transition-all text-lg resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-orange text-[#FFFFFF] py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-[1.02] active:scale-95 whitespace-nowrap overflow-hidden"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
