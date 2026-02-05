import { motion } from "framer-motion";
import { Flame, ArrowRight, CheckCircle2, Star, Clock, Zap, Shield, Mail, Crown, Trophy, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Simple brand checkmark (Legendary UNC Checkmark™ inspired)
const CrownstrikeCheck = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20">
    <circle cx="60" cy="60" r="52" className="fill-transparent stroke-white/20" strokeWidth="2" />
    <path d="M30 64 L52 84 L94 36" className="stroke-emerald-400" strokeWidth="8" fill="none" strokeLinecap="round" />
  </svg>
);

const Section = ({ id, title, subtitle, children }:{id:string; title:string; subtitle?:string; children: React.ReactNode}) => (
  <section id={id} className="py-20 sm:py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-2">
          <Flame className="w-6 h-6 text-red-500 animate-pulse"/> {title}
        </h2>
        {subtitle && <p className="mt-3 text-white/70 max-w-3xl">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

const GlowRing = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-30"
         style={{background:"radial-gradient(closest-side,#ef4444,transparent 70%)"}}/>
  </div>
);

// Floating ember particles (lightweight, no canvas)
const EmberField = ({ count = 22 }:{count?:number}) => (
  <div className="pointer-events-none absolute inset-0 -z-10">
    {Array.from({length: count}).map((_, i) => (
      <motion.span
        key={i}
        initial={{ y: 40 + (i%10)*10, x: (i*53)%100 + '%', opacity: 0, scale: 0.6 }}
        animate={{ y: [-10, -120], opacity: [0, 0.9, 0], scale: [0.6, 1, 0.7] }}
        transition={{ duration: 6 + (i%5), delay: (i%7)*0.4, repeat: Infinity, ease: "easeOut" }}
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(251,146,60,1) 0%, rgba(239,68,68,0.9) 40%, rgba(239,68,68,0) 70%)' }}
      />
    ))}
  </div>
);

export default function WinTheHourLanding(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3">
            <CrownstrikeCheck />
            <div className="leading-tight">
              <div className="font-black tracking-tight text-lg text-red-500 drop-shadow-md">WIN THE HOUR!™</div>
              <div className="text-[11px] uppercase tracking-widest text-white/60">One Hour. Fully Lived.</div>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#journal" className="hover:text-red-400">M.Y.B.E.D. Journal</a>
            <a href="#watchfaces" className="hover:text-red-400">Watchfaces</a>
            <a href="#app" className="hover:text-red-400">App Preview</a>
            <a href="#about" className="hover:text-red-400">About</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-400 hover:to-amber-400 text-black font-bold shadow-lg">Join Waitlist</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <GlowRing />
        <EmberField />
        <div className="max-w-6xl mx-auto px-4 py-24 sm:py-32">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{opacity:0,y:8}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.6}}
                className="text-4xl sm:text-6xl font-black leading-[1.05] tracking-tight"
              >
                Ignite Your Focus.
                <span className="block text-red-400">Win Peace. Win Joy. Win The Hour.</span>
              </motion.h1>
              <p className="mt-5 text-white/80 text-lg sm:text-xl max-w-xl">
                A premium daily briefing (150–250 words) + a progressive concentration drill.
                Faceless. Precise. Built for elite operators ready to bring the heat.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button className="bg-gradient-to-r from-amber-500 to-red-500 text-black font-bold hover:from-amber-400 hover:to-red-400">Get the Briefing</Button>
                <Button variant="outline" className="border-red-400 text-red-400 hover:bg-red-500/10">See How It Works</Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-red-400"/> 60-minute fire blocks</div>
                <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-amber-400"/> Crownstrike Heat Sequence</div>
                <div className="hidden sm:flex items-center gap-2"><Shield className="w-4 h-4 text-white/80"/> Guard your flame</div>
              </div>
            </div>
            <motion.div
              initial={{opacity:0,scale:0.96}}
              animate={{opacity:1,scale:1}}
              transition={{duration:0.6, delay:0.1}}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl border border-red-500/20 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 overflow-hidden shadow-2xl">
                <div className="absolute -right-6 -top-6 opacity-40 rotate-12"><Flame className="w-24 h-24 text-red-500"/></div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm text-white/70"><Trophy className="w-4 h-4 text-amber-400"/> Legendary Edition</span>
                  <span className="text-sm text-white/60">Crownfire 01</span>
                </div>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Card className="bg-neutral-900/60 border-red-500/30">
                    <CardHeader>
                      <CardTitle className="text-white text-base">Daily Fire Briefing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/70">
                        Mission: Stoke the flames. Three decisive actions. Execute before the clock burns out.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-neutral-900/60 border-amber-500/30">
                    <CardHeader>
                      <CardTitle className="text-white text-base">Heat Drill</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-white/70 space-y-2">
                        {["Week 1: Spark focus","Week 2: Resist burnout","Week 3: Perform under fire"].map((t,i)=>(
                          <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-red-400"/> {t}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-400 hover:to-amber-400 text-black font-bold">Start Free Sample</Button>
                  <Button variant="outline" className="border-red-400 text-red-400 hover:bg-red-500/10">View Editions</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <Section id="journal" title="M.Y.B.E.D. Journal" subtitle="Momentum. Your Body. Execution. Debrief. The ritual that fuels your fire.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: Crown, title: "Crownstrike", desc: "Prime your fire. Claim your hour with a 90-second ignition."},
            {icon: Zap, title: "Strike", desc: "Pin your 3 hottest actions. Cut 80% of the smoke."},
            {icon: Shield, title: "Debrief", desc: "Score the hour. Keep what's burning bright. Trim what dims."},
          ].map(({icon:Icon,title,desc},i)=> (
            <Card key={i} className="bg-neutral-900/60 border-red-500/20">
              <CardHeader className="flex flex-row items-center gap-3">
                <Icon className="w-5 h-5 text-amber-400"/>
                <CardTitle className="text-white">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-red-500/30">
            <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Download the printable daily page (PDF)</h3>
                <p className="text-white/70 text-sm mt-1">Keep the ritual offline. Pen &gt; sparks.</p>
              </div>
              <Button className="bg-gradient-to-r from-red-500 to-amber-500 text-black font-bold hover:from-red-400 hover:to-amber-400">Get PDF</Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Watchfaces */}
      <Section
        id="watchfaces"
        title="Watchface Collection (Ascension Pack)"
        subtitle="Athletic • Chakra • Elite • Signature • Legendary"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {["Athletic Edition","Chakra Edition","Elite Edition","Signature Edition"].map((name, i) => (
            <Card key={i} className="bg-neutral-900/60 border-red-500/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800">
                  <Flame className="w-12 h-12 text-red-500 animate-pulse"/>
                </div>
                <div className="p-4">
                  <div className="font-semibold">{name}</div>
                  <div className="text-xs text-white/60">PNG • SVG • Deployment Files</div>
                  <div className="mt-3 flex items-center justify-between">
                    <Button size="sm" className="bg-gradient-to-r from-red-500 to-amber-500 text-black hover:from-red-400 hover:to-amber-400">Preview</Button>
                    <button className="text-xs text-white/70 hover:text-red-400 inline-flex items-center gap-1">
                      Learn more <ArrowRight className="w-3 h-3"/>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* App Preview / Waitlist */}
      <Section id="app" title="The App (Preview)" subtitle="Distraction-proof fireflow. Rituals, timers, and reporting that reinforce blazing results.">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-red-500/20 blur-2xl rounded-3xl"/>
            <div className="relative rounded-3xl border border-red-500/20 bg-neutral-900 p-6">
              <div className="flex items-center gap-2 text-sm text-white/60"><Smartphone className="w-4 h-4"/> iOS • Android • Web</div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  {title:"Hour Timer", text:"Stay inside the flames. Laser focus for 60 minutes."},
                  {title:"Strike Board", text:"Three burning actions. One clear target."},
                  {title:"Crownfire", text:"Gamified streaks that reward real execution."},
                  {title:"Debrief", text:"Score, reflect, improve. Every blazing hour."},
                ].map((c,i)=> (
                  <div key={i} className="p-4 rounded-xl border border-red-500/20 bg-neutral-800">
                    <div className="font-semibold">{c.title}</div>
                    <div className="text-sm text-white/70 mt-1">{c.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-lg text-white/80">Be first in when the fire gate opens.</div>
            <form className="mt-4 flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="you@company.com" className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-red-500/30 outline-none focus:border-red-400 text-white"/>
              <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-400 hover:to-amber-400 text-black font-bold inline-flex items-center gap-2"><Mail className="w-4 h-4"/> Join Waitlist</Button>
            </form>
            <p className="text-xs text-white/60 mt-3">No spam. One email when we're live.</p>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About the Brand" subtitle="Minimalist. Legal. Energetic. Built for leaders who thrive under fire.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-white/80">
            <p>
              Win The Hour!™ is a practice disguised as a product. We fuel your fire, spotlight the next decisive move, and protect the burning hour that changes your day.
            </p>
            <ul className="space-y-2">
              {["Short, tactical fire briefings.","A progressive heat system.","Employer-friendly reporting (opt-in).","Edition-based aesthetics that blaze with style."].map((t,i)=>(
                <li key={i} className="flex items-start gap-2"><Star className="w-4 h-4 mt-1 text-red-400"/> <span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <Card className="bg-neutral-900/60 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white">For Teams & Employers</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 text-sm space-y-3">
                <p>Optionally share hourly wins with managers without adding meetings. Privacy-first by design.</p>
                <div className="flex items-center gap-3 text-white/70">
                  <Shield className="w-4 h-4 text-red-400"/> Safety pledge and fire controls built-in.
                </div>
                <Button variant="outline" className="border-red-400 text-red-400 hover:bg-red-500/10">Learn about Workplace Mode</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-red-500/20 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="font-black text-red-500">WIN THE HOUR!™</div>
            <div className="text-xs text-white/60">© {new Date().getFullYear()} Chude Muonelo. All rights reserved.</div>
            <div className="text-[11px] text-white/50">Part of the House of Terravian structure.</div>
          </div>
          <div className="text-sm text-white/70">
            <div className="font-semibold text-white mb-2">Legal</div>
            <ul className="space-y-2">
              <li><a className="hover:text-red-400" href="#" target="_blank" rel="noreferrer">Privacy Policy</a></li>
              <li><a className="hover:text-red-400" href="#" target="_blank" rel="noreferrer">Terms of Use</a></li>
              <li><a className="hover:text-red-400" href="#" target="_blank" rel="noreferrer">Community Safety Pledge</a></li>
              <li><a className="hover:text-red-400" href="#" target="_blank" rel="noreferrer">Commercial License</a></li>
            </ul>
          </div>
          <div className="text-sm text-white/70">
            <div className="font-semibold text-white mb-2">Get Updates</div>
            <form className="flex gap-2">
              <input type="email" placeholder="email" className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 border border-red-500/30 outline-none focus:border-red-400 text-white"/>
              <Button className="bg-gradient-to-r from-red-500 to-amber-500 text-black font-bold hover:from-red-400 hover:to-amber-400">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="text-[10px] text-center text-white/40 pb-8">
          Powered by fire. Swift. Relentless. Burn through limits. Win The Hour.
        </div>
      </footer>
    </div>
  );
}
