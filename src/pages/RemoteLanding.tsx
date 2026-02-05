import { motion } from "framer-motion";
import { memo, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardTitle, CardDescription } from "../components/ui/card";
import { Logo } from "../components/icons/Logo";
import { ClockCheckIcon } from "../components/icons/ClockCheckIcon";

// Unsplash images - remote work themed
const HERO_IMAGE = "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=700&fit=crop&crop=faces";
const TESTIMONIAL_IMAGE = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=600&fit=crop&crop=faces";

// Mobile Navigation
const MobileNav = memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="md:hidden absolute top-full left-0 right-0 bg-wth-dark/95 backdrop-blur-lg border-b border-white/10"
    >
      <nav className="flex flex-col p-6 gap-4">
        {["Home", "Features", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors py-2 text-lg"
          >
            {item}
          </a>
        ))}
        <Button className="mt-2">Get Started</Button>
      </nav>
    </motion.div>
  );
});

// Feature Card Component
const FeatureCard = memo(({ icon, title, description, detail }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
}) => (
  <Card variant="feature" className="text-center p-6 hover:shadow-2xl transition-shadow">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <CardTitle className="text-xl mb-2">{title}</CardTitle>
    <CardDescription className="text-slate-700 font-medium mb-1">{description}</CardDescription>
    <p className="text-sm text-slate-500">{detail}</p>
  </Card>
));

// CTA Section Component
const CTASection = memo(({ dark = false }: { dark?: boolean }) => (
  <section className={`py-16 px-4 ${dark ? 'bg-gradient-to-b from-slate-800 to-wth-dark' : 'bg-gradient-to-b from-indigo-50 to-slate-100'}`}>
    <div className="max-w-4xl mx-auto text-center">
      <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
        Ready to prove your productivity?
      </h2>
      <p className={`mb-8 ${dark ? 'text-white/70' : 'text-slate-600'}`}>
        Join thousands of remote workers who've mastered working from anywhere.
      </p>
      <Button size="lg">Start Winning Your Hours</Button>
    </div>
  </section>
));

export default function RemoteLanding() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-wth-dark text-white font-display scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-wth-dark/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          <a href="#" className="flex items-center gap-3 group">
            <Logo className="w-10 h-10" />
            <span className="font-bold text-lg italic">Win The Hour!™</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={scrollToSection}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex" size="sm">
              Get Started
            </Button>
            <button
              className="md:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-wth-dark">
        <div className="absolute inset-0 bg-textured" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-wth-orange-500/20 text-wth-orange-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                For Remote Workers
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Work From Anywhere,
                <br />
                <span className="text-white">Prove It Everywhere</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                No office? No problem. Win The Hour!™ gives you the accountability and proof of productivity that remote work demands.
              </p>
              <Button size="lg">Start Your Free Trial</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMAGE}
                  alt="Remote worker at home office"
                  className="w-full h-[400px] md:h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FeatureCard
                icon={<ClockCheckIcon className="w-20 h-20" />}
                title="Stay Accountable"
                description="No manager needed."
                detail="Hourly check-ins keep you on track without the micromanagement."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureCard
                icon={<ClockCheckIcon className="w-20 h-20" />}
                title="Document Your Work"
                description="Proof when you need it."
                detail="Clear records of your focused hours for performance reviews and peace of mind."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureCard
                icon={<ClockCheckIcon className="w-20 h-20" />}
                title="Set Boundaries"
                description="Work ends when you say it does."
                detail="Stop working 'til midnight. Clear start and stop times reclaim your life."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* First CTA */}
      <CTASection dark />

      {/* Testimonial Section */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-purple-900 to-wth-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-textured" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10"
            >
              <div className="text-wth-orange-400 text-6xl font-serif leading-none mb-4">"</div>
              <blockquote className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                <strong className="text-white">My boss thought I was slacking. Now I have receipts.</strong>
                <br />
                Remote work was killing my reputation until I started tracking with Win The Hour. Now I can show exactly what I accomplished each day. Got promoted last quarter.
              </blockquote>
              <cite className="text-wth-orange-400 font-bold not-italic text-lg">
                Amanda R. — Product Manager, 3 Years Remote
              </cite>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={TESTIMONIAL_IMAGE}
                  alt="Remote team collaboration"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-wth-dark to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Remote work freedom. Real accountability.
            </h2>
            <p className="text-white/70 mb-8">
              Join thousands of remote professionals who've mastered the WFH game.
            </p>
            <Button size="lg">Get Started Free</Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Logo className="w-8 h-8" />
                <span className="font-bold text-lg italic">Win The Hour!™</span>
              </div>
              <p className="text-white/60 text-sm max-w-sm">
                The productivity app built for remote workers who want freedom AND accountability.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Chude Muonelo. All rights reserved.
            <br />
            <span className="text-xs">Part of the House of Terravian structure.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
