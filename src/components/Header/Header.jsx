import logo from '../../assets/Images/logo.png';
import avatar from '../../assets/Images/avatar.png';
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
    <div className='flex items-center justify-between pt-4 pb-2 px-5 md:px-16'>
      <div className='flex md:gap-5 gap-2 items-center'>
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
              <div className='absolute right-5 mt-6 text-center bg-[#1b1d29] border-gray-600 border-[2px] p-1 rounded-md flex flex-col z-10'>
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
      <img src={avatar} alt='avatar' className='w-[40px] rounded-full' />
    </div>
  );
};

export default Header;
