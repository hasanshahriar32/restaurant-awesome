import { PageProps } from "./../../../../../.next/types/app/api/auth/[...nextauth]/route";
import bcrypt from "bcryptjs";
import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any) {
        connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          console.log(user);
          if (!user) throw new Error("No user found");
          if (user) {
            const isValid = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isValid) {
              return user;
            }
            if (!isValid) throw new Error("Could not log you in");
          }
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/register",
  },
};

const handle = NextAuth(authOptions);
export { handle as GET, handle as POST };
