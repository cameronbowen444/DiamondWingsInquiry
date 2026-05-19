"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;

  setLoading(true);
  setSuccess(false);

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    pickup: formData.get("pickup"),
    dropoff: formData.get("dropoff"),
    dateTime: formData.get("dateTime"),
    serviceType: formData.get("serviceType"),
    bestTimeToCall: formData.get("bestTimeToCall"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to submit inquiry");
    }

    form.reset();
    setSuccess(true);
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 space-y-5"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm mb-2">Full Name</label>
            <input
              name="name"
              required
              className="w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 outline-none focus:border-yellow-500"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Phone Number</label>
            <input
              name="phone"
              required
              className="w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 outline-none focus:border-yellow-500"
              placeholder="(555) 555-5555"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 outline-none focus:border-yellow-500"
            placeholder="you@example.com"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm mb-2">Pickup Location</label>
            <input
              name="pickup"
              required
              className="w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 outline-none focus:border-yellow-500"
              placeholder="Pickup address"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Drop-off Location</label>
            <input
              name="dropoff"
              required
              className="w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 outline-none focus:border-yellow-500"
              placeholder="Destination"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm mb-2">Date & Time</label>
            <input
              name="dateTime"
              type="datetime-local"
              required
              className="w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 text-white outline-none focus:border-yellow-500 [color-scheme:dark]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Service Type</label>
            <select
              name="serviceType"
              required
              className="w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 outline-none focus:border-yellow-500"
            >
              <option value="">Select service</option>
              <option value="Airport Transportation">
                Airport Transportation
              </option>
              <option value="Wedding/Event">Wedding/Event</option>
              <option value="Corporate Travel">Corporate Travel</option>
              <option value="Hourly Chauffeur">Hourly Chauffeur</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm mb-2">Best Time to Call</label>
          <select
            name="bestTimeToCall"
            required
            className="w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 outline-none focus:border-yellow-500"
          >
            <option value="">Select a time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Anytime">Anytime</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2">Additional Details</label>
          <textarea
            name="message"
            rows={5}
            className="w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 outline-none focus:border-yellow-500 resize-none"
            placeholder="Tell us about passengers, luggage, event details, or special requests..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 text-black font-semibold py-4 rounded-full hover:bg-yellow-400 transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>

        {success && (
          <p className="text-green-400 text-center">
            Your inquiry was submitted successfully.
          </p>
        )}
      </form>
    </section>
  );
}
