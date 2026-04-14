import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import type { UserRole } from "@prisma/client"
import bcrypt from "bcryptjs"

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
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        })
        
        if (!user || !user.password) {
          return null
        }
        
        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        )
        
        if (!isPasswordValid) {
          return null
        }
        
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
      
      // Allow Google OAuth sign-ins
      if (account?.provider === 'google') {
        // Ensure user has an email
        if (!user.email) return false

        // Check if a credentials-only account exists with this email.
        // If it does, only allow linking if that account's email is verified.
        // This prevents an attacker from pre-registering with a victim's
        // email and then having the victim's Google sign-in link to it.
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: { password: true, emailVerified: true, accounts: { where: { provider: 'google' } } },
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
      }
      return session
    },
    async jwt({ token, user, trigger: _trigger }) {
      void _trigger;
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id }
        })
        
        if (dbUser) {
          token.role = dbUser.role
          token.stripeCustomerId = dbUser.stripeCustomerId ?? undefined
          token.emailVerified = dbUser.emailVerified
          token.lastRefreshed = Date.now()
        }
      }

      // Refresh role/emailVerified from DB periodically (every 5 minutes)
      // instead of on every single auth() call, to avoid redundant DB queries.
      // Changes like email verification or role upgrades will reflect within 5 min.
      if (!user && token.sub) {
        const lastRefreshed = (token.lastRefreshed as number) || 0
        const fiveMinutes = 5 * 60 * 1000
        if (Date.now() - lastRefreshed > fiveMinutes) {
          const dbUser = await prisma.user.findUnique({
            where: { id: token.sub },
            select: { emailVerified: true, role: true, stripeCustomerId: true },
          })
          if (dbUser) {
            token.emailVerified = dbUser.emailVerified
            token.role = dbUser.role
            token.stripeCustomerId = dbUser.stripeCustomerId ?? undefined
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
