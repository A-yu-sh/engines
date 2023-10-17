import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import EngineMODEL from "@/models/EngineMODEL";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        await CONNECT_MONGO_DB();
        const IF_USER_EXIST = await EngineMODEL.findOne({ email });
        if (!IF_USER_EXIST) {
          try {
            const res = await fetch("http://localhost:3000/api/Engine", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            });

            if (res.ok) {
              return user;
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
