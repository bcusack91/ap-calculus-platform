import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { auth } from "@/lib/auth";
import { sendAdminAlertEmail } from "@/lib/email";
import { z } from "zod";

/**
 * POST /api/feedback — lightweight "Report a problem" submissions from the
 * footer dialog. Stored in the existing ContactSubmission model (no schema
 * changes) and forwarded to the owner inbox via the Resend infrastructure,
 * mirroring /api/contact.
 */

/** Owner inboxes that receive report notifications (comma-separated env). */
function reportRecipients(): string[] {
  const raw = process.env.ADMIN_ALERT_EMAIL_TO || process.env.ADMIN_ALERT_OWNER_EMAILS || "";
  return raw.split(",").map((s) => s.trim()).filter(Boolean);
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

// Rate limits mirror /api/contact: 5 per IP per hour, plus a stricter
// per-account cap for authenticated submitters (IP rotation can't dodge it).
// Redis-backed distributed limiter — falls back to in-memory without Redis.
const reportIpLimiter = rateLimit({ maxRequests: 5, windowMs: 60 * 60 * 1000, prefix: "feedback_report" });
const reportUserLimiter = rateLimit({ maxRequests: 3, windowMs: 60 * 60 * 1000, prefix: "feedback_report_user" });

const reportSchema = z.object({
  category: z.enum(["bug", "content", "other"], { message: "Invalid category" }),
  message: z.string().trim().min(1, "Please describe the problem").max(5000, "Message must be 5000 characters or fewer"),
  email: z
    .string()
    .trim()
    .max(254, "Email must be 254 characters or fewer")
    .email("Invalid email format")
    .optional()
    .or(z.literal("")),
  // The page the report was filed from — a same-site path attached by the
  // dialog (never trusted as a full URL to avoid link-injection into emails).
  url: z
    .string()
    .trim()
    .max(500)
    .regex(/^\/(?!\/)/, "Invalid page path")
    .optional()
    .or(z.literal("")),
});

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rateLimitResult = await reportIpLimiter.check(ip);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many reports. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
          },
        }
      );
    }

    const session = await auth();
    const userId = session?.user?.id;
    if (userId) {
      const userRateLimit = await reportUserLimiter.check(userId);
      if (!userRateLimit.success) {
        return NextResponse.json(
          { error: "Too many reports. Please try again later." },
          {
            status: 429,
            headers: {
              "Retry-After": String(Math.ceil((userRateLimit.resetTime - Date.now()) / 1000)),
            },
          }
        );
      }
    }

    const body = await request.json();
    const parsed = reportSchema.safeParse(body);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        { error: firstIssue?.message || "Invalid report" },
        { status: 400 }
      );
    }

    const { category, message } = parsed.data;
    const pageUrl = parsed.data.url || "";
    // Prefer the address typed in the form; fall back to the signed-in account.
    const email = parsed.data.email || session?.user?.email || "anonymous@studymondo.com";
    const name = session?.user?.name || "Anonymous";

    // ContactSubmission.subject is what the admin inbox lists — lead with the
    // report marker and the page so triage is possible at a glance.
    const subject = `[Problem report] ${pageUrl || "(page not captured)"}`.slice(0, 200);

    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        category, // "bug" | "content" | "other" — same vocabulary as /contact
        message: pageUrl ? `Page: ${pageUrl}\n\n${message}` : message,
      },
    });

    // Forward to the owner inbox (best-effort: a missing RESEND_API_KEY or an
    // unconfigured recipient must not fail the submission).
    try {
      const to = reportRecipients();
      if (to.length > 0) {
        const safe = {
          name: escapeHtml(name),
          email: escapeHtml(email),
          category: escapeHtml(category),
          pageUrl: escapeHtml(pageUrl),
          message: escapeHtml(message),
        };
        await sendAdminAlertEmail({
          to,
          subject: `[Report] ${category}: ${pageUrl || "unknown page"}`,
          text: `From: ${name} <${email}>\nCategory: ${category}\nPage: ${pageUrl || "(not captured)"}\n\n${message}`,
          html: `<p><strong>From:</strong> ${safe.name} &lt;${safe.email}&gt;</p><p><strong>Category:</strong> ${safe.category}</p><p><strong>Page:</strong> ${safe.pageUrl || "(not captured)"}</p><hr/><p style="white-space:pre-wrap">${safe.message}</p>`,
        });
      }
    } catch (notifyErr) {
      console.error("Feedback notification failed (non-fatal):", notifyErr);
    }

    return NextResponse.json(
      { success: true, message: "Thanks — your report was sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Feedback report error:", error);
    return NextResponse.json(
      { error: "Failed to send report" },
      { status: 500 }
    );
  }
}
