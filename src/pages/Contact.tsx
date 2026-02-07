import { useState } from "react";

const inquiryTypes = [
  { value: "", label: "Select an inquiry type" },
  { value: "ask", label: "Ask about the app" },
  { value: "support", label: "Request support" },
  { value: "suggestion", label: "Suggest improvements" },
  { value: "affiliate", label: "Affiliate inquiry" },
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
      <section className="min-h-[90vh] flex items-center px-6 bg-charcoal">
        <div className="max-w-2xl mx-auto text-center py-28">
          <div className="text-7xl mb-10 text-molten">✓</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            Message <span className="text-molten">Sent!</span>
          </h1>
          <p className="text-lg sm:text-xl opacity-80 leading-relaxed mb-10">
            Thanks for reaching out. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", inquiryType: "", message: "" });
            }}
            className="text-molten font-semibold text-lg hover:underline transition-colors"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-28 px-6 bg-charcoal">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Get In <span className="text-molten">Touch</span>
          </h1>
          <p className="text-xl text-white/70">
            Questions? Partnerships? Support? We're here.
          </p>
        </div>

        {/* Touchpoint Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate rounded-3xl p-8 border-2 border-steel text-center">
            <div className="w-14 h-14 mx-auto mb-4 border-2 border-molten rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Email</h3>
            <p className="text-white/80">support@winthehour.com</p>
          </div>

          <div className="bg-slate rounded-3xl p-8 border-2 border-steel text-center">
            <div className="w-14 h-14 mx-auto mb-4 border-2 border-molten rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Community</h3>
            <p className="text-white/80">Join our Discord</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate rounded-3xl p-10 border-2 border-molten">
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-charcoal border-2 border-steel text-white focus:border-molten outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-charcoal border-2 border-steel text-white focus:border-molten outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="inquiryType" className="block font-semibold mb-2">
                What can we help with?
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-charcoal border-2 border-steel text-white focus:border-molten outline-none transition appearance-none cursor-pointer"
              >
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value} disabled={type.value === ""}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg bg-charcoal border-2 border-steel text-white focus:border-molten outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-molten text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-molten/50 hover:bg-molten-dark transition-all whitespace-nowrap overflow-hidden"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            For affiliate inquiries, please include "AFFILIATE" in your subject line.
          </p>
        </div>
      </div>
    </section>
  );
}
