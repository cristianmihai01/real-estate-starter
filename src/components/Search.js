import React, { useContext } from 'react';
import CountryDropdown from '../components/CountryDropdown'
import PropertyDropdown from '../components/PropertyDropdown'
import PriceRangeDropdown from '../components/PriceRangeDropdown'
import { RiSearch2Line } from 'react-icons/ri'
import { HouseContext } from './HouseContext'

const Search = () => {
  const {handleClick} = useContext(HouseContext)
  return (
    <div className='flex lg:flex-row flex-col justify-between mx-auto gap-4 lg:gap-x-3 relative
    px-[30px] py-6 max-w-[1170px] lg:-top-4 lg:shadow-1 
    bg-white lg:bg-transparent rounded-lg backdrop-blur-xl'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button className='bg-violet-700 hover:bg-violet-800 text-white transition w-full lg:max-w-[162px]
      h-16 rounded-lg flex justify-center items-center' onClick={() => handleClick()}>
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
