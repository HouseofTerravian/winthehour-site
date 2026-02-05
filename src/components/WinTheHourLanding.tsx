import { motion, useReducedMotion } from "framer-motion";
import { memo, useState, useCallback } from "react";
import { Flame, ArrowRight, CheckCircle2, Star, Clock, Zap, Shield, Mail, Crown, Trophy, Smartphone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Simple brand checkmark (Legendary UNC Checkmark™ inspired)
const CrownstrikeCheck = memo(() => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 sm:w-20 sm:h-20" aria-label="Win The Hour checkmark logo">
    <circle cx="60" cy="60" r="52" className="fill-transparent stroke-white/20" strokeWidth="2" />
    <path d="M30 64 L52 84 L94 36" className="stroke-emerald-400" strokeWidth="8" fill="none" strokeLinecap="round" />
  </svg>
));

const Section = memo(({ id, title, subtitle, children }:{id:string; title:string; subtitle?:string; children: React.ReactNode}) => (
  <section id={id} className="py-16 sm:py-24 px-4 scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-2">
          <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 animate-pulse" aria-hidden="true"/> {title}
        </h2>
        {subtitle && <p className="mt-3 text-white/70 max-w-3xl text-sm sm:text-base">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
));

const GlowRing = memo(() => (
  <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[800px] sm:h-[1100px] rounded-full blur-3xl opacity-30 will-change-transform"
         style={{background:"radial-gradient(closest-side,#ef4444,transparent 70%)"}}/>
  </div>
));

// Floating ember particles - optimized with CSS animations fallback
const EmberField = memo(({ count = 18 }:{count?:number}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {Array.from({length: count}).map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: 40 + (i%10)*10, x: (i*53)%100 + '%', opacity: 0, scale: 0.6 }}
          animate={{ y: [-10, -120], opacity: [0, 0.8, 0], scale: [0.6, 1, 0.7] }}
          transition={{ duration: 6 + (i%5), delay: (i%7)*0.4, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-1.5 h-1.5 rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,1) 0%, rgba(239,68,68,0.9) 40%, rgba(239,68,68,0) 70%)' }}
        />
      ))}
    </div>
  );
});

// Mobile nav menu
const MobileNav = memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="sm:hidden absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur border-b border-white/10"
    >
      <nav className="flex flex-col p-4 gap-4">
        {[
          { href: "#journal", label: "M.Y.B.E.D. Journal" },
          { href: "#watchfaces", label: "Watchfaces" },
          { href: "#app", label: "App Preview" },
          { href: "#about", label: "About" },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={onClose}
            className="text-white/80 hover:text-red-400 transition-colors py-2"
          >
            {label}
          </a>
        ))}
      </nav>
    </motion.div>
  );
});

// Animated card wrapper
const AnimatedCard = memo(({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay }}
    className={className}
  >
    {children}
  </motion.div>
));

export default function WinTheHourLanding(){
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual subscription logic
    setSubscribeStatus("success");
    setTimeout(() => setSubscribeStatus("idle"), 3000);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white antialiased scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-950/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <a href="#" className="flex items-center gap-2 sm:gap-3 group" aria-label="Win The Hour Home">
            <CrownstrikeCheck />
            <div className="leading-tight">
              <div className="font-black tracking-tight text-base sm:text-lg text-red-500 drop-shadow-md group-hover:text-red-400 transition-colors">WIN THE HOUR!™</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-white/60">One Hour. Fully Lived.</div>
            </div>
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80" aria-label="Main navigation">
            {[
              { href: "#journal", label: "M.Y.B.E.D. Journal" },
              { href: "#watchfaces", label: "Watchfaces" },
              { href: "#app", label: "App Preview" },
              { href: "#about", label: "About" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={scrollToSection}
                className="hover:text-red-400 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-400 hover:after:w-full after:transition-all"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              className="hidden sm:inline-flex bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-400 hover:to-amber-400 text-black font-bold shadow-lg hover:shadow-red-500/25 transition-shadow"
              onClick={() => document.querySelector('#app')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist
            </Button>
            <button
              className="sm:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <GlowRing />
        <EmberField />
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-32">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div>
              <motion.h1
                id="hero-heading"
                initial={{opacity:0,y:12}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.6}}
                className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
              >
                Ignite Your Focus.
                <span className="block text-red-400 mt-1">Win Peace. Win Joy. Win The Hour.</span>
              </motion.h1>
              <motion.p
                initial={{opacity:0,y:12}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.6, delay: 0.1}}
                className="mt-5 text-white/80 text-base sm:text-xl max-w-xl"
              >
                A premium daily briefing (150–250 words) + a progressive concentration drill.
                Faceless. Precise. Built for elite operators ready to bring the heat.
              </motion.p>
              <motion.div
                initial={{opacity:0,y:12}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.6, delay: 0.2}}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Button className="bg-gradient-to-r from-amber-500 to-red-500 text-black font-bold hover:from-amber-400 hover:to-red-400 shadow-lg hover:shadow-amber-500/25 transition-all">
                  Get the Briefing
                </Button>
                <Button variant="outline" className="border-red-400 text-red-400 hover:bg-red-500/10 hover:border-red-300 transition-all">
                  See How It Works
                </Button>
              </motion.div>
              <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.6, delay: 0.3}}
                className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-white/70 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-red-400" aria-hidden="true"/> 60-minute fire blocks</div>
                <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-amber-400" aria-hidden="true"/> Crownstrike Heat Sequence</div>
                <div className="hidden sm:flex items-center gap-2"><Shield className="w-4 h-4 text-white/80" aria-hidden="true"/> Guard your flame</div>
              </motion.div>
            </div>
            <motion.div
              initial={{opacity:0,scale:0.95}}
              animate={{opacity:1,scale:1}}
              transition={{duration:0.6, delay:0.15}}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl border border-red-500/20 bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 sm:p-6 overflow-hidden shadow-2xl shadow-red-500/5">
                <div className="absolute -right-6 -top-6 opacity-30 rotate-12" aria-hidden="true"><Flame className="w-20 sm:w-24 h-20 sm:h-24 text-red-500"/></div>
                <div className="flex items-center justify-between relative">
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/70"><Trophy className="w-4 h-4 text-amber-400" aria-hidden="true"/> Legendary Edition</span>
                  <span className="text-xs sm:text-sm text-white/60">Crownfire 01</span>
                </div>
                <div className="mt-4 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:gap-4 relative">
                  <Card className="bg-neutral-900/60 border-red-500/30 hover:border-red-500/50 transition-colors">
                    <CardHeader className="p-3 sm:p-6">
                      <CardTitle className="text-white text-sm sm:text-base">Daily Fire Briefing</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
                      <p className="text-xs sm:text-sm text-white/70">
                        Mission: Stoke the flames. Three decisive actions. Execute before the clock burns out.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-900/60 border-amber-500/30 hover:border-amber-500/50 transition-colors">
                    <CardHeader className="p-3 sm:p-6">
                      <CardTitle className="text-white text-sm sm:text-base">Heat Drill</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
                      <ul className="text-xs sm:text-sm text-white/70 space-y-1 sm:space-y-2">
                        {["Week 1: Spark focus","Week 2: Resist burnout","Week 3: Perform under fire"].map((t,i)=>(
                          <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" aria-hidden="true"/> {t}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3 relative">
                  <Button size="sm" className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-400 hover:to-amber-400 text-black font-bold text-xs sm:text-sm">Start Free Sample</Button>
                  <Button size="sm" variant="outline" className="border-red-400 text-red-400 hover:bg-red-500/10 text-xs sm:text-sm">View Editions</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <Section id="journal" title="M.Y.B.E.D. Journal" subtitle="Momentum. Your Body. Execution. Debrief. The ritual that fuels your fire.">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {icon: Crown, title: "Crownstrike", desc: "Prime your fire. Claim your hour with a 90-second ignition."},
            {icon: Zap, title: "Strike", desc: "Pin your 3 hottest actions. Cut 80% of the smoke."},
            {icon: Shield, title: "Debrief", desc: "Score the hour. Keep what's burning bright. Trim what dims."},
          ].map(({icon:Icon,title,desc},i)=> (
            <AnimatedCard key={i} delay={i * 0.1}>
              <Card className="bg-neutral-900/60 border-red-500/20 hover:border-red-500/40 transition-all hover:-translate-y-1 h-full">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Icon className="w-5 h-5 text-amber-400" aria-hidden="true"/>
                  <CardTitle className="text-white">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 text-sm">{desc}</p>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
        <AnimatedCard delay={0.3} className="mt-6 sm:mt-8">
          <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-red-500/30 hover:border-red-500/50 transition-colors">
            <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold">Download the printable daily page (PDF)</h3>
                <p className="text-white/70 text-sm mt-1">Keep the ritual offline. Pen &gt; sparks.</p>
              </div>
              <Button className="bg-gradient-to-r from-red-500 to-amber-500 text-black font-bold hover:from-red-400 hover:to-amber-400 whitespace-nowrap">Get PDF</Button>
            </CardContent>
          </Card>
        </AnimatedCard>
      </Section>

      {/* Watchfaces */}
      <Section
        id="watchfaces"
        title="Watchface Collection (Ascension Pack)"
        subtitle="Athletic • Chakra • Elite • Signature • Legendary"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {["Athletic Edition","Chakra Edition","Elite Edition","Signature Edition"].map((name, i) => (
            <AnimatedCard key={i} delay={i * 0.1}>
              <Card className="bg-neutral-900/60 border-red-500/20 overflow-hidden hover:border-red-500/40 transition-all hover:-translate-y-1 group">
                <CardContent className="p-0">
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 group-hover:from-neutral-800 group-hover:to-neutral-700 transition-colors">
                    <Flame className="w-10 sm:w-12 h-10 sm:h-12 text-red-500 animate-pulse group-hover:scale-110 transition-transform" aria-hidden="true"/>
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="font-semibold text-sm sm:text-base">{name}</div>
                    <div className="text-[10px] sm:text-xs text-white/60">PNG • SVG • Deployment Files</div>
                    <div className="mt-2 sm:mt-3 flex items-center justify-between gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-red-500 to-amber-500 text-black hover:from-red-400 hover:to-amber-400 text-xs">Preview</Button>
                      <button className="text-[10px] sm:text-xs text-white/70 hover:text-red-400 inline-flex items-center gap-1 transition-colors">
                        More <ArrowRight className="w-3 h-3"/>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* App Preview / Waitlist */}
      <Section id="app" title="The App (Preview)" subtitle="Distraction-proof fireflow. Rituals, timers, and reporting that reinforce blazing results.">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <AnimatedCard>
            <div className="relative">
              <div className="absolute -inset-1 bg-red-500/20 blur-2xl rounded-3xl" aria-hidden="true"/>
              <div className="relative rounded-2xl sm:rounded-3xl border border-red-500/20 bg-neutral-900 p-4 sm:p-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60"><Smartphone className="w-4 h-4" aria-hidden="true"/> iOS • Android • Web</div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {title:"Hour Timer", text:"Stay inside the flames. Laser focus for 60 minutes."},
                    {title:"Strike Board", text:"Three burning actions. One clear target."},
                    {title:"Crownfire", text:"Gamified streaks that reward real execution."},
                    {title:"Debrief", text:"Score, reflect, improve. Every blazing hour."},
                  ].map((c,i)=> (
                    <div key={i} className="p-3 sm:p-4 rounded-xl border border-red-500/20 bg-neutral-800 hover:border-red-500/40 transition-colors">
                      <div className="font-semibold text-sm">{c.title}</div>
                      <div className="text-xs sm:text-sm text-white/70 mt-1">{c.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.2}>
            <div>
              <div className="text-base sm:text-lg text-white/80">Be first in when the fire gate opens.</div>
              <form className="mt-4 flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-red-500/30 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 text-white placeholder:text-white/40 transition-all"
                  aria-label="Email address for waitlist"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-400 hover:to-amber-400 text-black font-bold inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" aria-hidden="true"/> Join Waitlist
                </Button>
              </form>
              {subscribeStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-sm mt-3"
                >
                  You're on the list! We'll notify you when we launch.
                </motion.p>
              )}
              <p className="text-xs text-white/60 mt-3">No spam. One email when we're live.</p>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About the Brand" subtitle="Minimalist. Legal. Energetic. Built for leaders who thrive under fire.">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatedCard>
            <div className="space-y-4 text-white/80">
              <p>
                Win The Hour!™ is a practice disguised as a product. We fuel your fire, spotlight the next decisive move, and protect the burning hour that changes your day.
              </p>
              <ul className="space-y-2">
                {["Short, tactical fire briefings.","A progressive heat system.","Employer-friendly reporting (opt-in).","Edition-based aesthetics that blaze with style."].map((t,i)=>(
                  <li key={i} className="flex items-start gap-2"><Star className="w-4 h-4 mt-0.5 text-red-400 flex-shrink-0" aria-hidden="true"/> <span>{t}</span></li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.15}>
            <Card className="bg-neutral-900/60 border-red-500/30 hover:border-red-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-white">For Teams & Employers</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 text-sm space-y-3">
                <p>Optionally share hourly wins with managers without adding meetings. Privacy-first by design.</p>
                <div className="flex items-center gap-3 text-white/70">
                  <Shield className="w-4 h-4 text-red-400" aria-hidden="true"/> Safety pledge and fire controls built-in.
                </div>
                <Button variant="outline" className="border-red-400 text-red-400 hover:bg-red-500/10">Learn about Workplace Mode</Button>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-red-500/20 mt-10" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="font-black text-red-500">WIN THE HOUR!™</div>
            <div className="text-xs text-white/60">© {new Date().getFullYear()} Chude Muonelo. All rights reserved.</div>
            <div className="text-[11px] text-white/50">Part of the House of Terravian structure.</div>
          </div>
          <div className="text-sm text-white/70">
            <div className="font-semibold text-white mb-2">Legal</div>
            <ul className="space-y-2">
              <li><a className="hover:text-red-400 transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-red-400 transition-colors" href="#">Terms of Use</a></li>
              <li><a className="hover:text-red-400 transition-colors" href="#">Community Safety Pledge</a></li>
              <li><a className="hover:text-red-400 transition-colors" href="#">Commercial License</a></li>
            </ul>
          </div>
          <div className="text-sm text-white/70 sm:col-span-2 md:col-span-1">
            <div className="font-semibold text-white mb-2">Get Updates</div>
            <form className="flex gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="email"
                className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 border border-red-500/30 outline-none focus:border-red-400 text-white text-sm"
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="bg-gradient-to-r from-red-500 to-amber-500 text-black font-bold hover:from-red-400 hover:to-amber-400 text-sm">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="text-[10px] text-center text-white/40 pb-6 sm:pb-8">
          Powered by fire. Swift. Relentless. Burn through limits. Win The Hour.
        </div>
      </footer>
    </div>
  );
}
