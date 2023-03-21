import { useContext } from "react";
import React from 'react';

import { HouseContext } from "./HouseContext";

import House from './House';

import { Link } from "react-router-dom";
import {ImSpinner2} from 'react-icons/im'

const HouseList = () => {
  const {houses, loading} = useContext(HouseContext)

  //if loading is true
  if(loading){
    return (
      <ImSpinner2 className='animate-spin text-2xl text-violet-700 mx-auto
      text-2x1 mt-[200px]'/>
    );
  }

  if(houses.length < 1){
    return <div className="text-center text-3x1
    text-gray-400 mt-48">Sorry, nothing found</div>
  }
    

  return (
  
   <section className='mb-20'>
    <div className="container mx-auto">
      <div className='grid sm:grid-cols-1 md:grid-cols-3
      lg:grid-cols-4 gap-4 lg:gap-14'>
        {houses.map((house, index)=>{
          return (
            <Link to={`/property/${house.id}`} key={index}>
            <House house={house}/>
          </Link>
          
          )
        })}
      </div>

    </div>



  </section>
  
  );
  
};

export default HouseList;
