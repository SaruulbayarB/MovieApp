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

export default function Home() {
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

  return (
    <div>
      <Header />

      <UpcomingCard
        status="Now Playing"
        title="Moviw"
        score={6.9}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlyggKSf1GKvw27skrpmYlcba68acmPnweg&s"
        desc="nan"
      />

      <div className="flex flex-wrap w-[1440px] justify-center gap-10">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            score={movie.score}
            image={movie.image}
          />
        ))}
      </div>
    </div>
  );
}
