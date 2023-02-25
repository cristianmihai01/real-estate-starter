import React, { useContext, useState } from 'react';
// import icon
import { RiHome2Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
// import headless ui
import { Menu } from '@headlessui/react'

import { HouseContext } from './HouseContext'
const PropertyDropdown = () => {
  const { property, properties, setProperty } = useContext(HouseContext);
  console.log(property);
  const [isOpen, setIsOpen] = useState(false);
  return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiHome2Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>{property}</div>
        <div className='text-[13px]'>Select your place</div>
      </div>
      {isOpen ?
        <RiArrowDownSLine className='dropdown-icon-secondary' /> :
        <RiArrowUpSLine className='dropdown-icon-secondary' />
      }
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {properties.map((property, index) => {
        return (
          <Menu.Item onClick={() => setProperty(property)}
            className='cursor-pointer hover:text-violet-700 transition'
            as='li' key={index}
          >
            {property}
          </Menu.Item>)
      })}
    </Menu.Items>
  </Menu>;
};

export default PropertyDropdown;
