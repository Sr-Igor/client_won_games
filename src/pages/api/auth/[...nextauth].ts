import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth, { NextAuthOptions } from 'next-auth'

const options: NextAuthOptions = {
  pages: {
    signIn: '/sign-in'
  },
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt, name: data.user.username }
        } else {
          return null
        }
      }
    })
  ]
}

export default NextAuth(options)
