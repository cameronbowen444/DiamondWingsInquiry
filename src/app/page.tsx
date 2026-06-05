"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Clock, Sparkles } from "lucide-react";
import carOne from "@/assets/car3.png";
import logo from "@/assets/logo3.png";

const quoteLink = "https://book.mylimobiz.com/v4/diamondwings";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const services = [
  "Airport Pickups",
  "Private Events",
  "Executive Travel",
  "Hourly Chauffeur",
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Professional",
    text: "Private chauffeur service with a polished feel.",
  },
  {
    icon: Clock,
    title: "On Time",
    text: "Built around airport, event, and business schedules.",
  },
  {
    icon: Sparkles,
    title: "Luxury Ride",
    text: "Clean vehicles, smooth pickup, and premium comfort.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b] pb-28 text-white md:pb-0">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden px-4 pb-16 pt-8 md:px-8 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(208,163,86,0.14),transparent_32%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090b] via-[#08090b]/95 to-[#08090b]" />

        <motion.div
          className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Left */}
          <motion.div variants={fadeUp}>
            <Image
              src={logo}
              alt="Diamond Wings 369 logo"
              className="mb-8 h-14 w-auto md:h-16"
              priority
            />

            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
              <p className="text-xs font-thin uppercase tracking-[0.28em] text-[#d8c7a3]">
                Private Chauffeur Service
              </p>
            </div>

            <h1 className="max-w-3xl text-4xl leading-[0.95] tracking-[0.02em] text-white md:text-6xl">
              Ride first class through Los Angeles.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Luxury black-car service for airport pickups, executive travel,
              private events, date nights, and VIP transportation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={quoteLink}
                target="_blank"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d0a356] px-7 py-4 text-sm text-[#090909] transition hover:bg-white"
              >
                Book Your Ride
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:8182924112"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm text-white transition hover:bg-white/[0.09]"
              >
                <Phone size={17} className="text-[#d8c7a3]" />
                Call Now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/55"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-2xl lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0b0c0f] shadow-[0_24px_90px_rgba(0,0,0,0.5)]">
              <Image
                src={carOne}
                alt="Luxury chauffeur vehicle"
                className="h-auto w-full object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/55 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-white/10 bg-[#050607] px-4 py-6 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <Icon className="mb-3 text-[#d8c7a3]" size={22} />
                <h3 className="text-lg tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Simple conversion section */}
      <section className="relative overflow-hidden bg-[#08090b] px-4 py-20 text-center md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-thin uppercase tracking-[0.28em] text-[#d8c7a3]">
            Fast Booking
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl leading-[0.95] tracking-[0.02em] text-white md:text-5xl">
            Make the ride feel as good as the destination.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Reserve a clean, private, luxury ride for your next airport pickup,
            event, meeting, or night out.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={quoteLink}
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d0a356] px-8 py-4 text-sm text-[#090909] transition hover:bg-white"
            >
              Get a Quote
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:8182924112"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm text-white transition hover:bg-white/[0.09]"
            >
              Call Availability
            </a>
          </div>
        </div>
      </section>

      {/* Mobile sticky ad CTA */}
      <div className="fixed bottom-0 left-0 z-50 grid w-full grid-cols-2 gap-3 border-t border-white/10 bg-[#08090b]/95 px-4 py-4 backdrop-blur-2xl md:hidden">
        <a
          href="tel:8182924112"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-4 text-sm text-white"
        >
          <Phone size={17} className="text-[#d8c7a3]" />
          Call
        </a>

        <Link
          href={quoteLink}
          target="_blank"
          className="inline-flex items-center justify-center rounded-full bg-[#d0a356] py-4 text-sm text-[#090909]"
        >
          Book Now
        </Link>
      </div>
      {/* Website Link */}
      <section className="border-t border-white/10 bg-[#050607] px-4 py-8 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/35">
          Want to learn more?
        </p>

        <a
          href="https://diamond-wings-site.vercel.app"
          target="_blank"
          className="group inline-flex items-center justify-center gap-3 text-sm text-[#d8c7a3] transition hover:text-white"
        >
          Visit the full Diamond Wings website
          <span className="transition group-hover:translate-x-1">→</span>
        </a>
      </section>
    </main>
  );
}
