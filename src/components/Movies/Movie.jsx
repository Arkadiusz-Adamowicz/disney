const Movie = ({ movie }) => {
  const image_base_url = 'https://image.tmdb.org/t/p/original';
  return (
    <div className='text-white rounded-lg w-[100px] md:w-[200px] shadow-xl shadow-black border-[2px] border-gray-600 hover:border-white hover:scale-[102%] transition-all duration-300 ease-in-out cursor-pointer'>
      <div className='h-[150px] md:h-[300px]'>
        <img
          src={image_base_url + movie.poster_path}
          alt='poster'
          className='rounded-md h-full '
        />
      </div>
    </div>
  );
};

export default Movie;
