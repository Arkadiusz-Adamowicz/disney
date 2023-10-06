import Header from './components/Header/Header';
// import Movies from './components/Movies/Movies';
import Slider from './components/Slider/Slider';
import useMovies from './hooks/useMovies';

const App = () => {
  const { movies } = useMovies();
  console.log(movies);
  return (
    <>
      <Header />
      <Slider />
      {/* <Movies movies={movies} /> */}
    </>
  );
};

export default App;
