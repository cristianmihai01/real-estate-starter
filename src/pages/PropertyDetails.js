import React from 'react';

//import data
import { housesData } from '../data';

//import use params
import { useParams } from 'react-router-dom';

//import icons
import {BiBed, BiBath, BiArea} from 'react-icons/bi'

//import link
import {Link} from 'react-router-dom'



const PropertyDetails = () => {
//get the house id
const { id } = useParams();


// get the house based on the id
const house = housesData.find((house) => {
  return house.id === parseInt(id);
});



if (!house) {
  return <div>House not found</div>;
}

return (
  <section>
    <div className="container mx-auto min[800px]
    mb-14">
      <div className='flex flex-col lg:flex-row 
      lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{house.name}</h2>
          <h3 className='text-lg mb-4'>{house.address}</h3> 
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 
        text-sm'>
          <div className='bg-green-500 text-white
          px-3 rounded-full'>
            {house.type}
            </div>
          <div className='bg-amber-500 text-white
          px-3 rounded-full'>
            {house.country}
            </div>
        </div>
        <div className='text-3xl font-semibold
        text-amber-600'>
          $ {house.price}
          </div>
      </div>
      <div className='flex flex-col items-start
      gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={house.imageLg} alt="" />
          </div>
          <div className='flex gap-x-6 
          text-amber-700 mb-6'>
          <div className='flex gap-x-2'>
            <BiBed className='text-2xl'/> 
            <div>{house.bedrooms}</div>
          </div>
          <div className='flex gap-x-2'>
            <BiBath className='text-2xl'/>
            <div>{house.bathrooms}</div>
          </div>
          <div className='flex gap-x-2'>
            <BiArea className='text-2xl'/>
            <div>{house.surface}</div>
          </div>
        </div>
        <div>{house.description}</div>
        </div>
        <div className='flex-1 bg-white-100 w-full
        mb-8 border border-gray-300 rounded-lg
        px-6 py-8'>
          <div className='flex items-center
          gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border
            border-gray-300 rounded-full'>
              <img src={house.agent.image} alt='' 
              />
            </div>
            <div className='font-bold text-lg'>
              {house.agent.name}
              </div>
          </div>
          {/*form*/}
          <form className='flex flex-col gap-y-4'>
            <input 
            className='border border-gray-300
            focus:border-amber-700 outline-none
            rounded w-full px-4 h-14 text-sm' 
            type="text" 
            placeholder='Name*'
            />
            <input
            className='border border-gray-300
            focus:border-amber-700 outline-none
            rounded w-full px-4 h-14 text-sm' 
            type="text"
            placeholder='Name*'
            />
            <input 
            className='border border-gray-300
            focus:border-amber-700 outline-none
            rounded w-full px-4 h-14 text-sm' 
            type="text"
            placeholder='Name*'
            />
            <textarea className='border
            border-gray-300
            focus:border-amber-700 outline-none
            resize-none rounded w-full 
            p-4 h-36 text-sm text-gray-400'
            placeholder='Message'
            default='Hello I am interested in'
            ></textarea>
            <div className='flex gap-x-2'>
              <button className='bg-amber-700
              hover:bg-amber-800 text-white
              rounded p-4 text-sm w-full
              transition'>Send message</button>
              <button className='border
              border-amber-700 text-amber-700
              hover:border-amber-500
              hover:text-amber-500 rounded p-4
              text-sm w-full transition' >Call</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </section>
);
};

export default PropertyDetails;
