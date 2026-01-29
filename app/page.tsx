import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      {/* Temporary spacer to verify scroll behavior */}
      <div className="h-screen flex items-center justify-center bg-[#050505] text-white/20">
          <p className="text-xl">Next Section: Problem Statement</p>
      </div>
    </main>
  );
}
