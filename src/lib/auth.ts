import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import type { UserRole } from "@prisma/client"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
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
        // TODO: Implement password verification
        // For now, this is a placeholder
        if (!credentials?.email) return null
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        })
        
        return user
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!
        session.user.role = token.role as UserRole
        session.user.stripeCustomerId = token.stripeCustomerId as string | undefined
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id }
        })
        
        if (dbUser) {
          token.role = dbUser.role
          token.stripeCustomerId = dbUser.stripeCustomerId
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
            topicOrder: [],
          }
        })
      }
    }
  }
})
