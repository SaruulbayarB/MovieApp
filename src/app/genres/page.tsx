import React from "react";

import Image from "next/image";
import { Header, MovieCard } from "@/components";
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
        <div className="w-200 h-100 bg-indigo-300">
          <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold w-15 h-5">
            Action
          </button>
          <button className="flex items-center gap-1 whitespace-wrap border border-[#E4E4E7] rounded-md pl-1 text-[#09090B] text-xs font-semibold w-15 h-5">
            Adventure
          </button>
        </div>
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
