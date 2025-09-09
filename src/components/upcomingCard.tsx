import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MdOutlineStar } from "react-icons/md";

type UpcomingCardProps = {
  status: string;
  title: string;
  score: number;
  image: string;
  desc: string;
};

export const UpcomingCard = ({
  status,
  title,
  score,
  image,
}: UpcomingCardProps) => {
  return (
    <Carousel className="w-[1440px] h-[600px]">
      <CarouselContent>
        <CarouselItem>
          <img src={image} alt={title} className="w-[1440px] h-[600px]" />
        </CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
