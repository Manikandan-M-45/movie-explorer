import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (api_path, queryString = "") => {
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/${api_path}?api_key=${key}&query=${queryString}`;

  
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(url);
  
      setData(res.data.results);
    };
    fetchMovies();
  }, [url]);
  // console.log(data);
  
  return {data};
};

export default useFetch;
