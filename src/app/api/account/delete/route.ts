import { NextResponse } from 'next/server'
import type { Prisma } from '@prisma/client'
import Stripe from 'stripe'
import bcrypt from 'bcryptjs'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getStripe } from '@/lib/stripe'

/**
 * DELETE /api/account/delete — permanent, self-serve account deletion
 * (GDPR Art. 17 "right to erasure" / CCPA deletion request).
 *
 * Re-authentication evidence is required:
 *  - Credentials users: current password, verified with bcrypt.
 *  - OAuth-only users (no password hash): the literal string "DELETE MY ACCOUNT".
 *
 * Flow: cancel any active Stripe subscription first, then delete the User row.
 * Prisma schema cascades (onDelete: Cascade) remove all user-owned relations;
 * email-keyed tables that have no FK are cleaned up explicitly below.
 */

const OAUTH_CONFIRMATION = 'DELETE MY ACCOUNT'

export async function DELETE(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let body: { password?: unknown; confirmation?: unknown } = {}
    try {
      body = await request.json()
    } catch {
      // fall through — validation below will reject the empty body
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        email: true,
        password: true,
        stripeSubscriptionId: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 })
    }

    // ── 1. Re-authentication evidence ────────────────────────────────────
    if (user.password) {
      // Credentials account: must supply the current password.
      if (typeof body.password !== 'string' || body.password.length === 0) {
        return NextResponse.json(
          { error: 'Current password is required to delete this account.' },
          { status: 400 }
        )
      }
      const passwordValid = await bcrypt.compare(body.password, user.password)
      if (!passwordValid) {
        return NextResponse.json(
          { error: 'Incorrect password.' },
          { status: 403 }
        )
      }
    } else {
      // OAuth-only account (no password hash): require the exact confirmation
      // phrase as deliberate, typed evidence of intent.
      if (body.confirmation !== OAUTH_CONFIRMATION) {
        return NextResponse.json(
          { error: `Please type "${OAUTH_CONFIRMATION}" exactly to confirm.` },
          { status: 400 }
        )
      }
    }

    // ── 2. Cancel any active Stripe subscription BEFORE deleting ────────
    if (user.stripeSubscriptionId) {
      try {
        // Immediate cancellation (not cancel_at_period_end) — the account is
        // being erased, so there is no period to ride out.
        await getStripe().subscriptions.cancel(user.stripeSubscriptionId)
      } catch (err) {
        const stripeErr = err as Stripe.errors.StripeError
        const alreadyGone =
          stripeErr?.code === 'resource_missing' ||
          // Stripe rejects cancel on an already-canceled subscription with an
          // invalid_request error mentioning its canceled status.
          (stripeErr?.type === 'StripeInvalidRequestError' &&
            /canceled/i.test(stripeErr?.message ?? ''))
        if (alreadyGone) {
          console.warn(
            `Account deletion: Stripe subscription ${user.stripeSubscriptionId} already canceled/missing — proceeding.`,
            stripeErr?.code ?? stripeErr?.message
          )
        } else {
          // Unexpected Stripe failure (network, auth, API error): abort so we
          // never delete an account while leaving a live subscription billing.
          console.error('Account deletion: unexpected Stripe error', err)
          return NextResponse.json(
            {
              error:
                'We could not cancel your subscription. Your account was NOT deleted. Please try again or contact support.',
            },
            { status: 502 }
          )
        }
      }
    }

    // ── 3. Delete the user + explicit cleanup of email-keyed tables ─────
    // prisma.user.delete cascades through every user-owned relation
    // (Account, Session, progress/quiz/competitive/teacher tables — all
    // declared with onDelete: Cascade in prisma/schema.prisma).
    //
    // The tables below are keyed by EMAIL with no foreign key, so the
    // cascade cannot reach them — clean them up explicitly:
    //   - PasswordResetToken / EmailVerificationToken / VerificationToken
    //   - EmailSubscriber (newsletter list)
    //
    // INTENTIONALLY RETAINED (do not delete):
    //   - ContactSubmission: support correspondence kept for legal/operational
    //     record-keeping (GDPR Art. 17(3) — legal claims / obligations).
    //   - AdminAuditLog: append-only audit trail; records must survive deletion
    //     of the actor/target by design (see schema comment).
    const cleanup: Prisma.PrismaPromise<unknown>[] = [
      prisma.user.delete({ where: { id: user.id } }),
    ]
    if (user.email) {
      cleanup.push(
        prisma.passwordResetToken.deleteMany({ where: { email: user.email } }),
        prisma.emailVerificationToken.deleteMany({ where: { email: user.email } }),
        prisma.verificationToken.deleteMany({ where: { identifier: user.email } }),
        prisma.emailSubscriber.deleteMany({ where: { email: user.email } })
      )
    }
    await prisma.$transaction(cleanup)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Account deletion failed:', error)
    return NextResponse.json(
      { error: 'Failed to delete account. Please try again.' },
      { status: 500 }
    )
  }
}
