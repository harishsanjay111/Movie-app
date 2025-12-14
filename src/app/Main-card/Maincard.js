"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useMovies } from "../Context/MovieContext";
import Link from "next/link";

export default React.memo(
  function Maincard  ({ data }) {

    return (
      <div className="relative w-full h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-xl">
  
        {/* Poster Image */}
        <Image
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path || data.poster_path}`}
          fill
          priority
          alt={data.original_title}
          className="object-cover object-center"
        />
  
        {/* Dark Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
  
        {/* Content */}
        <div className="absolute bottom-10 left-6 md:left-10 right-6 text-white">
  
          {/* Movie Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-xl">
            {data.original_title}
          </h2>
  
          {/* Overview */}
          <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-2xl line-clamp-3 md:line-clamp-none leading-relaxed">
            {data.overview}
          </p>
  
          {/* Buttons */}
          <div className="mt-6  gap-4">
            <Link className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold text-sm md:text-base shadow-lg" href={`/Movie-detail/${data.id}`} >
              Know More
            </Link>
  
          </div>
  
        </div>
  
      </div>
    );
  }
) ;

