import React, {useState, useEffect, useContext} from 'react';

//import icons
import {RiWallet3Line, RiMap2Line, RiArrowDownSLine, 
RiArrowUpSLine, 
RiHome5Line} from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';



const PriceRangeDropdown = () => {
  const { price, setPrice} = 
  useContext(HouseContext);

 

  const [isOpen, setIsOPen] = useState(false);

  const prices= [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000-200000',
    },
    {
      value: '200000-300000',
    },
    {
      value: '300000-400000',
    },
    {
      value: '400000-500000',
    },
    {
      value: '500000-600000',
    },
    

  ]

  return <Menu as='div' className='dropdown ralative'>
    <Menu.Button 
      onClick={()=> setIsOPen(!isOpen)} 
      className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>Choose your price range</div>
      </div>
      
      
        {isOpen ? (<RiArrowUpSLine 
        className='dropdown-icon-secondary' />) :
        (<RiArrowDownSLine 
        className='dropdown-icon-secondary'/>
        
        )}
     
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {prices.map((price, index) => {
        return <Menu.Item 
        onClick={()=> setPrice(price.value)}
        className='cursor-pointer
         hover:text-violet-700 transistion'
          as='li'
          key={index}>
        {price.value}
      
    </Menu.Item>
      })}
    </Menu.Items>


  </Menu>;
};

export default PriceRangeDropdown;
