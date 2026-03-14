import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  const [time, setTime] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const istTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setTime(istTime)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Charan Raj B | Full Stack Developer</title>
        <meta name="description" content="High-end software engineering and development" />
      </Head>

      <div className="grain-overlay"></div>

      <main className="min-h-screen">
        {/* Navigation */}
        <header className="px-6 md:px-10 py-6 md:py-8 flex items-center justify-between sticky top-0 z-50 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase pointer-events-auto"
          >
            Charan Raj B
          </motion.div>

          {/* Integrated Plus Sign Portal */}
          <div className="fixed top-6 right-6 md:top-8 md:right-10 z-[100] pointer-events-auto">
            <div className="group relative flex items-center justify-end">
              {/* Staggered Navigation Bridge */}
              <div className="flex items-center space-x-6 md:space-x-10 pr-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-10 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto">
                {[
                  { name: 'About', id: 'about' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Expertise', id: 'expertise' },
                  { name: 'Connect', id: 'connect' }
                ].map((link, i) => (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className="text-[9px] font-bold uppercase tracking-[0.4em] text-black hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Reduced size Portal Trigger */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center bg-white/40 backdrop-blur-2xl shadow-xl cursor-pointer group-hover:border-accent group-hover:scale-110 transition-all duration-500 overflow-hidden relative isolate">
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-[-1]"></div>
                <div className="relative w-4 h-4 group-hover:rotate-180 transition-transform duration-700">
                  <span className="absolute top-1/2 left-0 w-full h-[1.2px] bg-black group-hover:bg-white -translate-y-1/2 transition-colors duration-500"></span>
                  <span className="absolute top-0 left-1/2 w-[1.2px] h-full bg-black group-hover:bg-white -translate-x-1/2 transition-colors duration-500"></span>
                </div>
              </div>

              {/* Decorative Pulse */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-accent/20 animate-ping opacity-0 group-hover:opacity-100 pointer-events-none"></div>
            </div>
          </div>
        </header>

        <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 relative bg-[#f4f4ee] pt-20 md:pt-0">
          {/* Decorative Background Texture */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
            <span className="absolute -top-[5%] md:-top-[10%] -left-[5%] text-[15vw] md:text-[20vw] font-bold uppercase tracking-tighter leading-none whitespace-nowrap">FULL STACK</span>
            <span className="absolute bottom-[5%] md:-bottom-[10%] -right-[5%] text-[15vw] md:text-[20vw] font-bold uppercase tracking-tighter leading-none whitespace-nowrap">SOFTWARE ENG</span>
          </div>

          <div className="max-w-[1500px] mx-auto w-full relative z-10">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Headline & Bio */}
              <div className="col-span-1 lg:col-span-7">
                <motion.div variants={item} className="mb-6 md:mb-8 flex items-center space-x-4">
                  <span className="w-8 md:w-12 h-[1px] bg-accent"></span>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-accent">Defining the digital frontier</span>
                </motion.div>

                <motion.h1
                  variants={item}
                  className="text-[10vw] lg:text-[7vw] font-bold uppercase leading-[0.8] tracking-tighter mb-8 md:mb-10"
                >
                  Charan Raj <span className="text-stroke">B</span><br />
                  <span className="font-serif-italic text-accent normal-case tracking-normal block mt-2 md:mt-4 text-xl md:text-2xl lg:text-3xl">Full Stack Developer</span>
                </motion.h1>

                <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-xl">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3 md:mb-4 opacity-40">01 / Infrastructure</span>
                    <p className="text-sm font-medium leading-relaxed opacity-60">
                      Architecting <span className="text-black font-bold">high-performance</span> systems with a focus on scalability and modern cloud infrastructure.
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3 md:mb-4 opacity-40">02 / Specialization</span>
                    <p className="text-sm font-medium leading-relaxed opacity-60">
                      Delivering <span className="text-black font-bold">enterprise-grade</span> solutions with rapid deployment cycles and uncompromising code quality.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center gap-8 sm:space-x-12">
                  <div className="flex flex-col space-y-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] opacity-30">Connect</span>
                    <div className="flex gap-4">
                      {[
                        { id: 'GH', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
                        { id: 'LI', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.154z" /></svg> },
                        { id: 'X', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> }
                      ].map(social => (
                        <motion.a
                          key={social.id}
                          href="#"
                          whileHover={{ y: -5, scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                          whileTap={{ scale: 0.9 }}
                          className="w-9 h-9 md:w-10 md:h-10 border border-black/5 rounded-full flex items-center justify-center text-black/40 transition-all cursor-pointer bg-white shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-premium hover:border-accent/10"
                        >
                          <div className="scale-[0.85]">
                            {social.icon}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:block w-[1px] h-20 bg-black/5"></div>
                  <div className="flex flex-col space-y-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] opacity-30">Status & Time</span>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-bold uppercase tracking-widest">Available for Hire</span>
                      </div>
                      <div className="flex items-center space-x-3 opacity-60">
                        <span className="text-[10px] font-bold uppercase tracking-widest font-mono">IST (UTC+5:30) — {time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="col-span-1 lg:col-span-5 relative mt-16 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative max-w-[400px] lg:max-w-none mx-auto"
                >
                  <div className="relative group perspective-1000">
                    {/* Rotating Peripheral Glass Ring */}
                    <div className="absolute -inset-10 border border-black/[0.05] rounded-full group-hover:rotate-180 transition-transform duration-[3000ms] ease-in-out pointer-events-none">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"></div>
                    </div>

                    {/* The Multi-Layer Kinetic Stack */}
                    <div className="relative w-full aspect-[3/2] z-10">
                      {/* Depth Layer 1: Blurred Ghost */}
                      <div className="absolute inset-4 bg-accent/5 rounded-[40px] blur-2xl scale-95 group-hover:scale-105 group-hover:bg-accent/10 transition-all duration-1000"></div>

                      {/* Depth Layer 2: Main Image Frame */}
                      <div className="relative w-full h-full overflow-hidden rounded-[40px] shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-1">
                        <img
                          src="/images/photographer.png"
                          className="w-full h-full object-cover grayscale brightness-110 contrast-[1.15] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms] cubic-bezier(0.2, 1, 0.2, 1)"
                        />

                        {/* Interactive UI Overlays */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[length:4px_4px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>

                        {/* Liquid Light Scanner */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/30 to-transparent h-1/2 -top-full group-hover:top-full transition-all duration-[2000ms] ease-linear pointer-events-none opacity-0 group-hover:opacity-100"></div>

                        {/* Structural Indices */}
                        <div className="absolute top-10 right-10 flex flex-col items-end gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                          <span className="text-[7px] font-black uppercase tracking-[0.5em] text-white/40 font-mono">Sector_04</span>
                          <div className="w-8 h-[1px] bg-white/20"></div>
                        </div>

                        {/* Status Marker */}
                        <div className="absolute bottom-10 left-10 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          <div className="flex gap-1">
                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>)}
                          </div>
                          <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em] font-mono">System_Live</span>
                        </div>
                      </div>
                    </div>

                    {/* Outer Designator */}
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 h-40 w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent hidden lg:block">
                      <span className="absolute top-0 -left-2 text-[6px] font-bold uppercase tracking-widest vertical-text opacity-30">P.77 V.04</span>
                    </div>

                    {/* Floating Decorative Orb */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 border border-black/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-125 group-hover:rotate-90 pointer-events-none">
                      <div className="w-px h-full bg-black/10 rotate-45"></div>
                      <div className="w-px h-full bg-black/10 -rotate-45"></div>
                    </div>
                  </div>

                  {/* Ultra-Minimalist Kinetic Resume Hub */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 z-40 group/resume-hub"
                  >
                    <a
                      href="/resume.txt"
                      download
                      className="relative block bg-[#0a0a0a] text-white px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] border border-white/5 overflow-hidden group/resume-btn transition-all duration-500 hover:scale-105 active:scale-95"
                    >
                      {/* Interaction: Liquid Accent Fill */}
                      <div className="absolute inset-0 bg-accent translate-y-full group-hover/resume-btn:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>

                      <div className="relative z-10 flex flex-col">
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-1 h-1 rounded-full bg-accent group-hover/resume-btn:bg-white transition-colors"></div>
                          <span className="text-[6px] md:text-[7px] font-black uppercase tracking-[0.4em] text-accent group-hover/resume-btn:text-white transition-colors font-mono">RESUME.V4</span>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex flex-col">
                            <h4 className="text-[10px] md:text-xs font-black uppercase leading-none tracking-widest mb-0.5">Download</h4>
                            <p className="text-[6px] md:text-[7px] font-bold uppercase tracking-wider text-white/30 group-hover/resume-btn:text-white/60 transition-colors font-mono">PDF // 1.2MB</p>
                          </div>

                          <div className="flex flex-col items-center group-hover/resume-btn:translate-y-0.5 transition-transform duration-300">
                            <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>

                  {/* Decorative blobs */}
                  <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-40 md:w-64 h-40 md:h-64 bg-accent/20 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse"></div>
                  <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-56 md:w-80 h-56 md:h-80 bg-accent/10 rounded-full blur-[100px] md:blur-[150px] -z-10"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden lg:flex absolute bottom-10 right-10 items-center space-x-6"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[0.5em] opacity-30">SCROLL TO CODE</span>
            <div className="w-24 h-[1px] bg-black/20"></div>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="about" className="px-6 md:px-10 py-24 md:py-32">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:h-auto">
            {/* Column 1: Large Portrait */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl shadow-premium h-[450px] lg:h-[700px] cursor-pointer">
              <img src="/images/hero-model.png" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 transition-all duration-500">
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 transition-transform duration-500 group-hover:-translate-y-2">Background — 01</p>
                <h3 className="text-4xl md:text-6xl text-white uppercase leading-[0.85] tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">About <br /> <span className="font-serif-italic text-accent normal-case italic">Me</span></h3>

                <div className="overflow-hidden mt-4">
                  <p className="text-white/80 text-sm font-medium leading-relaxed opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    I am a multi-disciplinary Full Stack Developer obsessed with crafting performant, pixel-perfect user experiences. Blending deep technical expertise with a keen eye for design, I bridge the gap between engineering and aesthetics to build digital products that leave a lasting impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 & 3 */}
            <div className="lg:col-span-7 grid grid-rows-1 lg:grid-rows-[1.5fr_1fr] gap-6 lg:h-[700px]">
              <div className="relative group overflow-hidden rounded-2xl shadow-premium h-[350px] lg:h-full cursor-pointer">
                <img src="/images/mosaic-1.png" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-50" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <h3 className="text-3xl md:text-4xl text-white uppercase leading-[0.85] tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">My <span className="text-accent">Vision</span></h3>
                  <div className="overflow-hidden mt-2">
                    <p className="text-white/90 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      To engineer robust, scalable architectures that empower visionary brands to deliver seamless digital experiences globally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 auto-rows-[200px] lg:auto-rows-auto lg:h-full">
                <div className="relative group overflow-hidden rounded-2xl shadow-premium cursor-pointer">
                  <img src="/images/mosaic-2.png" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <h5 className="text-xl text-white font-bold uppercase tracking-tighter">Frontend</h5>
                    <p className="text-accent text-[10px] font-bold uppercase tracking-widest mt-1">React / Next.js</p>
                  </div>
                </div>
                <div className="bg-accent rounded-2xl p-6 md:p-8 flex flex-col justify-between text-white shadow-premium relative overflow-hidden group cursor-pointer">
                  <div className="relative z-10 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">03</div>
                  <div className="relative z-10">
                    <p className="text-xs font-bold uppercase leading-relaxed tracking-widest opacity-90 transition-transform duration-500 group-hover:-translate-y-2">Continuous <br /> Expansion</p>
                    <p className="text-[10px] text-white/70 font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mt-2">Always learning and adapting to the cutting edge.</p>
                  </div>
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000"></div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-premium cursor-pointer">
                  <img src="/images/cups.png" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <h5 className="text-xl text-white font-bold uppercase tracking-tighter">Backend</h5>
                    <p className="text-accent text-[10px] font-bold uppercase tracking-widest mt-1">AWS / Node</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Carousel */}
        <section id="projects" className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="flex flex-col mb-16 md:mb-24 px-6 md:px-10">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-accent mb-4">Selected Works</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0">
              <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.8]">Featured <br /> <span className="text-stroke">Projects</span></h2>
              <button className="text-[10px] font-extrabold uppercase tracking-[0.3em] border-b border-black pb-1 hover:text-accent hover:border-accent transition-all flex items-center gap-2 group/btn max-w-max">
                View All Work
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 px-6 md:px-10 pb-16 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { title: 'E-Commerce Platform', brand: 'NextStore', type: 'Full Stack', image: '/images/hero-model.png' },
              { title: 'Global Banking App', brand: 'FintechDash', type: 'Architecture', image: '/images/mosaic-1.png' },
              { title: 'Luxury Travel Booking', brand: 'WanderLuxe', type: 'Frontend', image: '/images/mosaic-2.png' },
              { title: 'Healthcare System UI', brand: 'MedCore', type: 'UI/Engineering', image: '/images/cups.png' }
            ].map((project, i) => (
              <div key={i} className="group flex flex-col w-[80vw] md:w-[45vw] lg:w-[32vw] shrink-0 snap-center">
                {/* Project Image Area */}
                <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-premium relative mb-5">
                  <img src={project.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>

                {/* Project Details Box */}
                <div className="flex flex-col flex-grow cursor-pointer">
                  <div className="flex justify-between items-center mb-4 md:mb-5">
                    <span className="text-accent text-xs md:text-sm font-bold uppercase tracking-widest">{project.type}</span>
                    <span className="text-text-muted/60 text-xs font-extrabold uppercase tracking-[0.4em] transition-colors group-hover:text-accent">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h4 className="text-3xl md:text-5xl font-bold uppercase leading-none mb-3 group-hover:text-accent transition-colors">{project.brand}</h4>
                  <p className="text-sm md:text-base font-medium text-text-muted leading-relaxed max-w-md mb-8 md:mb-10">{project.title}</p>

                  {/* Integrated Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-auto">
                    <a href="#" onClick={(e) => e.preventDefault()} className="border border-black text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 shrink-0">
                      Live View <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()} className="border border-black/10 text-text-muted px-6 md:px-8 py-3 md:py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:border-black hover:text-black transition-all flex items-center justify-center gap-2 shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise / Resume Section */}
        <section id="expertise" className="px-6 md:px-10 py-24 md:py-32 bg-dark text-white rounded-[2rem] md:rounded-[4rem] mx-4 md:mx-6 my-16 md:my-24 relative overflow-hidden">
          {/* Abstract Background Accent */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-bl from-accent/20 to-transparent blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-16 md:mb-24 gap-8 relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.8] w-full md:w-auto text-white">Technical <br /> <span className="text-accent font-serif-italic normal-case tracking-normal">Resume</span></h2>
            <div className="md:text-right w-full md:w-auto">
              <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white/40">Core Stack</p>
              <p className="text-sm text-white/70 max-w-sm md:ml-auto font-medium leading-relaxed">Advanced proficiency across modern frameworks, robust backend architecture, and seamless cloud integrations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 relative z-10 w-full mt-10 md:mt-16">

            {/* 1. Large Featured Bento: Frontend Engine */}
            <div className="lg:col-span-2 group relative bg-[#0f0f0f] border border-white/10 p-8 md:p-12 rounded-[2rem] overflow-hidden flex flex-col justify-between min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none"></div>
              {/* Animated glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-1000 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Frontend Engineering</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-accent group-hover:border-accent group-hover:rotate-45 transition-all duration-500 shadow-xl">
                    <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Crafting pixel-perfect <br className="hidden md:block" /> <span className="text-white/40">user experiences.</span></h4>
                  <p className="text-sm md:text-base font-medium text-white/50 leading-relaxed max-w-lg mb-8 group-hover:text-white/80 transition-colors duration-500">Architecting dynamic, highly-interactive client-side applications with an obsessive focus on rendering performance and smooth micro-animations.</p>

                  {/* Tool tags */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebGL'].map((tool, idx) => (
                      <span key={idx} className="px-4 py-2 bg-[#1a1a1a] border border-white/5 rounded-full text-xs font-semibold text-white/60 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-500 shadow-sm" style={{ transitionDelay: `${idx * 50}ms` }}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Small Bento: Backend Architecture */}
            <div className="lg:col-span-1 group relative bg-[#0f0f0f] border border-white/10 p-8 md:p-10 rounded-[2rem] overflow-hidden flex flex-col justify-between min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>
              {/* Animated glow */}
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] group-hover:bg-white/10 transition-all duration-1000 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-12 inline-block max-w-max">
                  <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Backend Systems</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="text-3xl font-bold tracking-tight text-white mb-4">Scalable <br /> API logic.</h4>
                  <p className="text-sm font-medium text-white/50 leading-relaxed max-w-xs mb-8 group-hover:text-white/80 transition-colors duration-500">Building secure, RESTful microservices and real-time data pipelines.</p>

                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'NestJS', 'GraphQL', 'Express', 'Redis'].map((tool, idx) => (
                      <span key={idx} className="px-3.5 py-1.5 bg-[#1a1a1a] border border-white/5 rounded-md text-xs font-semibold text-white/60 group-hover:border-accent/30 group-hover:text-accent transition-all duration-500">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Small Bento: Cloud / DevOps */}
            <div className="lg:col-span-1 group relative bg-[#0f0f0f] border border-white/10 p-8 md:p-10 rounded-[2rem] overflow-hidden flex flex-col justify-between min-h-[400px] lg:min-h-[450px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.05),_transparent_60%)] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 inline-block max-w-max relative z-20">
                  <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Cloud & DevOps</span>
                  </div>
                </div>

                {/* Visual Abstract Object */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-32 h-32 md:w-40 md:h-40 pointer-events-none">
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-110 group-hover:border-white/30 transition-all duration-1000 delay-100"></div>
                  <div className="absolute inset-4 rounded-full border border-white/10 group-hover:scale-125 group-hover:border-accent/40 transition-all duration-1000 delay-200"></div>
                  <div className="absolute inset-8 rounded-full border border-white/10 group-hover:scale-[1.4] group-hover:border-white/20 transition-all duration-1000 delay-300"></div>
                  <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] group-hover:shadow-[0_0_50px_rgba(255,255,255,1)] transition-all duration-500 z-10"><svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
                </div>

                <div className="mt-auto relative z-20">
                  <h4 className="text-3xl font-bold tracking-tight text-white mb-4">Immutable <br /> infra.</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Docker', 'Vercel', 'CI/CD'].map((tool, idx) => (
                      <span key={idx} className="px-4 py-2 bg-[#1a1a1a] border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:bg-white group-hover:text-black transition-all duration-500">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Large Bento: Databases */}
            <div className="lg:col-span-2 group relative bg-[#0f0f0f] border border-white/10 p-8 md:p-12 rounded-[2rem] overflow-hidden flex flex-col justify-between min-h-[400px] lg:min-h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none"></div>

              {/* Huge watermark text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-black text-white/[0.01] group-hover:text-white/[0.03] transition-colors duration-1000 tracking-tighter pointer-events-none whitespace-nowrap select-none">
                DATABASES
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Database Design</span>
                  </div>
                </div>

                <div className="mt-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
                  <div className="max-w-md">
                    <h4 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Relational & <br /><span className="text-white/40">NoSQL Stores.</span></h4>
                    <p className="text-sm md:text-base font-medium text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-500">Complex normalized relational schemas combined with blistering fast caching layers for instantaneous query execution.</p>
                  </div>

                  <div className="flex flex-wrap md:justify-end gap-3 shrink-0 max-w-[280px]">
                    {['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'].map((tool, idx) => (
                      <span key={idx} className="px-6 py-3 bg-[#1a1a1a] border border-white/5 rounded-2xl text-xs md:text-sm font-semibold text-white/60 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white group-hover:-translate-y-1 transition-all duration-500 shadow-xl" style={{ transitionDelay: `${idx * 100}ms` }}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 md:mt-24 flex justify-center relative z-10 w-full">
            <a href="/resume.txt" download className="bg-accent text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl flex items-center gap-3 hover:-translate-y-1">
              Download Full Resume
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 md:px-10 py-24 md:py-32 bg-[#eeeee4]">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24 px-4">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-accent mb-4 md:mb-6">Proven Track Record</span>
            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.8] mb-6 md:mb-8">Performance <br /> <span className="text-stroke">Metrics</span></h2>
            <p className="text-sm text-text-muted max-w-lg font-medium leading-relaxed">Delivering scalable software solutions that consistently outperform market expectations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { val: '50+', label: 'Projects Shipped', sub: 'Successful worldwide deployments.', bg: 'bg-stat-cyan' },
              { val: '1M+', label: 'Lines of Code', sub: 'Maintained and contributed.', bg: 'bg-stat-teal' },
              { val: '99%', label: 'Uptime Systems', sub: 'Highly available architectures.', bg: 'bg-stat-blue' }
            ].map((stat, i) => (
              <div key={i} className={`${stat.bg} p-10 md:p-16 rounded-2xl md:rounded-3xl h-[300px] md:h-[380px] flex flex-col justify-end shadow-premium border-subtle relative group overflow-hidden`}>
                <div className="absolute top-10 right-10 opacity-[0.03] text-7xl md:text-9xl font-bold">{stat.val}</div>
                <h3 className="text-5xl md:text-7xl font-bold mb-2 md:mb-4 tracking-tighter relative z-10">{stat.val}</h3>
                <h4 className="text-lg md:text-xl font-bold uppercase mb-2 tracking-widest relative z-10">{stat.label}</h4>
                <p className="text-xs text-text-muted font-semibold relative z-10 opacity-70">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="connect" className="px-6 md:px-10 py-32 md:py-52 pb-40 md:pb-64">
          <div className="bg-card-grey rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row lg:min-h-[700px] shadow-premium border border-black/5">
            <div className="w-full lg:w-5/12 group overflow-hidden relative h-[300px] lg:h-auto">
              <img src="/images/photographer.png" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-all"></div>
            </div>
            <div className="w-full lg:w-7/12 p-8 sm:p-16 lg:p-32 flex flex-col justify-center bg-white relative">
              <div className="hidden lg:block absolute top-12 right-20 text-[10px] font-bold opacity-20 tracking-widest">EST. 2024 / CB</div>
              <h2 className="text-4xl md:text-7xl font-bold uppercase mb-10 md:mb-16 leading-[0.85] tracking-tighter pt-8 lg:pt-0">Collaborate With <br /><span className="text-accent font-serif-italic normal-case tracking-normal">Charan Raj</span></h2>
              <form className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-extrabold uppercase tracking-widest opacity-40 ml-4 md:ml-6 block">Full Name</label>
                    <input type="text" placeholder="JANE DOE" className="w-full px-6 md:px-10 py-5 md:py-7 rounded-full bg-light border-subtle text-[10px] md:text-[10px] font-extrabold focus:bg-white focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-black/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-extrabold uppercase tracking-widest opacity-40 ml-4 md:ml-6 block">Project Type</label>
                    <input type="text" placeholder="E-commerce App" className="w-full px-6 md:px-10 py-5 md:py-7 rounded-full bg-light border-subtle text-[10px] md:text-[10px] font-extrabold focus:bg-white focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-black/20" />
                  </div>
                </div>
                <button type="button" className="w-full py-6 md:py-8 bg-accent text-white rounded-full text-[10px] font-bold uppercase tracking-[0.4em] hover:brightness-110 hover:shadow-premium transition-all">Submit Inquiry</button>
                <p className="text-center text-[9px] font-extrabold uppercase tracking-[0.2em] opacity-40 mt-8 md:mt-10">Available for remote contracts worldwide.</p>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-10 py-16 md:py-20 border-t border-black/5 flex flex-col space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            <div className="text-xs font-bold uppercase tracking-[0.4em] text-center md:text-left">Charan Raj B</div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:space-x-12 text-[10px] font-extrabold uppercase tracking-[0.2em]">
              {['GitHub', 'LinkedIn', 'Twitter', 'Journal', 'Contact'].map(link => (
                <Link key={link} href="#" className="hover:text-accent transition-all opacity-40 hover:opacity-100">{link}</Link>
              ))}
            </div>
            <div className="flex space-x-4">
              {['GH', 'IN'].map(social => (
                <span key={social} className="w-10 h-10 md:w-12 md:h-12 border border-black/10 rounded-full flex items-center justify-center text-[10px] font-bold hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm">{social}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 opacity-30 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-center md:text-left">
            <p>© 2024 Charan Raj B — Software Engineering</p>
            <p>Built for Performance</p>
          </div>
        </footer>
      </main>
    </>
  )
}
