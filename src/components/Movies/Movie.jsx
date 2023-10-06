const Movie = ({ movie }) => {
  return (
    <div className='text-white p-4'>
      <h2 className='text-xl font-bold mb-3'>{movie.title}</h2>
      <h3>{movie.overview}</h3>
    </div>
  );
};

export default Movie;
