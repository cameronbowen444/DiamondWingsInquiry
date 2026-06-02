"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import carOne from "@/assets/car3.png";
import logo from "@/assets/logo3.png";
import SaveContactButton from "@/components/SaveContact";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardMotion: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const services = [
  {
    title: "Airport Pickups",
    desc: "Skip the stress after landing. Clean luxury rides, smooth pickup coordination, and professional service.",
  },
  {
    title: "Weddings & Events",
    desc: "Arrive like the moment matters. Perfect for weddings, date nights, birthdays, and VIP events.",
  },
  {
    title: "Corporate Travel",
    desc: "Executive-level transportation for meetings, client pickups, business trips, and private travel.",
  },
  {
    title: "Hourly Chauffeur",
    desc: "Need flexibility? Book a professional chauffeur by the hour and move on your schedule.",
  },
];

const trustPoints = [
  "Luxury black-car experience",
  "Professional chauffeur service",
  "Easy online booking",
  "Perfect for airport, events, and private rides",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen px-5 py-8 md:px-8 md:py-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(234,179,8,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.35),_#070707_88%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Content */}
            <motion.div variants={fadeUp} className="pt-8 md:pt-0">
              <motion.div variants={fadeIn} className="mb-8">
                <Image
                  src={logo}
                  alt="Diamond Wings 369 logo"
                  className="h-16 w-auto md:h-20"
                  priority
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400"
              >
                <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.9)]" />
                Private Luxury Chauffeur Service
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl"
              >
                Arrive Sharp.
                <span className="block bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                  Ride First Class.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-8 text-neutral-300 md:text-xl"
              >
                Premium black-car and chauffeur service for airport transfers,
                weddings, corporate travel, date nights, private events, and
                luxury transportation across Los Angeles.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <motion.a
                  href="https://book.mylimobiz.com/v4/diamondwings"
                  target="_blank"
                  className="group inline-flex items-center justify-center rounded-full bg-yellow-500 px-7 py-4 text-base font-bold text-black shadow-[0_0_35px_rgba(234,179,8,0.28)] transition hover:bg-yellow-400"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Book Your Ride Now
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>

                <SaveContactButton />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 grid max-w-xl grid-cols-3 gap-3"
              >
                {[
                  ["24/7", "Booking"],
                  ["VIP", "Service"],
                  ["LAX", "Airport Ready"],
                ].map(([top, bottom]) => (
                  <div
                    key={top}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                  >
                    <p className="text-2xl font-black text-yellow-400">
                      {top}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-neutral-400">
                      {bottom}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-5 text-sm text-neutral-500"
              >
                Fast booking. Clean vehicles. Professional experience from
                pickup to drop-off.
              </motion.p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={fadeIn}
              initial={{ opacity: 0, scale: 0.94, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-yellow-500/10 blur-3xl" />

              <motion.div
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl"
              >
                <Image
                  src={carOne}
                  alt="Luxury chauffeur vehicle"
                  className="rounded-[1.5rem] object-cover"
                  priority
                />

                {/* <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl">
                  <p className="text-sm font-semibold text-yellow-400">
                    Premium Ride Experience
                  </p>
                  <p className="mt-1 text-xs leading-5 text-neutral-300">
                    Luxury transportation designed for comfort, privacy, and a
                    smooth arrival.
                  </p>
                </div> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Conversion Bar */}
      <motion.section
        className="relative border-y border-white/10 bg-black px-5 py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
          {trustPoints.map((point) => (
            <motion.div
              key={point}
              variants={cardMotion}
              className="flex items-center gap-3 rounded-2xl bg-white/[0.04] px-4 py-4 text-sm text-neutral-200"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-sm font-black text-black">
                ✓
              </span>
              {point}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        className="relative bg-[#0b0b0b] px-5 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-500">
              Premium Services
            </p>

            <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
              Luxury Transportation That Feels Effortless
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-neutral-400">
              Built for people who want more than “just a ride.” Get comfort,
              class, reliability, and a smooth booking experience.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardMotion}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.025] p-6"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-yellow-500/10 blur-2xl transition group-hover:bg-yellow-500/20" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-lg font-black text-black">
                    0{index + 1}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-7 text-neutral-400">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="relative bg-neutral-950 px-5 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.1),_transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-500">
              Why Riders Choose Us
            </p>

            <h2 className="mb-6 text-4xl font-black tracking-tight md:text-5xl">
              The Ride Should Feel as Good as the Destination
            </h2>

            <p className="mb-7 leading-8 text-neutral-300">
              From airport pickups to luxury events, Diamond Wings 369 gives
              clients a clean, private, and polished transportation experience.
              No awkward ride. No stress. Just smooth service.
            </p>

            <motion.ul
              className="space-y-4 text-neutral-300"
              variants={staggerContainer}
            >
              {[
                "Perfect for travelers, executives, couples, and VIP guests",
                "Private chauffeur service with a premium feel",
                "Easy booking for airport rides, events, and special occasions",
                "A polished arrival that makes the moment feel bigger",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={cardMotion}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <span className="text-yellow-400">✦</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/15 via-white/[0.04] to-white/[0.02] p-8 shadow-[0_0_45px_rgba(234,179,8,0.12)]"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />

            <div className="relative z-10">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-yellow-400">
                Limited Availability
              </p>

              <h3 className="mb-4 text-3xl font-black">
                Planning a ride soon?
              </h3>

              <p className="mb-6 leading-7 text-neutral-300">
                Lock in your transportation before your preferred time is
                booked. Submit your ride details and reserve your luxury
                chauffeur experience.
              </p>

              <div className="mb-7 space-y-3 rounded-2xl bg-black/35 p-5">
                {[
                  "Airport transfers",
                  "Special occasions",
                  "Business travel",
                  "Private hourly rides",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="https://book.mylimobiz.com/v4/diamondwings"
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 font-bold text-black transition hover:bg-yellow-400 sm:w-auto"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Reserve My Ride
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="relative bg-black px-5 py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(234,179,8,0.16),_transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.p
            variants={fadeUp}
            className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-500"
          >
            Book in Seconds
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-black tracking-tight md:text-6xl"
          >
            Make Your Next Ride Feel Expensive.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-neutral-400 md:text-lg"
          >
            Whether it is the airport, a wedding, a night out, or a business
            trip, show up relaxed, comfortable, and taken care of.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="https://book.mylimobiz.com/v4/diamondwings"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-8 py-4 font-black text-black transition hover:bg-yellow-400"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Book a Luxury Ride
            </motion.a>

            <motion.a
              href="tel:8182924112"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-bold text-white transition hover:bg-white/10"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Call for Availability
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}