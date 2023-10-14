import { Carousel } from '@material-tailwind/react';
import useMovies from '../../hooks/useMovies';

const Slider = () => {
  const { movies } = useMovies();
  const image_base_url = 'https://image.tmdb.org/t/p/original';
  return (
    <div className='mx-6 md:mx-16 mt-2'>
      <div className='text-white items-center mx-auto mb-4  '>
        <Carousel
          autoplay
          loop
          transition={{ duration: 1 }}
          className='rounded-lg shadow-lg shadow-black border-[2px] border-gray-600 '
        >
          {movies
            .sort((a, b) => (a.title < b.title ? -1 : 1))
            .map(movie => (
              <div key={movie.id}>
                <img
                  src={image_base_url + movie.backdrop_path}
                  className='w-full h-[200px] md:h-[420px] object-cover object-top rounded-lg '
                />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
