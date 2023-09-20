import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ensureDbConnected } from "../../../lib/dbConnect";
import { User } from "../../../lib/db";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        await ensureDbConnected();
        if (!credentials) {
          return null;
        }
        const username = credentials.username;
        const password = credentials.password;
        const user = await User.findOne({ username });

        if (!user) {
          const obj = { username: username, password: password };
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
  pages: {
    signIn: "../../signIn",
  },
};

export default NextAuth(authOptions);
