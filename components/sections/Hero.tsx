"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const yText = useTransform(scrollY, [0, 1000], [0, 400]);
  const yBg = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">

        {/* Background Effects */}
        <motion.div
            style={{ y: yBg, opacity: 0.6 }}
            className="absolute inset-0 z-0 pointer-events-none"
        >
             {/* Abstract Aurora Blobs */}
            <motion.div
               animate={{
                 scale: [1, 1.2, 1],
                 opacity: [0.3, 0.5, 0.3],
                 x: [0, 20, 0],
                 y: [0, -20, 0]
               }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[var(--royal-blue)] rounded-full mix-blend-screen blur-[120px]"
            />
            <motion.div
               animate={{
                 scale: [1, 1.1, 1],
                 opacity: [0.3, 0.5, 0.3],
                 x: [0, -30, 0]
               }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[var(--cyber-purple)] rounded-full mix-blend-screen blur-[120px]"
            />

            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-white opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </motion.div>

        {/* Content */}
        <motion.div
            style={{ y: yText, opacity, scale }}
            className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center"
        >
             {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-md"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Trusted by Enterprises & Government
            </motion.div>

            {/* Headline */}
            <h1 className="max-w-6xl text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] md:leading-[1.1]">
                <SplitText>We Engineer Digital Systems That</SplitText>
                <span className="text-gradient-metallic block mt-2">Run Businesses.</span>
            </h1>

            {/* Subtext */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12"
            >
                Enterprise-grade Web, Mobile App & SaaS Systems designed for automation, scale, and long-term business growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1, duration: 1 }}
                 className="flex flex-col sm:flex-row gap-6 items-center"
            >
                <MagneticButton className="group relative">
                     <button className="px-8 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-gray-200 transition-colors cursor-pointer">
                        Book Strategic Consultation
                     </button>
                </MagneticButton>

                 <button className="px-8 py-4 text-white font-medium hover:text-gray-300 transition-colors underline decoration-transparent hover:decoration-white underline-offset-4 transition-all duration-300 cursor-pointer">
                    Get System Blueprint
                 </button>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

function SplitText({ children }: { children: string }) {
    const words = children.split(" ");
    return (
        <span className="inline-flex flex-wrap justify-center gap-x-[0.25em]">
             {words.map((word, i) => (
                 <span className="overflow-hidden inline-block" key={i}>
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 + (0.1 * i), duration: 1, ease: [0.25, 1, 0.5, 1] }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                 </span>
             ))}
        </span>
    )
}
