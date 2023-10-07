import axios from 'axios';
import { useEffect, useState } from 'react';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const api_key = import.meta.env.VITE_MOVIES_API_KEY;
  const base_url = `https://api.themoviedb.org/3`;

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          `${base_url}/discover/movie?api_key=${api_key}`
        );
        const data = res.data.results;
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();

    const getMoviesByGenre = async id => {
      try {
        const res = await axios.get(
          `${base_url}/genre/movie/list?api_key=${api_key}&with_genres=${id}`
        );
        const data = res.data.genres;
        setMoviesByGenre(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMoviesByGenre();
  }, [base_url, api_key]);

  return {
    movies,
    moviesByGenre,
    base_url,
  };
};
export default useMovies;
