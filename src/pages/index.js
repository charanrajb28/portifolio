import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiWebgl, SiNodedotjs, SiSocketdotio, SiGraphql, SiExpress, SiRedis, SiDocker, SiVercel, SiGithubactions, SiPostgresql, SiMongodb, SiPrisma, SiFirebase, SiSpringboot } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function Home() {
  const mainContainer = useRef()

  useGSAP(() => {
    // Luxury Typography Reveal
    const headings = gsap.utils.toArray('h2, h3, .luxury-text')
    headings.forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out'
      })
    })

    // Section Parallax/Reveal
    const sections = gsap.utils.toArray('section')
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'expo.out'
      })
    })

    // Hero Specific Luxury Entrance
    gsap.from('.hero-reveal', {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
      ease: 'power4.out',
      delay: 0.5
    })
  }, { scope: mainContainer })

  const Magnetic = ({ children }) => {
    const magneticRef = useRef(null)

    useGSAP(() => {
      const xTo = gsap.quickTo(magneticRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
      const yTo = gsap.quickTo(magneticRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        const { height, width, left, top } = magneticRef.current.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        xTo(x * 0.35)
        yTo(y * 0.35)
      }

      const handleMouseLeave = () => {
        xTo(0)
        yTo(0)
      }

      magneticRef.current.addEventListener("mousemove", handleMouseMove)
      magneticRef.current.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        if (magneticRef.current) {
          magneticRef.current.removeEventListener("mousemove", handleMouseMove)
          magneticRef.current.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    }, { scope: magneticRef })

    return <div ref={magneticRef}>{children}</div>
  }
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
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          // Trigger exit only after reaching 100
          setTimeout(() => setIsLoading(false), 800)
          return 100
        }
        return prev + 1
      })
    }, 25) // Smooth 2.5s climb to 100%

    // Hard reset scroll to top on reload for animation consistency
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual'
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
      })
    }

    const clockTimer = setInterval(() => {
      const istTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setTime(istTime)
    }, 1000)

    return () => {
      clearInterval(clockTimer)
      clearInterval(interval)
    }
  }, [])

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "b6d87926-1570-4cdc-bbc5-a894b3bced0c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Head>
        <title>Charan Raj B | Full Stack Developer</title>
        <meta name="description" content="High-performance full-stack engineer and digital architect." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[999] pointer-events-auto overflow-hidden bg-transparent"
          >
            {/* Shutter Panels */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                exit={{ 
                  y: '-100%',
                  transition: { 
                    duration: 1.2, 
                    ease: [0.19, 1, 0.22, 1], 
                    delay: 0.1 * i + 0.5 
                  }
                }}
                className="absolute top-0 h-full bg-[#0a0a0a]"
                style={{ 
                  left: `${i * 20}%`, 
                  width: '20.1%', 
                  zIndex: -1
                }}
              />
            ))}

            <motion.div 
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
              className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 text-white"
            >
              {/* Header Info */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-accent text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em]">System_Boot</span>
                  <span className="text-white/20 text-[8px] font-mono uppercase tracking-widest">Build_V4.0.2_Kinetic</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/20 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] font-mono hidden sm:block">Initializing_Data_Stream</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]"></div>
                </div>
              </div>

              {/* Central Identity */}
              <div className="flex flex-col items-center text-center">
                <div className="overflow-hidden mb-4">
                  <motion.h2 
                    initial={{ y: 150 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                    className="text-[12vw] md:text-[7vw] font-black uppercase tracking-tighter leading-none"
                  >
                    Charan Raj <span className="text-accent">B</span>
                  </motion.h2>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="h-[2px] w-32 md:w-48 bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: progress / 100 }}
                      transition={{ ease: "linear" }}
                      className="absolute inset-0 bg-accent origin-left"
                    />
                  </div>
                  <span className="text-white/20 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] font-mono max-w-xs leading-relaxed">
                    Preparing_The_Digital_Frontier
                  </span>
                </div>
              </div>

              {/* Counter & Footer */}
              <div className="flex justify-between items-end">
                <div className="flex items-baseline gap-4">
                  <motion.span 
                    className="text-[15vw] md:text-[10vw] font-black leading-none tracking-tighter"
                  >
                    {progress.toString().padStart(2, '0')}
                  </motion.span>
                  <span className="text-accent text-3xl md:text-5xl font-black">%</span>
                </div>
                
                <div className="flex flex-col items-end gap-2 text-right">
                  <div className="flex flex-col">
                    <span className="text-white/20 text-[8px] font-mono">LAT: 12.9716° N</span>
                    <span className="text-white/20 text-[8px] font-mono">LON: 77.5946° E</span>
                  </div>
                  <div className="h-px w-12 bg-white/20"></div>
                  <span className="text-white/40 text-[8px] font-mono uppercase tracking-widest">Status: Ready</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grain-overlay"></div>

      <main ref={mainContainer} className="min-h-screen">
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
                  { name: 'Experience', id: 'experience' },
                  { name: 'Connect', id: 'connect' }
                ].map((link, i) => (
                  <Magnetic key={link.name}>
                    <a
                      href={`#${link.id}`}
                      className="text-[9px] font-bold uppercase tracking-[0.4em] text-black hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {link.name}
                    </a>
                  </Magnetic>
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
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  className="text-[10vw] lg:text-[7vw] font-bold uppercase leading-[0.8] tracking-tighter mb-8 md:mb-10 overflow-hidden"
                >
                  {"Charan Raj ".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={item}
                      className="inline-block"
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  <motion.span
                    variants={item}
                    className="text-stroke inline-block"
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    B
                  </motion.span>
                  <br />
                  <motion.span
                    variants={item}
                    className="font-serif-italic text-accent normal-case tracking-normal block mt-2 md:mt-4 text-xl md:text-2xl lg:text-3xl"
                  >
                    Full Stack Developer
                  </motion.span>
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

                <motion.div variants={item} className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-14">
                  <div className="flex flex-col space-y-4 hero-reveal">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] opacity-30">Connect</span>
                    <div className="flex gap-4">
                      {[
                        { id: 'GH', url: 'https://github.com/charanrajb28', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
                        { id: 'LI', url: 'https://www.linkedin.com/in/charan-raj-a315ab251/', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.154z" /></svg> },
                        { id: 'X', url: 'https://x.com/charanraj282004', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> }
                      ].map(social => (
                        <motion.a
                          key={social.id}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
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

                  <div className="hidden sm:block w-[1px] h-20 bg-black/5 hero-reveal"></div>

                  <div className="flex flex-col space-y-4 hero-reveal">
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
                    <div className="relative w-full aspect-[5/6] z-10">
                      {/* Depth Layer 1: Blurred Ghost */}
                      <div className="absolute inset-4 bg-accent/5 rounded-[40px] blur-2xl scale-95 group-hover:scale-105 group-hover:bg-accent/10 transition-all duration-1000"></div>

                      {/* Depth Layer 2: Main Image Frame */}
                      <div className="relative w-full h-full overflow-hidden rounded-[40px] shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-1">
                        <img
                          src="/image.png"
                          alt="Charan Raj B Portfolio Portrait"
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
                      href="/charan_raj_b_intern_resume.pdf"
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
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:grid-rows-[1.6fr_1fr] gap-6 lg:h-[800px]">
            {/* 1. Large Portrait: Spans 5 columns and both rows */}
            <motion.div
              whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
              className="lg:col-span-5 lg:row-span-2 relative group overflow-hidden rounded-2xl shadow-premium h-[450px] lg:h-full cursor-pointer"
            >
              <img src="/image1.png" alt="About Charan Raj B" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 transition-all duration-500">
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 transition-transform duration-500 group-hover:-translate-y-2 font-mono">Profile // 01</p>
                <h3 className="text-4xl md:text-6xl text-white uppercase leading-[0.85] tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">About <br /> <span className="font-serif-italic text-accent normal-case italic">Me</span></h3>

                <div className="overflow-hidden mt-4">
                  <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    Currently in my 4th year of CS Engineering at Sir MVIT, Bangalore. I am a Full-Stack Developer driven by complex problem-solving. With deep expertise in Java, React, and MongoDB, I build systems that matter—from decentralized document-sharing and real-time communication platforms to routing engines and disaster detection solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2. Education Card: Spans 7 columns in the top row */}
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="lg:col-span-7 lg:row-span-1 relative group overflow-hidden rounded-2xl shadow-premium cursor-pointer h-[350px] lg:h-full"
            >
              <img src="/images/college.png" alt="Sir M. Visvesvaraya Institute of Technology" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-[0.3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest font-mono">Education</p>
                    <h5 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white">Sir M. Visvesvaraya Institute of Technology</h5>
                  </div>
                  <div className="px-4 py-2 border border-accent/30 rounded-full text-accent font-mono text-sm font-bold">GPA: 8.5</div>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 border-t border-white/10">
                  <p className="text-white/80 text-sm font-medium leading-relaxed max-w-md">
                    B.E. in Computer Science and Engineering. Specialized in architecting robust digital systems and high-performance algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['DSA', 'Backend', 'Frontend'].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded-sm text-[9px] font-mono text-white/40 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Vision Card: Spans 5 columns in the bottom row */}
            <motion.div
              whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
              className="lg:col-span-5 lg:row-span-1 relative group overflow-hidden rounded-2xl shadow-premium h-[300px] lg:h-full cursor-pointer"
            >
              <img src="/images/vision.png" alt="Strategic Vision" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-50" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl text-white uppercase leading-[0.85] tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">Vision & <span className="text-accent">Drive</span></h3>
                <div className="overflow-hidden mt-2">
                  <p className="text-white/90 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    To constantly push the limits of modern software engineering. Whether I&apos;m competing in high-stakes hackathons, contributing to open-source, or conducting applied research, my goal is to evolve rapidly and build impactful technology.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 4. Languages Card: Spans remaining 2 columns in the bottom row */}
            <div className="lg:col-span-2 lg:row-span-1 bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-center text-white shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-500 hover:border-accent/30 h-[250px] lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-[9px] font-mono font-bold text-accent transition-all duration-500 group-hover:border-accent group-hover:rotate-[360deg]">LANG</div>

              <div className="relative z-10 mt-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-accent transition-colors duration-500">Stack</p>
                  <h4 className="text-lg font-bold tracking-tighter font-mono">Linguistic</h4>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'English', level: '90%', label: 'Prof' },
                    { name: 'Kannada', level: '100%', label: 'Native' },
                    { name: 'Hindi', level: '75%', label: 'Conv' }
                  ].map((lang, idx) => (
                    <div key={idx} className="space-y-1 group/lang">
                      <div className="flex justify-between items-end">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-white group-hover/lang:text-accent transition-colors">{lang.name}</span>
                        <span className="text-[7px] font-mono text-white/40">{lang.label}</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: lang.level }}
                          transition={{ duration: 1.5, delay: 0.5 + (idx * 0.1) }}
                          className="h-full bg-accent group-hover/lang:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-accent/10 rounded-full blur-[60px] group-hover:bg-accent/20 transition-all duration-700"></div>
            </div>
          </div>
        </section>

        {/* Projects Section - Carousel */}
        <section id="projects" className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="flex flex-col mb-16 md:mb-24 px-6 md:px-10">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-accent mb-4">Selected Works</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0">
              <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.8] mb-4">
                {"Featured Projects".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.6, ease: "circOut" }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h2>
              <Magnetic>
                <button className="text-[10px] font-extrabold uppercase tracking-[0.3em] border-b border-black pb-1 hover:text-accent hover:border-accent transition-all flex items-center gap-2 group/btn max-w-max">
                  View All Work
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </Magnetic>
            </div>
          </div>

          <div
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 px-6 md:px-10 pb-16 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              {
                title: 'Advanced chess training environment with real-time interactive capabilities.',
                brand: 'Chess Academy',
                type: 'Interactive Platform',
                image: '/images/chess.png',
                url: 'https://chess-platfrom.vercel.app/',
                tech: [
                  { name: 'Next.js', icon: <SiNextdotjs /> },
                  { name: 'Firebase', icon: <SiFirebase /> },
                  { name: 'WebSocket', icon: <SiSocketdotio /> }
                ]
              },
              {
                title: 'Full-stack resource management system for enterprise-grade hardware tracking.',
                brand: 'Bio Track',
                type: 'Tracing System',
                image: '/images/biotrack.png',
                url: 'https://equipment-appliaction-project-1.onrender.com',
                tech: [
                  { name: 'Spring Boot', icon: <SiSpringboot /> },
                  { name: 'Next.js', icon: <SiNextdotjs /> },
                  { name: 'PostgreSQL', icon: <SiPostgresql /> }
                ]
              },
              {
                title: 'Scalable community hub designed for high-stakes competition and hackathons.',
                brand: 'Hackaybe',
                type: 'Community Hub',
                image: '/images/hackaybe.png',
                url: 'https://www.hackaybe.space/',
                tech: [
                  { name: 'Vercel', icon: <SiVercel /> },
                  { name: 'Next.js', icon: <SiNextdotjs /> },
                  { name: 'AWS', icon: <FaAws /> },
                  { name: 'Postgres', icon: <SiPostgresql /> }
                ]
              },
              {
                title: 'Low-latency real-time messaging engine with persistent data synchronization.',
                brand: 'Nexus Chat',
                type: 'Communication Engine',
                image: '/images/chatting.png',
                url: 'https://chatting-application-f202.onrender.com',
                tech: [
                  { name: 'Node.js', icon: <SiNodedotjs /> },
                  { name: 'WebSockets', icon: <SiSocketdotio /> },
                  { name: 'Firebase', icon: <SiFirebase /> },
                  { name: 'MongoDB', icon: <SiMongodb /> }
                ]
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10 }}
                className="group flex flex-col w-[85vw] md:w-[50vw] lg:w-[35vw] shrink-0 snap-center"
              >
                {/* Project Image Area */}
                <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-premium relative mb-6">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    src={project.image}
                    alt={project.brand}
                    className="w-full h-full object-cover transition-grayscale grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500"></div>

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {project.tech.map(t => (
                      <span key={t.name} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/80 backdrop-blur-md text-[8px] font-bold text-white uppercase tracking-widest rounded-sm border border-white/10">
                        <span className="text-accent text-xs">{t.icon}</span>
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details Box */}
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{project.type}</span>
                    <span className="text-black/20 text-xs font-mono font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>

                  <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4 group-hover:text-accent transition-colors duration-300">
                    {project.brand}
                  </h4>

                  <p className="text-sm font-medium text-black/60 leading-relaxed mb-8 h-12 line-clamp-2">
                    {project.title}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-auto">
                    <Magnetic>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative h-12 px-8 overflow-hidden rounded-full bg-black text-white flex items-center justify-center gap-3 transition-all duration-500 hover:scale-105 active:scale-95"
                      >
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                        <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">View Project</span>
                        <svg className="relative z-10 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </Magnetic>

                    <div className="flex items-center gap-2">
                      {project.tech.map((t, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="w-8 h-8 rounded-full border border-black/5 bg-black/[0.02] flex items-center justify-center text-black/40 hover:text-accent hover:border-accent/30 transition-all duration-300"
                          title={t.name}
                        >
                          <span className="text-sm">{t.icon}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
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
                  <div className="flex flex-wrap gap-4 md:gap-5 mt-6">
                    {[
                      { name: 'React', svg: <SiReact className="w-full h-full" /> },
                      { name: 'Next.js', svg: <SiNextdotjs className="w-full h-full" /> },
                      { name: 'TypeScript', svg: <SiTypescript className="w-full h-full" /> },
                      { name: 'Tailwind CSS', svg: <SiTailwindcss className="w-full h-full" /> },
                      { name: 'Framer', svg: <SiFramer className="w-full h-full" /> },
                      { name: 'WebGL', svg: <SiWebgl className="w-full h-full" /> }
                    ].map((tool, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col items-center gap-2.5 group/icon cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                          title={tool.name}
                          className="w-12 h-12 md:w-14 md:h-14 bg-[#1a1a1a] border border-white/5 rounded-full flex items-center justify-center text-white/50 group-hover/icon:bg-[#222] group-hover/icon:text-accent group-hover/icon:border-accent/30 transition-all duration-300 shadow-sm shadow-accent/0 group-hover/icon:shadow-accent/20 group-hover/icon:-translate-y-1"
                        >
                          <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
                            {tool.svg}
                          </div>
                        </motion.div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/30 group-hover/icon:text-white transition-colors duration-300">{tool.name}</span>
                      </motion.div>
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

                  <div className="flex flex-wrap gap-4 md:gap-5 mt-6">
                    {[
                      { name: 'Node.js', svg: <SiNodedotjs className="w-full h-full" /> },
                      { name: 'WebSockets', svg: <SiSocketdotio className="w-full h-full" /> },
                      { name: 'GraphQL', svg: <SiGraphql className="w-full h-full" /> },
                      { name: 'Express', svg: <SiExpress className="w-full h-full" /> },
                      { name: 'Redis', svg: <SiRedis className="w-full h-full" /> }
                    ].map((tool, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2.5 group/icon cursor-pointer" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <div title={tool.name} className="w-12 h-12 md:w-14 md:h-14 bg-[#1a1a1a] border border-white/5 rounded-full flex items-center justify-center text-white/50 group-hover/icon:bg-[#222] group-hover/icon:text-accent group-hover/icon:border-accent/30 transition-all duration-300 shadow-sm group-hover/icon:scale-110 group-hover/icon:-translate-y-1">
                          <div className="w-6 h-6 flex items-center justify-center">
                            {tool.svg}
                          </div>
                        </div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/30 group-hover/icon:text-white transition-colors duration-300">{tool.name}</span>
                      </div>
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
                  <div className="flex flex-wrap gap-4 md:gap-5 mt-6">
                    {[
                      { name: 'AWS', svg: <FaAws className="w-full h-full" /> },
                      { name: 'Docker', svg: <SiDocker className="w-full h-full" /> },
                      { name: 'Vercel', svg: <SiVercel className="w-full h-full" /> },
                      { name: 'CI/CD', svg: <SiGithubactions className="w-full h-full" /> }
                    ].map((tool, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2.5 group/icon cursor-pointer" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <div title={tool.name} className="w-12 h-12 md:w-14 md:h-14 bg-[#1a1a1a] border border-white/5 rounded-full flex items-center justify-center text-white/50 group-hover/icon:bg-[#222] group-hover/icon:text-accent group-hover/icon:border-accent/30 transition-all duration-300 shadow-sm group-hover/icon:scale-110 group-hover/icon:-translate-y-1">
                          <div className="w-6 h-6 flex items-center justify-center">
                            {tool.svg}
                          </div>
                        </div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/30 group-hover/icon:text-white transition-colors duration-300">{tool.name}</span>
                      </div>
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

                  <div className="flex flex-wrap md:justify-end gap-4 md:gap-6 shrink-0 max-w-[360px] mt-6">
                    {[
                      { name: 'PostgreSQL', svg: <SiPostgresql className="w-full h-full" /> },
                      { name: 'MongoDB', svg: <SiMongodb className="w-full h-full" /> },
                      { name: 'Redis', svg: <SiRedis className="w-full h-full" /> },
                      { name: 'Prisma ORM', svg: <SiPrisma className="w-full h-full" /> }
                    ].map((tool, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2.5 group/icon cursor-pointer" style={{ transitionDelay: `${idx * 100}ms` }}>
                        <div title={tool.name} className="w-14 h-14 md:w-16 md:h-16 bg-[#1a1a1a] border border-white/5 rounded-full flex items-center justify-center text-white/50 group-hover/icon:bg-[#222] group-hover/icon:text-accent group-hover/icon:border-accent/30 transition-all duration-300 shadow-xl group-hover/icon:scale-110 group-hover/icon:-translate-y-1">
                          <div className="w-7 h-7 flex items-center justify-center">
                            {tool.svg}
                          </div>
                        </div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/30 group-hover/icon:text-white transition-colors duration-300">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 md:mt-24 flex justify-center relative z-10 w-full">
            <a href="/charan_raj_b_intern_resume.pdf" download className="bg-accent text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl flex items-center gap-3 hover:-translate-y-1">
              Download Full Resume
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          </div>
        </section>

        {/* Experience Section: Career Matrix */}
        <section id="experience" className="px-6 md:px-10 py-24 md:py-32 bg-[#eeeee4] relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 md:gap-0 mb-20 md:mb-32">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.5em] text-accent mb-6 block">Career_Trajectory</span>
                <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85]">
                  {"Work Experience".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
                      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.02, duration: 0.8, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </h2>
              </div>
              <div className="flex flex-col gap-6 max-w-sm">
                <p className="text-sm md:text-base font-medium leading-relaxed opacity-50">
                  A chronological timeline of high-impact engineering roles, technical leadership, and digital infrastructure developments.
                </p>
                <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-[0.3em] opacity-40">
                  <div className="w-2 h-2 rounded-full border border-black/50"></div>
                  <span>Hover to inspect records</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col border-t-2 border-black w-full">
              {[
                {
                  role: 'Full Stack Developer',
                  company: 'Mentxtv',
                  period: 'Internship',
                  tags: ['Architecture', 'Full Stack Development', 'Optimization'],
                  desc: 'Designed and engineered end-to-end full stack solutions. Focused on optimizing system architecture, enhancing database performance, and building resilient API infrastructures for scalable applications.'
                },
                {
                  role: 'Software Engineer',
                  company: 'Sisuni',
                  period: 'Internship',
                  tags: ['System Integration', 'UI/UX Implementation', 'Debugging'],
                  desc: 'Collaborated with cross-functional teams to deploy functional software modules. Responsible for system integration, frontend logic implementation, and rigorous performance testing and debugging.'
                },
                {
                  role: 'Independent Developer',
                  company: 'Fiverr',
                  period: 'Freelance',
                  tags: ['Client Delivery', 'Custom Solutions', 'Rapid Prototyping'],
                  desc: 'Architected and delivered bespoke web solutions for international clients. Handled full project lifecycles from requirement gathering to rapid prototyping and final production deployment.'
                }
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  className="group relative border-b border-black/10 flex flex-col lg:flex-row lg:items-center py-12 md:py-16 gap-6 lg:gap-0 hover:bg-[#0a0a0a] hover:text-white transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] px-6 lg:px-12 -mx-6 lg:-mx-12 cursor-pointer overflow-hidden"
                >

                  {/* Interaction Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-0 md:w-1.5 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom ease-[cubic-bezier(0.19,1,0.22,1)]"></div>

                  {/* Period Column */}
                  <div className="lg:w-3/12 relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                    <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-accent transition-colors">{exp.period}</span>
                  </div>

                  {/* Title Column */}
                  <div className="lg:w-5/12 relative z-10 flex flex-col pr-8 transition-transform duration-500 delay-75 group-hover:translate-x-2">
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-3 duration-500 ease-out">{exp.role}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-70 transition-opacity">_{exp.company}</span>
                  </div>

                  {/* Details Column */}
                  <div className="lg:w-4/12 flex flex-col relative z-10 transition-transform duration-500 delay-100 group-hover:translate-x-2">
                    <div className="flex gap-2 mb-4 hidden md:flex flex-wrap">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-mono font-bold border border-black/10 group-hover:border-white/20 rounded-full px-3 py-1 uppercase tracking-[0.2em] transition-colors">{tag}</span>
                      ))}
                    </div>
                    <p className="text-xs md:text-sm font-medium leading-relaxed opacity-50 group-hover:opacity-80 transition-opacity">
                      {exp.desc}
                    </p>
                  </div>

                  {/* Floating Decorative Crosshair */}
                  <div className="absolute top-1/2 right-12 -translate-y-1/2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-700 rotate-90 group-hover:rotate-0 hidden lg:block text-accent">
                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-accent -translate-y-1/2"></span>
                    <span className="absolute top-0 left-1/2 w-[2px] h-full bg-accent -translate-x-1/2"></span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Blueprint Contact Section */}
        <section id="connect" className="px-6 md:px-10 py-24 md:py-32 relative overflow-hidden bg-white">
          {/* Millimeter Grid Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header: Technical Index */}
            <div className="flex items-center gap-6 mb-20 md:mb-32">
              <span className="text-[10px] font-mono font-black text-accent uppercase tracking-[0.5em]">Section_05 // Connect</span>
              <div className="flex-1 h-px bg-black opacity-5"></div>
              <span className="text-[10px] font-mono opacity-20 uppercase tracking-widest hidden md:block">Lat: 12.9716° N // Lon: 77.5946° E</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

              {/* Column 1: The Narrative & Status */}
              <div className="lg:col-span-5 space-y-16">
                <div>
                  <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.8] mb-8">
                    {"Initiate Brief".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.6 }}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </h2>
                  <p className="text-sm md:text-base font-medium leading-relaxed opacity-50 max-w-sm">
                    Currently accepting high-stakes engineering projects and strategic infrastructure partnerships.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-20">System_Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-bold uppercase tracking-widest">Ready_to_Build</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-20">Current_Sync</span>
                    <span className="text-xs font-mono font-bold tracking-tight">{time}</span>
                  </div>
                </div>
              </div>

              {/* Column 2: The Action Hub */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                  {/* Presence Slices */}
                  <div className="flex flex-col gap-10">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-20">Digital_Presence</span>
                    <div className="flex flex-col gap-4">
                      {[
                        { name: 'GitHub', url: 'https://github.com/charanrajb28', id: 'gh-link', label: 'Source_Control' },
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/charan-raj-a315ab251/', id: 'li-link', label: 'Network_Professional' },
                        { name: 'X (Twitter)', url: 'https://x.com/charanraj282004', id: 'tw-link', label: 'Public_Broadcast' }
                      ].map(link => (
                        <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 border-b border-black/5 hover:border-accent transition-all duration-500">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold uppercase tracking-widest group-hover:text-accent transition-colors">{link.name}</span>
                            <span className="text-[7px] font-mono opacity-20 uppercase tracking-[0.3em] font-black translate-y-1 group-hover:translate-y-0 group-hover:opacity-60 transition-all">{link.label}</span>
                          </div>
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Form */}
                  <div className="flex flex-col gap-10">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-20">Inquiry_Buffer</span>
                    <form onSubmit={onSubmit} className="space-y-8">
                      <div className="space-y-4">
                        <div className="relative group">
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="ID // EMAIL"
                            className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent py-4 outline-none text-xs font-black uppercase tracking-widest transition-all placeholder:opacity-20"
                          />
                          <div className="absolute top-0 right-0 text-[7px] font-mono opacity-0 group-focus-within:opacity-30 uppercase tracking-widest">Required</div>
                        </div>
                        <div className="relative group">
                          <textarea
                            name="message"
                            required
                            rows="3"
                            placeholder="BRIEF..."
                            className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent py-4 outline-none text-xs font-black uppercase tracking-widest transition-all placeholder:opacity-20 resize-none"
                          />
                          <div className="absolute top-0 right-0 text-[7px] font-mono opacity-0 group-focus-within:opacity-30 uppercase tracking-widest">Message_Body</div>
                        </div>
                      </div>

                      {result && (
                        <div className={`text-[10px] font-mono font-bold uppercase tracking-widest ${result.includes('Successfully') ? 'text-green-500' : 'text-accent'}`}>
                          {result}
                        </div>
                      )}

                      <button type="submit" className="group flex items-center gap-6 py-6 px-10 bg-black text-white rounded-xl hover:bg-accent transition-all duration-500 hover:scale-[1.02] shadow-2xl disabled:opacity-50" disabled={result === "Sending..."}>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Execute_Request</span>
                        <div className="w-8 h-px bg-white/30 group-hover:w-12 transition-all"></div>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

            </div>

            {/* Terminal Decorations */}
            <div className="mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-20">
              <div className="flex items-center gap-6 text-[8px] font-mono font-black uppercase tracking-widest">
                <span>Port_8080: Open</span>
                <span>Protocol: SSH_JS</span>
                <span>Encryption: 256_AES</span>
              </div>
              <span className="text-[8px] font-mono font-black uppercase tracking-widest">Inbound_Session_001_Active</span>
            </div>
          </div>
        </section>

        {/* Premium Command Footer - Dark Edition */}
        <footer className="px-6 md:px-10 py-16 md:py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
          {/* Subtle Background Mark */}
          <div className="absolute inset-x-0 -bottom-4 md:-bottom-8 flex justify-center items-end pointer-events-none select-none overflow-hidden pb-4">
            <motion.span
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.04 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="text-[25vw] md:text-[21vw] font-black uppercase tracking-tighter leading-[0.75] text-white whitespace-nowrap"
            >
              CHARAN
            </motion.span>
          </div>

          <div className="flex flex-col gap-20 relative z-10">
            {/* Top Hub: Navigation & Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4 flex flex-col space-y-8">
                <div className="text-xl md:text-2xl font-black uppercase tracking-tighter">Charan Raj <span className="text-accent">B</span></div>
                <div className="flex flex-col space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent opacity-80">Architecture</span>
                  <p className="text-sm font-medium leading-relaxed opacity-40 max-w-xs">
                    Specialized in building high-performance, scalable digital infrastructure with an aesthetic-first mindset.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 grid grid-cols-2 gap-8">
                <div className="flex flex-col space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent opacity-80">Explore</span>
                  <div className="flex flex-col space-y-3">
                    {['About', 'Projects', 'Expertise', 'Experience'].map(item => (
                      <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-all duration-300 w-fit opacity-60 hover:opacity-100">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent opacity-80">Status Update</span>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-bold uppercase tracking-widest opacity-80">Active // Remote</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-mono opacity-30 uppercase">Local Time (IST)</span>
                      <span className="text-xs font-mono font-bold text-accent">{time}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 flex flex-col md:items-end space-y-8">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent opacity-80">Social Hub</span>
                <div className="flex gap-4">
                  {[
                    { id: 'GH', url: 'https://github.com/charanrajb28', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
                    { id: 'LI', url: 'https://www.linkedin.com/in/charan-raj-a315ab251/', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.154z" /></svg> },
                    { id: 'X', url: 'https://x.com/charanraj282004', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> }
                  ].map(social => (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1, backgroundColor: 'var(--accent)', color: 'white' }}
                      className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center bg-white/5 transition-all duration-300 shadow-sm text-white"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Credit Line */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest opacity-20">
                <span>© 2024</span>
                <div className="w-1 h-1 rounded-full bg-white/20"></div>
                <span>Engineered by Charan Raj B</span>
              </div>

              <div className="flex items-center gap-8 font-mono text-[9px] font-bold uppercase tracking-[0.2em] opacity-30">
                <div className="flex gap-2">
                  <span className="text-accent">VER</span>
                  <span>4.0.2_KINETIC</span>
                </div>
                <div className="hidden md:flex gap-2">
                  <span className="text-accent">LOC</span>
                  <span>12.9716° N // 77.5946° E</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
