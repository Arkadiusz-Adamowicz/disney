import { Carousel } from '@material-tailwind/react';
import disney from '../../assets/Images/disney.png';
import marvel from '../../assets/Images/marvel.png';
import nationalG from '../../assets/Images/nationalG.png';
import pixar from '../../assets/Images/pixar.png';
import starwars from '../../assets/Images/starwars.png';

const Slider = () => {
  const logos = [disney, marvel, nationalG, pixar, starwars];
  return (
    <div className='text-white h-[500px] w-full flex items-center justify-center gap-5 flex-col'>
      <Carousel className='bg-black'>
        <div className='flex items-center justify-center'>
          <img src='' className='object-cover bg-black' />
        </div>
      </Carousel>
      <div className='flex gap-4 mb-5 mx-5'>
        {logos.map((logo, i) => (
          <div key={i} className='bg-[#31343E] rounded-lg'>
            <img src={logo} alt='logo' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
