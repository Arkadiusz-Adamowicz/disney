import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <div className="text-white flex flex-wrap w-[80%] gap-4 m-auto">
      <h1 className="text-3xl w-full font-bold py-5">Now Playing</h1>
      {movies
        .sort((a, b) => (a.title < b.title ? -1 : 1))
        .map((movie) => (
          <div key={movie.id} className="w-full">
            <Movie movie={movie} />
          </div>
        ))}
    </div>
  );
};

export default Movies;
