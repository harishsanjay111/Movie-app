"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'


const Moviecontext = createContext();


export const MovieContext = ({children}) => {

const [movies, setMovies] = useState([]);
const [Data,setData] = useState([]);

useEffect(() => {
  async function load () {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular",  {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
          }
     })
     .catch(err => console.error(err));
     const data = await res.json();
     setMovies(data.results);
  }
load();
},[])


  return (
    <Moviecontext.Provider value={{movies,Data,setData}}>
    {children}
    </Moviecontext.Provider>
  )
}
export const useMovies = () => useContext(Moviecontext);
