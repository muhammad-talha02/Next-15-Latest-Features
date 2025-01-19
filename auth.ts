import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { client } from "./sanity/lib/client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user, profile }) {
      const existingUser = await client.withConfig({useCdn:false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
        id: profile?.id,
      });
      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id: profile?.id,
          name: user?.name,
          username: profile?.login,
          email: user?.email,
          image: user?.image,
          bio: profile?.bio || "",
        });
      }
      return true;
    },
    async jwt({ token, account, profile }) {
      console.log('JWT', account, profile, token)
      if (account && profile) {
        console.log('Token', token)
        const user = await client.withConfig({useCdn:false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id: profile?.id,
        });
        token.id = user?._id;
      }
      return token;
    },
    async session({ session, token }) {
      console.log({token, session})
      Object.assign(session, { id: token?.id });
      return session;
    },
  },
});
