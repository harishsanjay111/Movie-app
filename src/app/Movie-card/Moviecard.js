import React from 'react'
import Image from 'next/image'
const Moviecard = ({ movie }) => {



  return (

    <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">

  <Image
    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    width={500}
    height={500}
    alt={movie.title}
    className="object-cover w-full h-[350px]"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

  <div className="absolute bottom-3 left-3 text-white">
    <h2 className="text-lg font-semibold leading-tight">{movie.title}</h2>
    <p className="text-sm opacity-80">{movie.release_date}</p>
  </div>
</div>

  )
}

export default Moviecard;