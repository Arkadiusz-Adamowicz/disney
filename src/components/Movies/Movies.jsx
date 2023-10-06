import Movie from './Movie';

const Movies = ({ movies }) => {
  return (
    <div className='text-white flex flex-wrap w-[80%] gap-4 m-auto'>
      <h1 className='text-3xl w-full font-bold text-center p-4'>Movies</h1>
      {movies.map(movie => (
        <div key={movie.id} className='border border-[#31343E] w-full'>
          <Movie movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default Movies;
