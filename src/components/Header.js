import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className='py-6 mb-8 border-b'>
      <div className='container mx-auto flex justify-between h-8 items-center'>
        <Link className='w-40 h-16' to='/'>
          <img src={logo} alt='' />
        </Link>
        <Link to={user? "/account":"SignIn"}>
          {!!user && (
          <div className='flex gap-2 border border-gray-300 rounded-full
          py-2 px-4 align-items-center items-center'> 
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </div>

          <div className='bg-amber-600 w-4 h-4 text-white rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>

          </div>
          <div className='text-sm font-medium'>{user.name}</div>
          
          </div>
        )}
        </Link>
        {!user && (
          <div className='flex items-center gap-6'>
            <Link className='hover:text-amber-900 transition' to='/SignIn/'> Log in </Link>
            <Link className='bg-amber-700
              hover:bg-amber-800 text-white px-4 py-3
              rounded-lg transition' to='/SignUp/'> Sign up </Link>
          </div>
        )}
      </div>
      
   </header>
  );
};

export default Header;
