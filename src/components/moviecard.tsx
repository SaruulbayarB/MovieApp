import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MdOutlineStar } from "react-icons/md";

type MovieCardProps = {
  title: string;
  score: number;
  image: string;
};

export const MovieCard = ({ title, score, image }: MovieCardProps) => {
  return (
    <Card className="w-[230px] h-[440px] overflow-hidden shadow-md object-fill gap-1 mt-3">
      <CardHeader className="p-0 mt-[-20px]">
        <img
          src={image}
          alt={title}
          className="w-[230px] h-[340px] object-cover"
        />
      </CardHeader>
      <CardContent className="p-3 mt-[-10px]">
        <CardDescription className="flex g-0.5 items-center">
          <MdOutlineStar className="w-5 h-5 text-[#FDE047]" />

          <span className=" text-[#09090b] font-normal text-sm ml-1">
            Score: {score}
          </span>
          <span className="text-[#71717A] font-normal text-xs">/10</span>
        </CardDescription>
        <CardTitle className="text-lg font-normal">{title}</CardTitle>
      </CardContent>
    </Card>
  );
};
