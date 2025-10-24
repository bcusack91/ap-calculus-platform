import { UserRole } from '@prisma/client'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role: UserRole
      stripeCustomerId?: string
    } & DefaultSession['user']
  }

  interface User {
    role: UserRole
    stripeCustomerId?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: UserRole
    stripeCustomerId?: string
  }
}
