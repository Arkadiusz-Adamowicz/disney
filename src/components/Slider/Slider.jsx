import { Carousel } from "@material-tailwind/react";
import useMovies from "../../hooks/useMovies";

const Slider = () => {
  const { movies } = useMovies();
  const image_base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="text-white w-full flex items-center justify-center flex-col mr-5">
      <Carousel autoplay loop>
        {movies
          .sort((a, b) => (a.title < b.title ? -1 : 1))
          .map((movie) => (
            <div key={movie.id} className="flex px-16 py-4 mb-8">
              <h2 className="absolute p-2 font-bold text-2xl">{movie.title}</h2>
              <img
                src={image_base_url + movie.backdrop_path}
                className="min-w-full h-[200px] md:h-[450px]  object-cover object-top bg-red-500 rounded-lg shadow-lg shadow-black"
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Slider;
