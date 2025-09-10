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
  movies: Movie[];
};

export const UpcomingCard = ({ movies }: UpcomingCardProps) => {
  return (
    <div className="w-[1440px] h-[600px] mt-8">
      <Carousel>
        <CarouselContent>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
