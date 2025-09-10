import React from "react";

import Image from "next/image";
import { Header, MovieCard, UpcomingCard } from "@/components";
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

export default function Home() {
  return (
    <div className="pl-20">
      <Header />
      <div className="text-[#09090B] text-3xl font-normal mt-20">
        Search Result
      </div>
      <div className="flex">
        <NavigationMenu className="ml-100 ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[335px] h-[315px]">
                  <h1 className="text-[#09090B] text-2xl font-semibold">
                    Genres
                  </h1>

                  <div className="text-[#09090B] mt-1 font-normal text-base">
                    See lists of movies by genre
                  </div>
                  <div className="flex flex-wrap">
                    <Link href="/genres">
                      <NavigationMenuLink>
                        <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B]">
                          Action
                          <ChevronRight />
                        </button>
                      </NavigationMenuLink>
                    </Link>
                    <NavigationMenuLink>Adventure</NavigationMenuLink>
                    <NavigationMenuLink>Animation</NavigationMenuLink>
                    <NavigationMenuLink>Biography</NavigationMenuLink>
                    <NavigationMenuLink>Comedy</NavigationMenuLink>
                    <NavigationMenuLink>Crime</NavigationMenuLink>
                    <NavigationMenuLink>Documentary</NavigationMenuLink>
                    <NavigationMenuLink>Drama</NavigationMenuLink>
                    <NavigationMenuLink>Family</NavigationMenuLink>
                    <NavigationMenuLink>Fantasy</NavigationMenuLink>
                    <NavigationMenuLink>Film-Noir</NavigationMenuLink>
                    <NavigationMenuLink>Game-Show</NavigationMenuLink>
                    <NavigationMenuLink>History</NavigationMenuLink>
                    <NavigationMenuLink>Horror</NavigationMenuLink>
                    <NavigationMenuLink>Music</NavigationMenuLink>
                    <NavigationMenuLink>Musical</NavigationMenuLink>
                    <NavigationMenuLink>Mystery</NavigationMenuLink>
                    <NavigationMenuLink>News</NavigationMenuLink>
                    <NavigationMenuLink>Reality-TV</NavigationMenuLink>
                    <NavigationMenuLink>Romance</NavigationMenuLink>
                    <NavigationMenuLink>Sci-Fi</NavigationMenuLink>
                    <NavigationMenuLink>Short</NavigationMenuLink>
                    <NavigationMenuLink>Sport</NavigationMenuLink>
                    <NavigationMenuLink>Talk-show</NavigationMenuLink>
                    <NavigationMenuLink>Thriller</NavigationMenuLink>
                    <NavigationMenuLink>War</NavigationMenuLink>
                    <NavigationMenuLink>Western</NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="w-[886px] h-[1189px] bg-amber-300"></div>
      </div>

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
}
