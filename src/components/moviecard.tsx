import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MovieCardProps = {
  title: string;
  score: number;
  image: string;
};

export const MovieCard = ({ title, score, image }: MovieCardProps) => {
  return (
    <Card className="w-64 overflow-hidden shadow-md">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Score: {score}</CardDescription>
      </CardContent>
      {/* Optional: Footer for actions or details */}
      {/* <CardFooter>
        <button>Details</button>
      </CardFooter> */}
    </Card>
  );
};
