import Movie from './Movie';
import useMovies from '../../hooks/useMovies';

const Movies = () => {
  const { movies, topRated, trending, action, comedy, documentary, tv } =
    useMovies();

  return (
    <div className='px-5 md:px-[60px]'>
      <div className='text-white flex flex-col w-full mb-[-20px] gap-5 m-auto'>
        <div className='flex flex-col gap-5 mt-4'>
          <h2 className='text-15px md:text-[22px] px-1 font-bold'>
            Now Playing
          </h2>
          <div className='flex overflow-x-auto px-1 pt-1 pb-10 gap-2 md:gap-5'>
            {movies.map(movie => (
              <div key={movie.id}>
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-white flex flex-col w-full mb-[-20px] gap-5 m-auto'>
        <div className='flex flex-col gap-5 mt-4'>
          <h2 className='text-15px md:text-[22px] px-1 font-bold'>Top Rated</h2>
          <div className='flex overflow-x-auto px-1 pt-1 pb-10 gap-2 md:gap-5'>
            {topRated.map(movie => (
              <div key={movie.id}>
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-white flex flex-col w-full mb-[-20px] gap-5 m-auto'>
        <div className='flex flex-col gap-5 mt-4'>
          <h2 className='text-15px md:text-[22px] px-1 font-bold'>Trending</h2>
          <div className='flex overflow-x-auto px-1 pt-1 pb-10 gap-2 md:gap-5'>
            {trending.map(movie => (
              <div key={movie.id}>
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-white flex flex-col w-full mb-[-20px] gap-5 m-auto'>
        <div className='flex flex-col gap-5 mt-4'>
          <h2 className='text-15px md:text-[22px] px-1 font-bold'>Action</h2>
          <div className='flex overflow-x-auto px-1 pt-1 pb-10 gap-2 md:gap-5'>
            {action.map(movie => (
              <div key={movie.id}>
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-white flex flex-col w-full mb-[-20px] gap-5 m-auto'>
        <div className='flex flex-col gap-5 mt-4'>
          <h2 className='text-15px md:text-[22px] px-1 font-bold'>Comedy</h2>
          <div className='flex overflow-x-auto px-1 pt-1 pb-10 gap-2 md:gap-5'>
            {comedy.map(movie => (
              <div key={movie.id}>
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-white flex flex-col w-full mb-[-20px] gap-5 m-auto'>
        <div className='flex flex-col gap-5 mt-4'>
          <h2 className='text-15px md:text-[22px] px-1 font-bold'>
            Documentary
          </h2>
          <div className='flex overflow-x-auto px-1 pt-1 pb-10 gap-2 md:gap-5'>
            {documentary.map(movie => (
              <div key={movie.id}>
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-white flex flex-col w-full mb-[-20px] gap-5 m-auto'>
        <div className='flex flex-col gap-5 mt-4'>
          <h2 className='text-15px md:text-[22px] px-1 font-bold'>TV</h2>
          <div className='flex overflow-x-auto px-1 pt-1 pb-10 gap-2 md:gap-5'>
            {tv.map(movie => (
              <div key={movie.id}>
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
