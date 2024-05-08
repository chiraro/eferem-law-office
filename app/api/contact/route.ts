import { NextResponse } from "next/server";
import { mailOptions, transporter } from "@/lib/nodeMailer";
import Contact from "@/models/Contact";
import mongoose from "mongoose";
import dbConnect from "@/utils/dbConnect";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !message) {
    return NextResponse.json(
      { message: "Email and message are required" },
      { status: 400 }
    );
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 }
    );
  }
  await dbConnect();
  try {
    await transporter.sendMail(mailOptions(name, email, phone, message));

    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });
    await newContact.save();
    return NextResponse.json(
      {
        message: "Email sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { message: `Internal Server Error: ${e.message}` },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  return NextResponse.json(
    {
      message: "Method not allowed",
    },
    {
      status: 405,
    }
  );
}
