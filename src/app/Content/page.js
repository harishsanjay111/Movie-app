"use client"

import React, { useState } from 'react'
import useBookService from '../useBookService';
const Content = () => {

    const [queue, setQueue] = useState('');
    const [pageNumber, setpageNumber] = useState(1);
    const handleChange = (e) => {
    setQueue(e.target.value);
    setpageNumber(1);
    }
   const {loading, error, hasMore,data} = useBookService(queue, pageNumber);
  return (
    <div>
    
    <input type='text' className='border' onChange={handleChange}></input>
      {
        data.map((book) => {
         return <div key={book}>{book}</div>
        })}
        {loading && <div>loading...</div>}
        {error && <div>{error}</div>}
    </div>
  )
}

export default Content;