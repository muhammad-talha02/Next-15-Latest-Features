import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppr = true;
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params)?.id;

  const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });
console.log(post)
  if (!post) return notFound();
  return (
    <>
      <h1 className="text-3xl">{post?.[0]?.title}</h1>
    </>
  );
};

export default Page;
