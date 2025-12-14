"use client"
import React, { useCallback, useRef, useState } from 'react'
import usemovieData from '../movieData/movieData';
import Moviecard from '../Movie-card/Moviecard';
import Link from 'next/link';

function Search() {

  const observer = useRef();
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { data, loading, error, hasMore } = usemovieData(query, pageNumber);

  const lastBookElementRef = useCallback((node) => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prev => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-8">

      {/* search bar */  }
      <div className="w-full flex justify-center mb-10">
        <input
          type='text'
             placeholder="Search movies..."
            className="w-full md:w-1/2 border border-gray-700 bg-[#1b1b1b] rounded-xl px-5 py-3 text-white shadow-md shadow-black/20
                    focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
               onChange={handleSearch}
       value={query}
        />
            </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {data.map((movie, index) => {

          
          if (data.length === index + 1) {
            return (
              <div ref={lastBookElementRef} key={movie.id}
                className="hover:scale-105 transition-transform duration-300"
              >
                <Link href={`/Movie-detail/${movie.id}`}>
                   <Moviecard movie={movie} />
                </Link>
              </div>
            );
          }

          
          return (
            <div key={movie.id}
              className="hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/Movie-detail/${movie.id}`}>
                <Moviecard movie={movie} />
              </Link>
            </div>
          );
        })}
      </div>

      {/* loading */}
      {loading && (
        <div className="text-center text-gray-300 mt-6 text-lg animate-pulse">
          Loading...
        </div>
      )}

      {/* error */}
      {error && (
        <div className="text-center text-red-500 mt-6 text-lg">
          Something went wrong
        </div>
      )}

   

    </div>
  );
}

export default Search;
