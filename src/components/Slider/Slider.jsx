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
              <img
                src={image_base_url + movie.backdrop_path}
                className="min-w-full h-[200px] md:h-[420px] object-cover object-top  rounded-lg shadow-lg shadow-black border-[2px] border-gray-600"
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Slider;
