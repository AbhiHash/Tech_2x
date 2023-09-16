import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const user = {
          name: credentials.username,
        };

        if (user) {
          return Promise.resolve(user);
        } else {
          // Authentication failed
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "../../signIn",
  },
};

export default NextAuth(authOptions);
