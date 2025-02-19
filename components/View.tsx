import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after } from "next/server";
import { STARTUPS_VIEWS_QUERY } from "@/sanity/lib/queries";

const View = async ({ id }: { id: string }) => {
  const data = await client
  .withConfig({ useCdn: false })
  .fetch(STARTUPS_VIEWS_QUERY, { id })
  const views = data?.views || 0
  after(async () => {
    await writeClient
      .patch(id)
      .set({ views: views + 1 })
      .commit();
  });

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">
          {views} {views < 2 ? "View" : "Views"}
        </span>
      </p>
    </div>
  );
};

export default View;
