import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      pickup,
      dropoff,
      dateTime,
      serviceType,
      bestTimeToCall,
      message,
    } = body;

    await resend.emails.send({
      from: "Diamond Wings 369 <onboarding@resend.dev>",
      to: process.env.BUSINESS_EMAIL as string,
      subject: `New Transportation Inquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Transportation Inquiry</h2>

          <h3>Client Info</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>

          <hr />

          <h3>Trip Details</h3>
          <p><strong>Pickup Location:</strong> ${pickup}</p>
          <p><strong>Drop-off Location:</strong> ${dropoff}</p>
          <p><strong>Date & Time:</strong> ${dateTime}</p>
          <p><strong>Service Type:</strong> ${serviceType}</p>
          <p><strong>Best Time to Call:</strong> ${bestTimeToCall}</p>

          <hr />

          <h3>Additional Details</h3>
          <p>${message || "No additional details provided."}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Inquiry sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry email error:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}