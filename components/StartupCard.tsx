import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StartupCard = ({ post }: { post: any }) => {
  const {
    _id,
    _createdAt,
    views,
    title,
    category,
    image,
    description,
    _author: { _id: authorId, name },
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-bold">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src={`https://placehold.co/48x48`}
            width={48}
            height={48}
            alt="porfile-image"
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`} >
      <p className="startup-card_desc">{description}</p>
      {/* // eslint-disable-next-line @next/next/no-img-element */}
      <Image src={image}  alt="image" className="startup-card_img" width={100} height={100} unoptimized/>
      </Link>
      <div className="flex-between gap-3 mt-5">
      <Link href={`?query=${category.toLowerCase()}`} >
      <p className="text-16-medium">{category}</p>
      </Link>
      <Button className="startup-card_btn" asChild>
      <Link href={`/startup/${_id}`} >
      Details
      </Link>


      </Button>
      </div>
    </li>
  );
};

export default StartupCard;
