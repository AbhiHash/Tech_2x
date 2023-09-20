import NextAuth, { SessionOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../../lib/db";
import { ensureDbConnected } from "../../../lib/dbConnect";
import type { NextAuthOptions } from "next-auth";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any, req) {
        await ensureDbConnected();

        if (!credentials) {
          return null;
        }
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email });

        if (!user) {
          const obj = { username: email, password: password };
          const newUser = new User(obj);
          let userDb = await newUser.save();
          return {
            id: userDb._id,
            email: userDb.username,
          };
        } else {
          if (user.password !== password) {
            return null;
          }

          return {
            id: user._id,
            email: user.username,
          };
        }
      },
    }),
  ],

  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  pages: {
    signIn: "../../signIn",
  },
};

export default NextAuth(authOptions);
