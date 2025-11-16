"use client";

import { useMovies } from "@/app/Context/MovieContext";
import React from "react";
import Image from "next/image";

const Moviedetail = ({ params }) => {
  const { movies } = useMovies();

  
  const { id } = React.use(params);
  const movieId = Number(id);

  const movie = movies.find((m) => m.id === movieId);

  if (!movie)
    return <p className="text-white p-6 text-xl">Movie not found.</p>;

  return (
    <div className="relative min-h-screen text-white">

      {/* BACKDROP IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover object-center opacity-40"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black -z-10"></div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* POSTER */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={600}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>

        {/* MOVIE INFO */}
        <div className="flex flex-col justify-center">

          <h1 className="text-5xl font-extrabold mb-6">
            {movie.title}
          </h1>

          <p className="text-lg opacity-90 leading-relaxed mb-6">
            {movie.overview}
          </p>

          {/* DETAILS GRID */}
          <div className="grid grid-cols-2 gap-6 text-lg opacity-90">

            <div>
              <span className="font-bold block mb-1">Release Date</span>
              {movie.release_date}
            </div>

            <div>
              <span className="font-bold block mb-1">Rating</span>
              ⭐ {movie.vote_average.toFixed(1)}
            </div>

            <div>
              <span className="font-bold block mb-1">Popularity</span>
              🔥 {Math.round(movie.popularity)}
            </div>

            <div>
              <span className="font-bold block mb-1">Votes</span>
              {movie.vote_count}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">

            <button className="bg-gray-800/70 hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold shadow-lg border border-gray-700 backdrop-blur-sm">
              + Add to Watchlist
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Moviedetail;
