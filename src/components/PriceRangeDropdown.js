import React, { useContext, useState } from 'react';
// import icon
import { RiHome2Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
// import headless ui
import { Menu } from '@headlessui/react'

import { HouseContext } from './HouseContext'
const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)'
    },
    {
      value: '10000 - 15000'
    },
    {
      value: '15000 - 25000'
    },
    {
      value: '25000 - 35000'
    },
    {
      value: '35000 - 45000'
    },
    {
      value: '45000 - 500000'
    }
  ];
  return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiHome2Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>Select your place</div>
      </div>
      {isOpen ?
        <RiArrowDownSLine className='dropdown-icon-secondary' /> :
        <RiArrowUpSLine className='dropdown-icon-secondary' />
      }
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {prices.map((price, index) => {
        return (
          <Menu.Item onClick={() => setPrice(price.value)}
            className='cursor-pointer hover:text-violet-700 transition'
            as='li' key={index}
          >
            {price.value}
          </Menu.Item>)
      })}
    </Menu.Items>
  </Menu>;
};

export default PriceRangeDropdown;
