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
import { IoIosArrowRoundForward } from "react-icons/io";

type MovieCardProps = {
  title: string;
  score: number;
  image: string;
  date: string;
};

export const SearchCard = ({ title, score, image, date }: MovieCardProps) => {
  return (
    <div className="flex border-b border-gray-300 pb-3 pt-0">
      <Card className="w-[67px] h-[100px] overflow-hidden shadow-md object-fill gap-1 mt-3">
        <CardHeader className="p-0 mt-[-20px]">
          <img
            src={image}
            alt={title}
            className="w-[67px] h-[100px] object-cover"
          />
        </CardHeader>
      </Card>
      <div>
        <CardContent className="p-1 mt-2 ml-2">
          <CardDescription className="g-0.5 items-center">
            <CardTitle className="text-[20px] font-semibold text-[#09090B]">
              {title}
            </CardTitle>
            <div className="flex items-center">
              <MdOutlineStar className="w-5 h-5 text-[#FDE047]" />
              <span className=" text-[#09090b] font-normal text-sm ml-1">
                Score: {score}
              </span>
              <span className="text-[#71717A] font-normal text-xs">/10</span>
            </div>

            <p className="mt-3 font-medium text-[#09090B] text-sm">
              {date}
              <span className="ml-65 text-xs font-medium text-[#09090B]">
                see more{" "}
              </span>
              <span>
                <IoIosArrowRoundForward className=" ml-100 mt-[-18px] w-5 h-5 text-[#09090B]" />
              </span>
            </p>
          </CardDescription>
        </CardContent>
      </div>
    </div>
  );
};
