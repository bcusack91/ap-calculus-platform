import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"

// Microsoft Entra ID (Azure AD) SSO is wired but only activated when the org
// provides credentials, so districts on Microsoft can sign in without code
// changes. Issuer defaults to the multi-tenant endpoint (any work/school
// account) unless AUTH_MICROSOFT_ENTRA_ID_ISSUER pins a single tenant.
export const microsoftSsoEnabled = !!(
  process.env.AUTH_MICROSOFT_ENTRA_ID_ID && process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET
)
import type { UserRole } from "@prisma/client"
import bcrypt from "bcryptjs"
import {
  isCredentialsLocked,
  recordCredentialsFailure,
  clearCredentialsFailures,
} from "@/lib/credentials-rate-limit"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as never,  // Type assertion: adapter is functionally compatible across auth versions
  session: { strategy: "jwt" },
  trustHost: true,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    ...(microsoftSsoEnabled
      ? [
          MicrosoftEntraID({
            clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
            clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
            // issuer falls back to AUTH_MICROSOFT_ENTRA_ID_ISSUER, then "common"
          }),
        ]
      : []),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const email = credentials.email as string

        // Per-email sliding-window brute-force limiter (5 failures / 15 min).
        // Returning null yields the same generic invalid-credentials error as
        // a wrong password, so the limiter is not an oracle. Fails open (with
        // a loud log) when Redis is unconfigured.
        if (await isCredentialsLocked(email)) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email }
        })

        if (!user || !user.password) {
          // Count unknown-email attempts too — same failure budget, no oracle.
          await recordCredentialsFailure(email)
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!isPasswordValid) {
          await recordCredentialsFailure(email)
          return null
        }

        // Successful sign-in resets the failure counter.
        await clearCredentialsFailures(email)

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Allow all credential sign-ins
      if (account?.provider === 'credentials') return true

      // OAuth providers (Google, Microsoft Entra ID) — same linking protection.
      if (account?.provider === 'google' || account?.provider === 'microsoft-entra-id') {
        // Ensure user has an email
        if (!user.email) return false

        // Check if a credentials-only account exists with this email.
        // If it does, only allow linking if that account's email is verified.
        // This prevents an attacker from pre-registering with a victim's
        // email and then having the victim's OAuth sign-in link to it.
        // (Roster-imported students are created with a verified email, so
        // they can claim their account via their school Google/Microsoft login.)
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: { password: true, emailVerified: true, accounts: { where: { provider: account.provider } } },
        })

        if (existingUser && existingUser.accounts.length === 0) {
          // A credentials-only account exists — only allow if email is verified
          if (!existingUser.emailVerified) {
            return false
          }
        }

        return true
      }

      return true
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!
        session.user.role = token.role as UserRole
        session.user.stripeCustomerId = token.stripeCustomerId as string | undefined
        session.user.emailVerified = (token.emailVerified as Date | null | undefined) ?? null
        session.user.birthYear = (token.birthYear as number | null | undefined) ?? null
      }
      return session
    },
    async jwt({ token, user, trigger }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id }
        })
        
        if (dbUser) {
          token.role = dbUser.role
          token.stripeCustomerId = dbUser.stripeCustomerId ?? undefined
          token.emailVerified = dbUser.emailVerified
          token.birthYear = dbUser.birthYear
          token.lastRefreshed = Date.now()
        }
      }

      // Refresh role/emailVerified/birthYear from DB on an explicit client
      // session update() (e.g. right after the BirthYearGate saves a birth
      // year) AND periodically (every 5 minutes) otherwise — so an update()
      // reflects immediately instead of waiting out the throttle window, while
      // ordinary auth() calls avoid redundant DB queries.
      if (!user && token.sub) {
        const lastRefreshed = (token.lastRefreshed as number) || 0
        const fiveMinutes = 5 * 60 * 1000
        if (trigger === 'update' || Date.now() - lastRefreshed > fiveMinutes) {
          const dbUser = await prisma.user.findUnique({
            where: { id: token.sub },
            select: { emailVerified: true, role: true, stripeCustomerId: true, birthYear: true },
          })
          if (dbUser) {
            token.emailVerified = dbUser.emailVerified
            token.role = dbUser.role
            token.stripeCustomerId = dbUser.stripeCustomerId ?? undefined
            token.birthYear = dbUser.birthYear
          }
          token.lastRefreshed = Date.now()
        }
      }

      return token
    }
  },
  events: {
    createUser: async ({ user }) => {
      // Initialize default user data on signup
      if (user.id) {
        await prisma.learningPath.create({
          data: {
            userId: user.id,
          }
        })
      }
    }
  }
})
