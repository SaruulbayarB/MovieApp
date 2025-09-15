import React from "react";

import Image from "next/image";
import { Header, MovieCard } from "@/components";
import { GenresResponseType, GenreType } from "@/types";

import { movieType } from "@/types";

import { movieResponseType } from "@/types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getMoviesByGenreId } from "../page";

type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string; page: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;
  const page = params.page || "1";

  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  console.log(filteredMoviesResponse);

  return (
    <div className="pl-20">
      <Header />
      <div className="text-[#09090B] text-3xl font-normal mt-20">
        Search Result
      </div>
      <div className="flex">
        <div className="w-100 h-100 bg-indigo-300">
          <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold w-15 h-5">
            Action
          </button>
          <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold w-15 h-5">
            Adventure
          </button>
        </div>
        {/* // Movie display session sits here */}
        <div className="w-[1200px] h-[1189px] flex flex-wrap g-10 ml-20">
          {filteredMoviesResponse.results.slice(0, 10).map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          ))}
        </div>
      </div>

      {/* // Footer  */}
      <div className="w-[1440px] h-[280px] bg-indigo-700 mt-13 text-[#FAFAFA] text-sm font-normal flex pt-5 justify-around">
        <div>
          <div>Movie Z</div>
          <div>© 2024 Movie Z. All Rights Reserved.</div>
        </div>

        <div>
          <div>Contact information</div>
          <p>Email:</p>
          <p>support@movieZ.com</p>
          <p>Phone:</p>
          <p>+976 (11) 123-4567</p>
        </div>
        <div>
          <div> Follow us</div>
          <span>Facebook Instagram Twitter Youtube</span>
        </div>
      </div>
    </div>
  );
};

export default Genre;
