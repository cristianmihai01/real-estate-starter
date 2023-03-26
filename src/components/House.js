import React from 'react';
import {BiBed, BiBath, BiArea} from 'react-icons/bi';


const House = ({house}) => {
  const {imageLg, type, country, address, bedrooms,
  bathrooms, surface, price} = house;
  return(
  <div className='
  w-full max-w-[352px] max z-auto
  cursor-pointer hover:shadow-2xl p-4 transisition rounded-lg'>
    <div className='bg-gray-500 rounded-2xl flex mb-1'>
      <img className='rounded-2xl aspect-square object-cover ' src={imageLg} alt='' />
    </div>
    
    
      <div className='text-black text-sm'>{type}</div>
      
   
    <div className='text-sm font-medium 
    max-w-[260px]'>
    {address}</div>
    
    <div className='flex gap-x-2 '>
      <div className='flex items-center
      text-gray-600 gap-1 text-sm'>
       <div className='text-[16px]'> 
        <BiBed/>
        </div> 
        <div>{bedrooms}</div>
      </div>
      <div className='flex items-center
      text-gray-600 gap-1 text-sm'>
       <div className='text-[16px]'> 
        <BiBath/>
        </div> 
        <div>{bathrooms}</div>
      </div>
      <div className='flex items-center
      text-gray-600 gap-1 text-sm'>
       <div className='text-[16px]'> 
        <BiArea/>
        </div> 
        <div>{surface}</div>
      </div>
    </div>
    <div className='text-lg font-semibold
    text-amber-600'>$ {price}</div>
  </div>
  
  );
};

export default House;
