import Image from "next/image";
import { Header, MovieCard, NowPlayingCarousel } from "@/components";
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
import { movieResponseType } from "@/types";

// 0. Get movies by ID

export const getMoviesByGenreId = async (genreIds: string, page: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

// 1. UPCOMING
export default async function Home() {
  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const upcomingMovies: movieResponseType = await getUpcomingMovies();
  console.log(upcomingMovies);

  // 2. POPULAR

  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const popularMovies: movieResponseType = await getPopularMovies();

  // 3. TOP RATED

  const getTopRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/toprated?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const topRatedMovies: movieResponseType = await getTopRatedMovies();

  // 4. NOW PLAYING

  const getNowPlayingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const nowPlayingMovies: movieResponseType = await getNowPlayingMovies();

  return (
    <div>
      <Header />
      <div className="flex flex-wrap w-[1440px] justify-center gap-10 mt-5">
        <NowPlayingCarousel movies={nowPlayingMovies.results} />
      </div>
      <div className="flex pl-17 mt-10">
        <div className="text-2xl text-[#09090B] font-semibold">Upcoming</div>
        <div className="mt-2 ml-275 text-xs">see more </div>
        <IoIosArrowRoundForward className="mt-1 ml-1 w-6 h-6" />
      </div>
      <div className="flex flex-wrap w-[1440px] justify-center gap-10 mt-5">
        {upcomingMovies.results.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
        ))}
      </div>
      <div className="flex pl-17 mt-10">
        <div className="text-2xl text-[#09090B] font-semibold">Popular</div>
        <div className="ml-275 text-xs">see more</div>
        <IoIosArrowRoundForward className="mt-[-3px] ml-1 w-6 h-6" />
      </div>
      <div className="flex flex-wrap w-[1440px] justify-center gap-10 mt-5">
        {popularMovies.results.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
        ))}
      </div>
      {/* // Top Rated */}
      <div className="flex pl-17 mt-10">
        <div className="text-2xl text-[#09090B] font-semibold">Top Rated</div>
        <div className="ml-275 text-xs">see more</div>
        <IoIosArrowRoundForward className="mt-[-3px] ml-1 w-6 h-6" />
      </div>
      <div className="flex flex-wrap w-[1440px] justify-center gap-10 mt-5">
        {popularMovies.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
        ))}
      </div>
      //
      {/* FOOTER  */}
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
      </div>{" "}
      */
    </div>
  );
}
