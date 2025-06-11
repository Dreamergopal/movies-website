import React, { useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import Loading from "../Loading";

function MovieDetails() {
  const [data, setData] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const key = import.meta.env.VITE_API_KEY 

  useEffect(() => {
    const featchData = async () => {
      try {
        const url = `https://www.omdbapi.com/?i=${params.imdbID}&apikey=${key}`
        const response = await fetch(url);
        const details = await response.json();
        setData(details);
      } catch (error) {
        console.log(error.message);
      }
    };
    featchData();
  }, [params]);

  console.log(data);

  const {
    Title,
    Year,
    Poster,
    Genre,
    Director,
    Actors,
    Plot,
    Language,
    Country,
    BoxOffice,
    imdbRating,
    imdbVotes,
    Ratings,
  } = data;

  function handleClick() {
    navigate("/movie");
  }

  console.log(navigation);
  if (navigation.state === "loading") {
    return <Loading />;
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <div className="md:w-1/2 w-full">
          <img
            src={Poster !== "N/A" ? Poster : "/placeholder.svg"}
            alt={Title}
            className="rounded-xl shadow-2xl w-80 object-cover"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 w-full space-y-4">
          <h1 className="text-yellow-400 text-3xl font-bold">
            {Title} ({Year})
          </h1>
          <p className="text-gray-300">{Plot}</p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <p>
              <span className="text-yellow-300 font-semibold">Genre:</span>
              {Genre}
            </p>
            <p>
              <span className="text-yellow-300 font-semibold">Director:</span>
              {Director}
            </p>
            <p>
              <span className="text-yellow-300 font-semibold">Actors:</span>
              {Actors}
            </p>
            <p>
              <span className="text-yellow-300 font-semibold">Language:</span>
              {Language}
            </p>
            <p>
              <span className="text-yellow-300 font-semibold">Country:</span>
              {Country}
            </p>
            <p>
              <span className="text-yellow-300 font-semibold">Box Office:</span>
              {BoxOffice}
            </p>
            <p>
              <span className="text-yellow-300 font-semibold">
                IMDB Rating:
              </span>
              {imdbRating} ({imdbVotes} votes)
            </p>
          </div>

          <div>
            <h3 className="text-red-400 font-bold mt-4">Ratings:</h3>
            <ul className="list-disc ml-5 text-sm text-gray-300">
              {Ratings?.map((rating, i) => (
                <li key={i}>
                  <span className="text-yellow-300">{rating.Source}</span>:
                  {rating.Value}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleClick}
            className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            ⬅️ Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;












