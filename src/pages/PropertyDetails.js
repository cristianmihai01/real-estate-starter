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



// if (!house) {
//   return <div>House not found</div>;
// }

return (
  <section className='container max-auto min-h-[800px] mn-14'>
    <div>
      <div className='flex flex-col lg:flex-row
      lg:items-center lg:justify-between'>
           <div className='text-2xl font-semibold'>{house.price}</div>
           <h3 className='text-lg mb-4'>{house.address}</h3>
           </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2
        text-sm'>
          <div>{house.type}</div>
          <div>{house.country}</div>
        </div>
        <div className='text-3xl font-semibold
        text-violet-600'>$ 
        {house.price}
        </div>
        <div className='flex flex-col items-start 
        gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt='' />
            </div>
            <div className='flex gap-x-6
            text-violet-700 mb-6'>
              <div className='flex gap-x-2
              items-center'>
                <BiBed className='text-2x1'/>
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2
              items-center'>
                <BiBath className='text-2x1'/>
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2
              items-center'>
                <BiArea className='text-2x1'/>
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-white w-full
          mb-8 border border-gray-300 rounded-lg
          px-6 py-8'>
            <div className='flex items-center
            gap-x-4 mb-8'>
              <div>
                <img src= {house.agent.image} alt='' />
              </div>
              </div>
             
              <form>
                <input className='border
                 border-gray-300 
                 focuse:border-violet-700 outline-none
                 rounded w-full px-4 h-14 text-sm' type='text' />
                <input className='border
                 border-gray-300 
                 focuse:border-violet-700 outline-none
                 rounded w-full px-4 h-14 text-sm' type='text'  />
                <input className='border
                 border-gray-300 
                 focuse:border-violet-700 outline-none
                 rounded w-full px-4 h-14 text-sm' type='text'  />
                <textarea className='border 
                border-gray-300 
                focus:border-violet-700 outline-none
                resize-none rounded w-full p-4 h-36
                text-sm text-gray-400 '></textarea>
                <div>
                  <button 
                  className='bg-violet-700
                  hover:bg-violet-800 text-white
                  rounded p-4 text-sm w-full
                  transition'>Send message</button>
                  <button>Call</button>
                </div>
              </form>
          </div>
        </div>
    </div> 
  </section>
);
};

export default PropertyDetails;
