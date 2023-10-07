import Movie from './Movie';
import useMovies from '../../hooks/useMovies';

const Movies = ({ genreId }) => {
  const { movies } = useMovies();
  console.log(movies);

  return (
    <div className='text-white flex overflow-x-auto w-full pt-5 px-3 pb-10 mb-[-20px] gap-5 m-auto'>
      {movies
        .sort((a, b) => (a.title < b.title ? -1 : 1))
        .filter(movie => movie.genre_ids.includes(genreId))
        .map(movie => (
          <div key={movie.id}>
            <Movie movie={movie} />
          </div>
        ))}
    </div>
  );
};

export default Movies;
