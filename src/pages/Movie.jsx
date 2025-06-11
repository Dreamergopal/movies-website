import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/layout/UI/Card";

function Movie() {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <>
      <ul className="min-h-fit bg-neutral-950 p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">
            Featured Movies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
            {moviesData.Search.map((serMove) => {
              return <Card key={serMove.imdbID} movedata={serMove} />;
            })}
          </div>
        </div>
      </ul>
    </>
  );
}

export default Movie;
