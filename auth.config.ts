import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const authConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        Credentials({
            name: "Demo Login (Dev Only)",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "demo" },
            },
            async authorize(credentials) {
                // In this demo version, any login attempt with credentials succeeds
                return {
                    id: "demo-user-id",
                    name: "Cosmic Researcher",
                    email: "guest@cosmicwatch.dev",
                    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cosmic"
                }
            }
        })
    ],
    pages: {
        signIn: "/auth/signin",
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async session({ session, token }) {
            if (session.user && token.sub) {
                session.user.id = token.sub
            }
            return session
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig
