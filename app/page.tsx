import {
  Navbar,
  MobileNavbar, // Importing the new MobileNavbar
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Achievements,
  Contact,
} from "@/components";

// ============================================================
// MAIN PAGE
// ============================================================

export default function Home() {
  return (
    <main className="relative snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden no-scrollbar">

      {/* Navigation */}
      <Navbar />
      <MobileNavbar />

      {/* Page Sections - Each is a snap target */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />

    </main>
  );
}
