const Movie = ({ movie }) => {
  const image_base_url = 'https://image.tmdb.org/t/p/original';
  return (
    <div className='text-white rounded-lg border border-[#31343E] w-[100px] md:w-[200px] shadow-xl shadow-black hover:border-[2.5px] hover:scale-105 hover:border-gray-600 transition-all duration-200 ease-in-out'>
      <img
        src={image_base_url + movie.poster_path}
        alt='poster'
        className='rounded-md'
      />
    </div>
  );
};

export default Movie;
