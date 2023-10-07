import disney from '../../assets/Images/disney.png';
import marvel from '../../assets/Images/marvel.png';
import nationalG from '../../assets/Images/nationalG.png';
import pixar from '../../assets/Images/pixar.png';
import starwars from '../../assets/Images/starwars.png';

import disneyVid from '../../assets/Videos/disney.mp4';
import marvelVid from '../../assets/Videos/marvel.mp4';
import nationalGVid from '../../assets/Videos/national.mp4';
import pixarVid from '../../assets/Videos/pixar.mp4';
import starwarsVid from '../../assets/Videos/star-wars.mp4';

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyVid,
    },
    {
      id: 2,
      image: marvel,
      video: marvelVid,
    },
    {
      id: 3,
      image: nationalG,
      video: nationalGVid,
    },
    {
      id: 4,
      image: pixar,
      video: pixarVid,
    },
    {
      id: 5,
      image: starwars,
      video: starwarsVid,
    },
  ];

  return (
    <div className='flex items-center justify-center gap-2 md:gap-6 p-2 px-5 md:px-16'>
      {productionHouseList.map(item => (
        <div
          key={item.id}
          className='border-[2px] border-gray-600 hover:border-white rounded-lg shadow-black shadow-lg relative hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'
        >
          <img src={item.image} alt={item.name} className='absolute' />
          <video
            src={item.video}
            alt={item.name}
            autoPlay
            loop
            muted
            playsInline
            className='rounded-md opacity-0 hover:opacity-100'
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
