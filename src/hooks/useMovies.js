import axios from 'axios';
import { useEffect, useState } from 'react';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const api_key = import.meta.env.VITE_MOVIES_API_KEY;
  const base_url = `https://api.themoviedb.org/3`;

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          `${base_url}/movie/now_playing?api_key=${api_key}`
        );
        const data = res.data.results;
        setMovies(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [base_url, api_key]);

  return {
    movies, base_url
  };
};
export default useMovies;


