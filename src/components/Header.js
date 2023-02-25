import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg'
const Header = () => (
  <header className='py-6 mb-12 border-b border-gray-500'>
    <div className='container mx-auto flex justify-between items-center'>
      {/* logo */}
      <Link to='/'><img src={Logo} alt='' /></Link>
      {/* Button */}
      <div className='flex items-center gap-6'>
        <Link className='hover:text-violet-900 transition' to='/login'>Login</Link>
        <Link className='bg-violet-700 hover:bg-violet-900 px-4 py-3 rounded-lg transition text-white' to='/logout'>Logout</Link>
      </div>
    </div>
  </header>);

export default Header;
