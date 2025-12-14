import React  from 'react'
import Navbar from '../Navbar/Navbar';


import dynamic from 'next/dynamic';


const Movielist = dynamic(() => import ("../Movielist/Movielist"), {
  loading : () =>  <p>Loading movies...</p>
});
const movie = () => {

  return (
    <div>

    <div> 
    <Navbar />  
    </div>

   <Movielist />

    

    </div>
  )
}

export default movie;