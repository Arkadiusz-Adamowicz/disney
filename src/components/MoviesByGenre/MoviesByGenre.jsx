import Genres from '../../constants/Genres';
import Movies from '../Movies/Movies';
const MoviesByGenre = () => {
  return (
    <div className='my-2'>
      {Genres.genres.map(
        (item, i) =>
          i < 5 && (
            <div key={item.id} className='p-4 px-8 md:px-16'>
              <h2 className='text-white text-[20px] font-bold my-2'>
                {item.name}
              </h2>
              <Movies genreId={item.id} />
            </div>
          )
      )}
    </div>
  );
};

export default MoviesByGenre;
