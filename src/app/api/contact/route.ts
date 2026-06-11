import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { z } from "zod";

// Rate limit: 5 contact submissions per IP per hour
// (Redis-backed distributed limiter — falls back to in-memory when Redis is unconfigured)
const contactFormLimiter = rateLimit({ maxRequests: 5, windowMs: 60 * 60 * 1000, prefix: "contact_form" });

// Input bounds — mirrors the categories offered in src/components/contact-form.tsx
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .trim()
    .max(254, "Email must be 254 characters or fewer")
    .email("Invalid email format"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be 200 characters or fewer"),
  category: z.enum(["general", "bug", "content", "feature", "feedback", "other"], {
    message: "Invalid category",
  }),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be 5000 characters or fewer"),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limit by IP address (not by submitted email, which is spoofable)
    const ip = getClientIp(request);
    const rateLimitResult = await contactFormLimiter.check(ip);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
          },
        }
      );
    }

    const body = await request.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        { error: firstIssue?.message || "Invalid submission" },
        { status: 400 }
      );
    }

    const { name, email, subject, category, message } = parsed.data;

    // Rate limiting: max 3 submissions per email per hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const recentSubmissions = await prisma.contactSubmission.count({
      where: {
        email,
        createdAt: { gte: oneHourAgo },
      },
    });

    if (recentSubmissions >= 3) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    // Store in database
    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        category,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
