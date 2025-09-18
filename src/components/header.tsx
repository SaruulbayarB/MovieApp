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
import { CiSearch } from "react-icons/ci";

import { FiFilm } from "react-icons/fi";
import { Input } from "@/components/ui/input";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ModeToggle } from "./themetoggler";
import { ChevronRight } from "lucide-react";

import Link from "next/link";
import { SearchSection } from "./SearchSection";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export const Header = async () => {
  const getMovieGenres = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };
  const genresRes = await getMovieGenres();
  return (
    <div className="flex items-center gap-4 pl-20 mt-5">
      <FiFilm className="text-indigo-700"></FiFilm>
      <Link href="/">
        <p className="text-indigo-700 text-base italic ml-2 font-bold">
          Movie Z
        </p>
      </Link>

      <NavigationMenu className="ml-100 ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[450px] h-[300px]">
                <h1 className="text-[#09090B] text-2xl font-semibold">
                  Genres
                </h1>

                <div className="text-[#09090B] mt-1 font-normal text-base">
                  See lists of movies by genre
                </div>
                <div className="flex flex-wrap">
                  {genresRes.genres.map((genre) => (
                    <Link href={`/genres?id=${genre.id}`}>
                      <NavigationMenuLink>
                        <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                          {genre.name}
                          <ChevronRight />
                        </button>
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <SearchSection></SearchSection>
      <div className="ml-25">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};
