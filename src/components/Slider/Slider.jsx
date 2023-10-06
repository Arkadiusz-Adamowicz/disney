import { Carousel } from '@material-tailwind/react';

const Slider = ({ movies }) => {
  return (
    <div className='text-white h-[200px] w-full border border-[#31343E] flex overflow-x-auto items-center justify-center gap-5'>
      <Carousel>
        {movies.map(movie => (
          <div key={movie.id} className='mt-[70px]'>
            <h2 className='text-3xl font-bold text-center p-2'>
              {movie.title}
            </h2>
            {/* <img
              src={movie.poster_path}
              alt={movie.name}
              className='h-full w-full object-cover'
            /> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
