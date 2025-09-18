"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { movieResponseType } from "@/types";
import { getSearchedMovies } from "@/app/page";
import { SearchCard } from "@/components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const foundData = await getSearchedMovies(value, "1");
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setSearchValue(value);
    setFoundMovies(foundData);
  };

  return (
    <div>
      <div className="flex relative w-[577px]">
        <CiSearch className="ml-1 absolute w-4 h-4 mt-2.5" />
        <Input
          onChange={handleChange}
          className="w-[379px] pl-8"
          placeholder="Search.."
        />
      </div>

      <Popover open={isOpen}>
        <PopoverTrigger className="hidden"></PopoverTrigger>
        <PopoverContent className="w-[577px] ml-150 mt-25">
          <div>
            <div>
              {foundMovies?.results.slice(0, 5).map((movie) => (
                <SearchCard
                  key={movie.id}
                  title={movie.title}
                  score={movie.vote_average}
                  date={movie.release_date}
                  image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              ))}
            </div>
            <Link href={`/search?value=${searchValue}`}>
              See results for "{searchValue}"
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
