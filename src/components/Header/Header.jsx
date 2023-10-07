import logo from '../../assets/Images/logo.png';
import { useState } from 'react';
import {
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiHome,
} from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCH LIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv },
  ];
  return (
    <div className='flex items-center justify-between py-4 px-5'>
      <div className='flex gap-8 items-center'>
        <img
          src={logo}
          alt='logo'
          className='w-[120px] ml-[-20px] object-cover'
        />
        {/* desktop nav */}
        <div className='hidden md:flex gap-6'>
          {menu.map((item, i) => (
            <HeaderItem key={i} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* mobile nav */}
        <div className='flex md:hidden'>
          {menu.map(
            (item, i) => i < 3 && <HeaderItem key={i} Icon={item.icon} />
          )}
          <div
            className='md:hidden'
            onClick={() => setToggle(toggle => !toggle)}
          >
            <HeaderItem Icon={HiDotsVertical} />
            {toggle && (
              <div className='absolute mt-4 bg-[#1b1d29] border-[#31343E] border-[1px] p-2 rounded-md flex flex-col gap-2 z-10'>
                {menu.map(
                  (item, i) =>
                    i > 2 && (
                      <HeaderItem key={i} name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src='https://arkadiusz-adamowicz.netlify.app/static/media/foto.e4b39b240635ba514e05.jpeg'
        alt='avatar'
        className='w-[40px] rounded-full'
      />
    </div>
  );
};

export default Header;
