"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import carOne from "@/assets/car3.png";
import logo from "@/assets/logo3.png";
// import InquiryForm from "@/components/InquiryForm";
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
      staggerChildren: 0.16,
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

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center px-6 py-24"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp}>
            <motion.div variants={fadeIn}>
              <Image
                src={logo}
                alt="Diamond Wings 369 logo"
                className="m-4 h-16 w-auto"
                priority
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-yellow-500 uppercase tracking-[0.3em] text-sm mb-4"
            >
              Luxury Transportation
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Premium Limo & Chauffeur Service
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-neutral-300 text-lg mb-8 max-w-xl"
            >
              Reliable, professional, and comfortable transportation for airport
              pickups, weddings, corporate travel, special events, and private
              rides.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-start"
            >
              <motion.a
                href="https://book.mylimobiz.com/v4/diamondwings"
                className="inline-block bg-yellow-500 text-black font-semibold px-4 py-3 rounded-full hover:bg-yellow-400 transition whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Book a Ride
              </motion.a>

              <SaveContactButton />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial={{ opacity: 0, scale: 0.94, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src={carOne}
                alt="limo image"
                className="rounded"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        className="px-6 py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm mb-3">
              Our Services
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Transportation for Every Occasion
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {[
              "Airport Transportation",
              "Weddings & Events",
              "Corporate Travel",
              "Hourly Chauffeur Service",
            ].map((service) => (
              <motion.div
                key={service}
                variants={cardMotion}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{service}</h3>

                <p className="text-neutral-400">
                  Professional, comfortable, and on-time transportation tailored
                  to your schedule.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="px-6 py-20 bg-neutral-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp}>
            <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm mb-3">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Luxury Service Without the Stress
            </h2>

            <p className="text-neutral-300 mb-6">
              Whether you need a ride to the airport, a professional chauffeur
              for business travel, or transportation for a special occasion, our
              goal is to make the experience smooth from start to finish.
            </p>

            <motion.ul
              className="space-y-3 text-neutral-300"
              variants={staggerContainer}
            >
              {[
                "Professional and reliable drivers",
                "Clean, comfortable luxury vehicles",
                "Easy quote requests",
                "Great for personal, business, and event transportation",
              ].map((item) => (
                <motion.li key={item} variants={cardMotion}>
                  ✔ {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Ready to book your ride?
            </h3>

            <p className="text-neutral-400 mb-6">
              Submit your trip details and someone will follow up with pricing
              and availability.
            </p>

            <motion.a
              href="https://book.mylimobiz.com/v4/diamondwings"
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Book a Ride
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Inquiry Form */}
      {/* <section id="inquiry" className="px-6 py-20 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm mb-3">
              Get a Quote
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Request Transportation
            </h2>
            <p className="text-neutral-400 mt-4">
              Fill out the form below and we’ll follow up with availability and
              pricing.
            </p>
          </div>

          <InquiryForm />
        </div>
      </section> */}
    </main>
  );
}