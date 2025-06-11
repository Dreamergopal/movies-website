import { Link } from "react-router-dom";

function Card({ movedata }) {
  const { Title, Poster, imdbID, Year, Type } = movedata;

  return (
    <div
      className="group relative transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-4 hover:rotate-y-12 preserve-3d"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Outer Card */}
      <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-out group-hover:shadow-yellow-400/20 border border-gray-700 group-hover:border-yellow-400/50 transform-gpu group-hover:rotateX-5 flex flex-col h-full min-h-[460px]">
        {/* Image */}
        <div className="relative overflow-clip flex-shrink-0 h-80">
          <img
            src={Poster || "/placeholder.svg"}
            alt={Title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          {/* Overlays with pointer-events-none */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative p-4 flex flex-col justify-between flex-1 space-y-2">
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-1 leading-tight line-clamp-2">
              {Title}
            </h3>
            <p className="text-red-500 font-semibold text-sm">{Year}</p>
          </div>

          <div className="mt-auto">
            <Link
              to={`/movie/${imdbID}`}
              className="bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg z-10 relative block w-max"
            >
              🎬 Watch Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
