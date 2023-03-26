import React, {useState, useEffect, useContext} from 'react';

//import icons
import {RiMapPinTimeLine, RiMap2Line, RiArrowDownSLine, 
RiArrowUpSLine, 
RiHome5Line} from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';



const PropertyDropdown = () => {
  const { property, setProperty, properties } = 
  useContext(HouseContext);

 

  const [isOpen, setIsOPen] = useState(false);

  return <Menu as='div' className='dropdown ralative'>
    <Menu.Button 
      onClick={()=> setIsOPen(!isOpen)} 
      className='dropdown-btn w-full text-left'>
      <RiHome5Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>{property}</div>
        <div className='text-[13px]'>Select your place</div>
      </div>
      
      
        {isOpen ? (<RiArrowUpSLine 
        className='dropdown-icon-secondary' />) :
        (<RiArrowDownSLine 
        className='dropdown-icon-secondary'/>
        
        )}
     
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {properties.map((property, index) => {
        return <Menu.Item 
        onClick={()=> setProperty(property)}
        className='cursor-pointer
         hover:text-amber-700 transistion'
          as='li'
          key={index}>
        {property}
      
    </Menu.Item>
      })}
    </Menu.Items>


  </Menu>;
};

export default PropertyDropdown;
