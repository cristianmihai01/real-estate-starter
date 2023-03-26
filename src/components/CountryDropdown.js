import React, {useState, useEffect, useContext} from 'react';

//import icons
import { RiMap2Line, RiArrowDownSLine, 
RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';



const CountryDropdown = () => {
  const { country, setCountry, countries } = 
  useContext(HouseContext);

 

  const [isOpen, setIsOPen] = useState(false);

  return <Menu as='div' className='dropdown ralative'>
    <Menu.Button 
      onClick={()=> setIsOPen(!isOpen)} 
      className='dropdown-btn w-full text-left'>
      <RiMap2Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>{country}</div>
        <div className='text-[13px]'>Select your place</div>
      </div>
      
      
        {isOpen ? (<RiArrowUpSLine 
        className='dropdown-icon-secondary'/>) :
        (
        <RiArrowDownSLine 
        className='dropdown-icon-secondary' />
        )}
     
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {countries.map((country, index) => {
        return (
        <Menu.Item 
            onClick={()=> setCountry(country)}
            className='cursor-pointer hover:text-amber-700 transistion'
              as='li'
              key={index}>
            {country}
          
        </Menu.Item>
        )
      })}
    </Menu.Items>


  </Menu>;
};

export default CountryDropdown;
