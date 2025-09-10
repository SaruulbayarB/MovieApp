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

export default function Home() {
  const UpcomingMovies = [
    {
      status: "Now Playing",
      title: "Movie 1",
      score: 7.2,
      image: "https://i.ytimg.com/vi/SVtnCC4MI3c/maxresdefault.jpg",
      desc: "Description 1",
    },
    {
      status: "Coming Soon",
      title: "Movie 2",
      score: 8.1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Tfuxz9Lmag6simvDd4jMaOWBkmUeLEShSQ&s",
      desc: "Description 2",
    },
    {
      status: "Now Streaming",
      title: "Movie 3",
      score: 6.9,
      image: "https://i.ytimg.com/vi/SVtnCC4MI3c/maxresdefault.jpg",
      desc: "Description 3",
    },
  ];

  // All movies

  const movies = [
    {
      title: "Dear Santa",
      score: 6.9,
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/d2/Dear_Santa_%282011_film%29_poster.jpg",
    },
    {
      title: "How to Train Your Dragon Live Action",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_.jpg",
    },
    {
      title: "Alien Romulus",
      score: 6.9,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYculcxN4nJIOcR2twSLe1YcNopSYMV7u8NLldqrK08vQcJbazkou-6Th6mmitsSJDSoyj",
    },
    {
      title: "From the Ashes",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNzg2Mzc2OTEtZGNlZS00NTk5LThlMjYtZjM5MDZiOWZiM2RiXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Space Dog",
      score: 6.9,
      image:
        "https://images.moviebuff.com/327d8be7-1817-4eb1-ba0b-41afe819a2d4?w=1000",
    },
    {
      title: "The Order",
      score: 6.9,
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Order_2024_film_poster.jpg",
    },
    {
      title: "Y2K",
      score: 6.9,
      image: "https://images.justwatch.com/poster/319881695/s718/y2k-2024.jpg",
    },
    {
      title: "Solo Leveling ReAwakening",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Get Away",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzpLy-haB7dRXgBZDH_AaICiEkhlSuhxeJw&s",
    },
    {
      title: "Sonic the Hedgehog 3",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlyggKSf1GKvw27skrpmYlcba68acmPnweg&s",
    },
  ];

  const popularMovies = [
    {
      title: "The Shawshank Redemption",
      score: 6.9,
      image:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/6fa79a3251cbf9c1c929aaec71ebb1309c57566a61d490045de285525914f285_ur12002c1600_ri__waifu2x_art_noise1.png",
    },
    {
      title: "The Godfather",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "The Dark Knight",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvyijfsP4F8o9bqAZc6bxCdbAYeKc582P1A&s",
    },
    {
      title: "12 Angry Men",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fgso1s9iRj38tZqt3EHoGIWaEx6FNUaInQ&s",
    },
    {
      title: "The Lord of the Rings: The  Return of the King",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Internstellar",
      score: 6.9,
      image:
        "https://play-lh.googleusercontent.com/AdTbI0Cx1cIPqmyNWAKUDGU0WG2c0idkTdYvBTV2ziF6gF8qd1aEmqX4ZzDp5m3jtkXjRA=w240-h480-rw",
    },
    {
      title: "Se7en",
      score: 6.9,
      image:
        "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/348/2024/12/17134808/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
    },
    {
      title: "It’s a Wonderful life",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDS9hzvBOPGp3RIVFTtlG_i5w_RAoIc52Aqg&s",
    },
    {
      title: "Seven samurai",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXPZsjOVuFzIIYg5JJ44RkTiIuLpV6gGI5g&s",
    },
    {
      title: "The Silence of the Lambs",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXD5EzCfvxKSqbAfp8BlsWjDQumsX0S9rYVg&s",
    },
  ];

  const topRatedMovies = [
    {
      title: "Pulp Fiction",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjvtARVQAFZvjgby4i1ev7I2h0OgHcG8YoQ&s",
    },
    {
      title: "The Good, the Bad and the Ugly",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-BpIQiXIq1QAoSqx1kjqPCx5aYmMpnZmt8jwG1L80gnNNTqtWbQwI3by0cuOJ5OwlO4&usqp=CAU",
    },
    {
      title: "Forrest Gump",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Fight Club",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5rkKTG2JFWq_FiFZnIkDhQ_ZPqYAPHYqAw&s",
    },
    {
      title: "Saving Private Ryan",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "City of God",
      score: 6.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HYJ_G0x957hNOUhzZbDs4fKDd9fxqvwZCQ&sg",
    },
    {
      title: "The Green Mile",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Life is Beautiful",
      score: 6.9,
      image: "https://upload.wikimedia.org/wikipedia/en/7/7c/Vitaebella.jpg",
    },
    {
      title: "Terminator 2: Judgement Day",
      score: 6.9,
      image:
        "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_.jpg",
    },
  ];
  return (
    <div>
      <Header />

      <UpcomingCard movies={UpcomingMovies} />
      <div className="flex pl-17 mt-10">
        <div className="text-2xl text-[#09090B] font-semibold">Upcoming</div>
        <div className="mt-2 ml-275 text-xs">see more </div>
        <IoIosArrowRoundForward className="mt-1 ml-1 w-6 h-6" />
      </div>

      <div className="flex flex-wrap w-[1440px] justify-center gap-10 mt-5">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            score={movie.score}
            image={movie.image}
          />
        ))}
      </div>

      <div className="flex pl-17 mt-10">
        <div className="text-2xl text-[#09090B] font-semibold">Popular</div>
        <div className="ml-275 text-xs">see more</div>
        <IoIosArrowRoundForward className="mt-[-3px] ml-1 w-6 h-6" />
      </div>

      <div className="flex flex-wrap w-[1440px] justify-center gap-10 mt-5">
        {popularMovies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            score={movie.score}
            image={movie.image}
          />
        ))}
      </div>

      {/* // Top rated  */}

      <div className="flex pl-17 mt-10">
        <div className="text-2xl text-[#09090B] font-semibold">Top Rated</div>
        <div className="ml-275 text-xs">see more</div>
        <IoIosArrowRoundForward className="mt-[-3px] ml-1 w-6 h-6" />
      </div>

      <div className="flex flex-wrap w-[1440px] justify-center gap-10 mt-5">
        {topRatedMovies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            score={movie.score}
            image={movie.image}
          />
        ))}
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
