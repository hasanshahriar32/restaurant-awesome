import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    // manual
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // session: {
  //   strategy: "jwt",
  // },
  // secret: process.env.NEXT_SECRET,
  pages: {
    signIn: "/register",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
