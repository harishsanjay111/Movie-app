import axios from 'axios';
import { useEffect, useState } from 'react';


function usemovieData(query, pageNumber) {

const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [data, setData] = useState([]);
const [hasMore, setHasMore] = useState(false);


useEffect(() => {
setData([]);
}, [query])

useEffect(() => {
    setLoading(true);
    setError(false);
 const controller = new AbortController();
    const delay =  setTimeout(() => {
        axios.get("https://api.themoviedb.org/3/search/movie", {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
     },
              params : {
                query : query,
                page : pageNumber,
    },
     signal : controller.signal,
        }).then (res => {
       setData(prevData => {
              return [...new Set([...prevData, ...res.data.results])]
          })
    
        setHasMore(res.data.results.length > 0);
          setLoading(false);
    })   .catch(err => {
        if(axios.isCancel(err)) return;
        if(err.name === "CanceledError") return;
            setError(true);
         })
     }, 500)
     return () =>  {
        clearTimeout(delay);
        controller.abort();

     }
}, [query, pageNumber])

  return {loading,error,data,hasMore};
}

export default usemovieData;
