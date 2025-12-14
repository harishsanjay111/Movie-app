import axios from 'axios';
import {useState, useEffect} from 'react'

export default function useBookService(queue, pageNumber) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, sethasMore]  = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
   setData([]);
  },[queue])

     useEffect(() => {
      setLoading(true);
      setError(false);
        let cancel;
          const response =  axios.get( "https://openlibrary.org/search.json", {
           params :  { q : queue,
            page : pageNumber},
            cancelToken : new axios.CancelToken(c => cancel = c)
          }).then(res =>  {
            setData(prevData => {
             return  [...new Set([...prevData, ...res.data.docs.map(b => b.title)])] 
            })
            sethasMore(res.data.docs.length > 0);
            setLoading(false);
      }).catch(e => {
            if(axios.isCancel(e)) return;
            setError(true);
           })

           return () => cancel();
         
          
    }, [queue,pageNumber])


  return {loading, error, hasMore, data};
}
