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

import { FiFilm } from "react-icons/fi";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export const Header = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <FiFilm className=""></FiFilm>
      <p className="text-indigo-700 text-base italic">Movie Z</p>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Action</NavigationMenuLink>
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
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
