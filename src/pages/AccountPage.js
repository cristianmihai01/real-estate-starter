import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link, Navigate, useParams } from 'react-router-dom';

export default function AccountPage() {
    const {subpage} = useParams();
    console.log(subpage)    
    const { ready,user } = useContext(UserContext);


if (!ready) {
    return "Loading...";
}

if (ready && !user) {
    return <Navigate to='/SignIn' />;
}



    return (
        <section className="min-h-screen  items-center justify-center">
            <div>
                <nav className='w-full flex gap-4 mt-8 justify-center'>
                <Link className='py-2 px-4 text-amber-600 font-medium' 
                    to={'/account/profile'}>
                        My profile
                        </Link>
                    <Link className='py-2 px-4 text-gray-400 font-medium
                    ' 
                    to={'/account/listings'}>
                        My listings
                        </Link>
                    <Link className='py-2 px-4 text-gray-400 font-medium' 
                    to={'/account/favourites'}>
                        My favourites
                        </Link>
                </nav>
            </div>
        </section>
    );
}