import React from 'react'
import Maincard from '../Main-card/Maincard'
import Moviecard from '../Movie-card/Moviecard'
import Link from 'next/link'
const Movielist = async () => {


    const Data = await fetch("https://api.themoviedb.org/3/movie/popular",  {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
          },
          //if api data rarely changes Revalidates Periodically
          next: { revalidate: 3600 }
     },
      )
     .then(res => res.json()) 
     .catch(err => console.error(err)); 
     console.log(Data);
     
     
     const movies = Data.results;
      
   

  return (
    <div>
    <div className='mb-20'>
         
    
    

    <Maincard data={movies[0]}  />

        
   
    
    </div>
    <div className="
    px-4 
    grid 
    grid-cols-2 
    sm:grid-cols-3 
    md:grid-cols-4 
    lg:grid-cols-5 
    xl:grid-cols-6 
    gap-6
  ">
    {movies.map(movie => (
        <div key={movie.id}>
        <Link href = {`/Movie-detail/${movie.id}`}>
      <Moviecard  movie={movie} />
      </Link>
      </div>
    ))}
  </div>
    </div>
  )
}

export default Movielist