import Image from "next/image";
import carOne from "@/assets/car2.png";
import logo from "@/assets/logo1.png";
import InquiryForm from "@/components/InquiryForm";
import SaveContactButton from "@/components/SaveContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={logo}
              alt="Diamond Wings 369 logo"
              className="m-4 h-16 w-auto"
              priority
            />
            <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm mb-4">
              Luxury Transportation
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Premium Limo & Chauffeur Service
            </h1>

            <p className="text-neutral-300 text-lg mb-8 max-w-xl">
              Reliable, professional, and comfortable transportation for airport
              pickups, weddings, corporate travel, special events, and private
              rides.
            </p>

            <a
              href="#inquiry"
              className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
            >
              Request a Quote
            </a>
            <SaveContactButton />
          </div>

          <div>
            <Image src={carOne} alt="limo image" className="rounded" priority />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm mb-3">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Transportation for Every Occasion
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Airport Transportation",
              "Weddings & Events",
              "Corporate Travel",
              "Hourly Chauffeur Service",
            ].map((service) => (
              <div
                key={service}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-neutral-400">
                  Professional, comfortable, and on-time transportation tailored
                  to your schedule.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 bg-neutral-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
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

            <ul className="space-y-3 text-neutral-300">
              <li>✔ Professional and reliable drivers</li>
              <li>✔ Clean, comfortable luxury vehicles</li>
              <li>✔ Easy quote requests</li>
              <li>✔ Great for personal, business, and event transportation</li>
            </ul>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to book your ride?
            </h3>
            <p className="text-neutral-400 mb-6">
              Submit your trip details and someone will follow up with pricing
              and availability.
            </p>
            <a
              href="#inquiry"
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition"
            >
              Start Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="px-6 py-20 bg-black">
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
      </section>
    </main>
  );
}
