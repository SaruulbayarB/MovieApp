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
    <div>
      <Carousel>
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem className="relative">
              <div className="absolute top-32 left-32">
                <p className="text-md text-[#FFFFFF]">Now Playing:</p>
                <p className="text-4xl text-[#FFFFFF] mt-2">{movie.title}</p>
                <div className="flex mt-2">
                  <MdOutlineStar className="w-5 h-5 text-[#FDE047]" />
                  <span className="text-[#71717A] font-normal text-1xl">
                    {movie.vote_average}/10
                  </span>
                </div>

                <div className="w-100 flex-wrap text-[#FAFAFA] text-xs mt-2">
                  {movie.overview}
                </div>

                <button className="w-40 h-8 bg-white rounded-md mt-4 text-[#18181B] font-semibold relative">
                  Watch Trailer
                </button>
                <svg
                  className="absolute top-50 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.33301 2L12.6663 8L3.33301 14V2Z"
                    stroke="#18181B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
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
    </div>
  );
};
