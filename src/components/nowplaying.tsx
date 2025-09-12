import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { movieType } from "@/types";

import { MdOutlineStar } from "react-icons/md";

type UpcomingCardProps = {
  movies: movieType[];
};

export const NowPlayingCarousel = ({ movies }: UpcomingCardProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-[1440px] h-[600px] object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
