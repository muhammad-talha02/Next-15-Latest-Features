import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUPS_VIEWS_QUERY } from "@/sanity/lib/queries";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUPS_VIEWS_QUERY, { id });
  console.log(totalViews);
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">
          {totalViews} {totalViews < 2 ? "View" : "Views"}
        </span>
      </p>
    </div>
  );
};

export default View;
