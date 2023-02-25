import React, { useContext, useState } from 'react';
// import icon
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
// import headless ui
import { Menu } from '@headlessui/react'

import { HouseContext } from './HouseContext'
const CountryDropdown = () => {
  const { country, countries, setCountry } = useContext(HouseContext);
  console.log(country);
  const [isOpen, setIsOpen] = useState(false);
  return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiMapPinLine className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>{country}</div>
        <div className='text-[13px]'>Select your place</div>
      </div>
      {isOpen ?
        <RiArrowDownSLine className='dropdown-icon-secondary' /> :
        <RiArrowUpSLine className='dropdown-icon-secondary' />
      }
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {countries.map((country, index) => {
        return (
          <Menu.Item onClick={() => setCountry(country)}
            className='cursor-pointer hover:text-violet-700 transition'
            as='li' key={index}
          >
            {country}
          </Menu.Item>)
      })}
    </Menu.Items>
  </Menu>;
};

export default CountryDropdown;
