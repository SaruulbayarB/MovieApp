import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MdOutlineStar } from "react-icons/md";

type Movie = {
  status: string;
  title: string;
  score: number;
  image: string;
  desc: string;
};

type UpcomingCardProps = {
  image: string;
  title: string;
};

export const NowPlayingCarousel = ({ image, title }: UpcomingCardProps) => {
  return (
    <Carousel className="w-[1440px] h-[600px]">
      <CarouselContent>
        <CarouselItem>
          <img
            src={image}
            alt={title}
            className="w-[230px] h-[340px] object-cover"
          />
        </CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
