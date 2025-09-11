import React, { useEffect } from "react";

function Tmdb() {
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_44a9e64a892e2e03677d5b28af5f8cd5"
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getMovie;
  }, []);
  return <div>fetch</div>;
}

export default Tmdb;
