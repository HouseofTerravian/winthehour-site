import { motion } from "framer-motion";
import { memo, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardTitle, CardDescription } from "./ui/card";
import { Logo } from "./icons/Logo";
import { ClockCheckIcon } from "./icons/ClockCheckIcon";

// Unsplash images - matching mockup design
const HERO_IMAGE = "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=700&fit=crop&crop=faces"; // Black woman, natural hair, confident smile
const TESTIMONIAL_IMAGE = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop&crop=faces"; // Man in suit

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
  <section className={`py-16 px-4 ${dark ? 'bg-gradient-to-b from-wth-slate to-wth-dark' : 'bg-gradient-to-b from-slate-100 to-white'}`}>
    <div className="max-w-4xl mx-auto text-center">
      <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
        Ready to elevate your productivity?
      </h2>
      <p className={`mb-8 ${dark ? 'text-white/70' : 'text-slate-600'}`}>
        Join thousands who are transforming their days, one hour at a time.
      </p>
      <Button size="lg">Join The Movement</Button>
    </div>
  </section>
));

export default function WinTheHourLanding() {
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
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-wth-blue via-wth-slate to-wth-dark">
        <div className="absolute inset-0 bg-textured" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Transform Your Life,
                <br />
                <span className="text-white">One Hour at a Time</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Win The Hour!™ helps you achieve your goals by focusing on hourly targets and making every minute count.
              </p>
              <Button size="lg">Join the Movement</Button>
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
                  alt="Professional woman smiling confidently"
                  className="w-full h-[400px] md:h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wth-dark/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-wth-dark relative">
        <div className="absolute inset-0 bg-gradient-to-b from-wth-slate/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FeatureCard
                icon={<ClockCheckIcon className="w-20 h-20" />}
                title="Win Every Hour"
                description="Stay focused and accountable."
                detail="Check in hourly, set intentional goals, and track your progress."
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
                title="Track Your Progress"
                description="See your achievements grow."
                detail="Review your streaks, completed tasks, and focus time."
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
                title="Recover with Compassion"
                description="Reset without guilt."
                detail="Break free from perfectionism and maintain momentum guilt-free."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* First CTA */}
      <CTASection dark />

      {/* Testimonial Section */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-wth-blue via-wth-slate to-wth-dark relative overflow-hidden">
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
                <strong className="text-white">Either get this app or be a loser!</strong>
                <br />
                I used to wonder what I did with my days, or, even worse, on productive days still feel I wasn't doing enough. Now, my stats don't lie!! I LOVE the feeling of success and satisfaction this app brings.
              </blockquote>
              <cite className="text-wth-orange-400 font-bold not-italic text-lg">
                Greg S.
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
                  alt="Professional businessman checking his watch"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wth-dark/70 to-transparent" />
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
              Ready to elevate your productivity?
            </h2>
            <p className="text-white/70 mb-8">
              Join thousands who are transforming their days, one hour at a time.
            </p>
            <Button size="lg">Join The Movement</Button>
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
                Transform your productivity one hour at a time. Join thousands who are making every minute count.
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
