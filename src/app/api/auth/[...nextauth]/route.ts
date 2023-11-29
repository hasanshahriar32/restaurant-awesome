// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

// interface AuthOptions {
//   providers: NextAuth.Provider[];
//   // Add any other properties that authOptions might have
// }

// const authOptions: AuthOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID!,
//       clientSecret: process.env.GOOGLE_SECRET!,
//     }),
//     // ...add more providers here
//   ],
// };

// export const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import { connectMongoDB } from "../../../../../db/mongoDB";
// import User from "../../../../../Models/userSchema/userSchema";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
const authOptions: any = {
  providers: [
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
