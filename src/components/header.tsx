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

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-show",
  "Thriller",
  "War",
  "Western",
];

export const Header = () => {
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
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Action
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Adventure
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Animation
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Biography
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Comedy
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Crime
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Documentary
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Drama
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Family
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Fantasy
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Film-Noir
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Game-Show
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        History
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Horror
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Music
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Musical
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Mystery
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        News
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Reality-TV
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Romance
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Sci-Fi
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Short
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Sport
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Talk-show
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Thriller
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        War
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/genres">
                    <NavigationMenuLink>
                      <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold">
                        Western
                        <ChevronRight />
                      </button>
                    </NavigationMenuLink>
                  </Link>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex relative w-[379px]">
        <CiSearch className="ml-1 absolute w-4 h-4 mt-2.5" />
        <Input className="w-[379px] pl-8" placeholder="Search.." />
      </div>
      <div className="ml-25">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};
