"use client";

import { useState } from "react";
import { Section } from "lucide-react";
import RealEstateProject from "./RealEstateProject";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#090909]">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden bg-[#52002f]"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Cover.png')",
          }}
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-[#52002f]/10" />

        {/* =======================================================
            NAVBAR
        ======================================================== */}
        <header className="relative z-30 flex w-full items-center justify-between px-6 py-8 min-[480px]:px-10 sm:px-14 lg:px-20 xl:px-24">
          {/* Logo */}
          <a
            href="#home"
            className="text-[22px] font-medium tracking-[-0.02em] text-white sm:text-[24px]"
          >
            Hamim Khan
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex lg:gap-12">
            {/* Home */}
            <a
              href="#home"
              className="text-[18px] font-medium text-white transition-opacity duration-200 hover:opacity-70"
            >
              Home
            </a>

            {/* Projects */}
            <a
              href="#projects"
              className="text-[18px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
            >
              Projects
            </a>

            {/* About */}
            <a
              href="#about"
              className="text-[18px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
            >
              About
            </a>

            {/* Contacts */}
            <a
              href="#contact"
              className="text-[18px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
            >
              Contacts
            </a>

            {/* Social Icons */}
            <div className="ml-3 flex items-center gap-6">
              {/* Instagram */}
              <a
                href="https:www.instagram.com/hamim_khan72?stkn=dnQ0N2hxaTN2enZr"
                aria-label="Instagram"
                className="text-white transition-opacity duration-200 hover:opacity-70"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hamimedit69-sudo"
                aria-label="GitHub"
                className="text-white transition-opacity duration-200 hover:opacity-70"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.1 9.1 0 0 1 12 7.14c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.65c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https:www.linkedin.com/in/hamim-hamim-50450a368"
                aria-label="LinkedIn"
                className="text-white transition-opacity duration-200 hover:opacity-70"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.3 9.4h3.8V21H3.3V9.4Zm6.2 0h3.6V11h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.49 4.49 5.72V21h-3.75v-5.53c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21H9.5V9.4Z" />
                </svg>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-40 flex flex-col gap-[6px] md:hidden"
          >
            <span
              className={`h-[2px] w-7 bg-white transition-transform duration-200 ${menuOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
            />
            <span
              className={`h-[2px] w-7 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-[2px] w-7 bg-white transition-transform duration-200 ${menuOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
            />
          </button>

          {/* Mobile Menu Panel (phones only) */}
          {menuOpen && (
            <div className="absolute left-0 top-full z-30 w-full bg-[#3a0025]/95 px-6 py-6 min-[480px]:px-10 md:hidden">
              <nav className="flex flex-col gap-5">
                {[
                  ["Home", "#home"],
                  ["Projects", "#projects"],
                  ["About", "#about"],
                  ["Contacts", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[20px] font-medium text-white"
                  >
                    {label}
                  </a>
                ))}
                <div className="mt-2 flex gap-6 text-[16px] text-white/70">
                  <a href="#">Instagram</a>
                  <a href="#">GitHub</a>
                  <a href="#">LinkedIn</a>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* =======================================================
            PROFILE IMAGE

            IMPORTANT:
            Keep this section unchanged if you want the
            profile picture to remain the same size.
        ======================================================== */}
        {/* Profile image */}
        <div className="absolute bottom-0 right-[-1px] z-[2] h-[45vh] md:bottom-auto md:h-[96vh] lg:h-[97vh]">
          <img
            src="/images/Profileimage.png"
            alt="Hamim Khan"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* =======================================================
            HERO CONTENT
        ======================================================== */}

        <div className="relative z-10 flex items-start px-6 pb-[48vh] pt-4 min-[480px]:px-10 sm:px-14 md:min-h-[calc(100vh-100px)] md:items-center md:pb-0 md:pt-0 lg:px-20 xl:px-24">
          <div className="max-w-[700px]">

            {/* Greeting */}
            <p className="mb-7 text-[20px] font-normal leading-none text-white sm:text-[26px] lg:text-[28px]">
              Hi, I’m Hamim,
            </p>

            {/* Main Heading */}
            <h1 className="text-[length:clamp(40px,11.5vw,72px)] font-extrabold leading-[0.94] tracking-[-0.045em] text-white sm:text-[82px] md:text-[94px] lg:text-[108px] xl:text-[116px]">
              I’M A WEB
              <br />
              DEVELOPER
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[500px] text-[17px] leading-[1.55] text-white/65 min-[480px]:text-[19px] sm:text-[22px] lg:text-[23px]">
              I’m a passionate Full Stack Developer who builds modern,
              responsive, and high-performance websites and web applications
              that turn ideas into impactful digital experiences.
            </p>

            {/* CTA */}
            <a
              href="#projects"
              className="mt-8 inline-block text-[22px] font-bold text-white underline decoration-[2px] underline-offset-[7px] transition-opacity duration-200 hover:opacity-70"
            >
              View My Projects
            </a>
          </div>
        </div>

      </section>

      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>

  );
}