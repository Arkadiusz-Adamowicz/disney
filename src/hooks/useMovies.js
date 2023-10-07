import axios from 'axios';
import { useEffect, useState } from 'react';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [tv, setTv] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const api_key = import.meta.env.VITE_MOVIES_API_KEY;
  const base_url = `https://api.themoviedb.org/3`;

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `${base_url}/movie/now_playing?api_key=${api_key}`
      );
      setMovies(res.data.results);
    };
    getMovies();

    const getTopRated = async () => {
      const res = await axios.get(
        `${base_url}/movie/top_rated?api_key=${api_key}`
      );
      setTopRated(res.data.results);
    };
    getTopRated();

    const getTrending = async () => {
      const res = await axios.get(
        `${base_url}/trending/all/week?api_key=${api_key}`
      );
      setTrending(res.data.results);
    };
    getTrending();

    const getAction = async () => {
      const res = await axios.get(
        `${base_url}/discover/movie?api_key=${api_key}&with_genres=27`
      );
      setAction(res.data.results);
    };
    getAction();

    const getComedy = async () => {
      const res = await axios.get(
        `${base_url}/discover/movie?api_key=${api_key}&with_genres=35`
      );
      setComedy(res.data.results);
    };

    getComedy();

    const getDocumentary = async () => {
      const res = await axios.get(
        `${base_url}/discover/movie?api_key=${api_key}&with_genres=99`
      );
      setDocumentary(res.data.results);
    };
    getDocumentary();

    const getTv = async () => {
      const res = await axios.get(`${base_url}/discover/tv?api_key=${api_key}`);
      setTv(res.data.results);
    };
    getTv();
  }, [base_url, api_key]);

  return {
    movies,
    tv,
    trending,
    topRated,
    comedy,
    documentary,
    action,
    base_url,
  };
};
export default useMovies;
