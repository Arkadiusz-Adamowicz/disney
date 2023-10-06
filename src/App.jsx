import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import useMovies from './hooks/useMovies';

const App = () => {
  const { movies } = useMovies();
  console.log(movies);
  return (
    <>
      <Header />
      <Movies movies={movies} />
    </>
  );
};

export default App;
