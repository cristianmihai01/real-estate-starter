import React, { useEffect, useState, createContext } from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    //remove duplicates
    const uniqueCountries = new Set(allCountries);

    //set countries state
    setCountries(['Location (any)', ...uniqueCountries]);
  }, [houses]);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    //remove duplicates
    const uniqueProperties = new Set(allProperties);

    //set properties state
    setProperties(['Property type (any)', ...uniqueProperties]);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  //create a function that checks if the string
  //includes '(any)'
  const isDefault = (str) => {
    return str.includes('(any)');
  };

  //get first value of price and parse it to number
  const minPrice = parseInt(price.split('-')[0]);

  //get second value of price which is the max value
  const maxPrice = parseInt(price.split('-')[1]); 

  const newHouse = housesData.filter((house) => {
    const housesPrice = parseInt(house.price);

    //if all valuse are default
    if 
      (house.country === country &&
      house.type === property && 
      housesPrice >= minPrice &&  
      housesPrice <= maxPrice  
      
      ) {
      return house;
    }
    

    // if all values are default
    if (isDefault(country) && isDefault(property) && 
    isDefault(price)) {
      return house;
    }

    //if country is default
    if (isDefault(country) && house.type === property && 
    housesPrice >= minPrice && housesPrice <= maxPrice) {
      return house;
    }

    //if property is default
    if (house.country === country && isDefault(property) &&
     housesPrice >= minPrice && housesPrice <= maxPrice) {
      return house;
    }

    //if price is default
    if (house.country === country && house.type === property &&
       isDefault(price)) {
      return house;
    }

    //if country is not default
    if (house.country === country && isDefault(property) &&
    isDefault(price)) {
      return house;
    }

    //if property is not default
    if (isDefault(country) && house.type === property &&
    isDefault(price)) {
      return house;
    }

    //if price is not default
    if (isDefault(country) && isDefault(property) &&
    housesPrice >= minPrice && housesPrice <= maxPrice) {
      return house;
    }

    //if country and property are not default
    if (house.country === country && house.type === property &&
    isDefault(price)) {
      return house;
    }

    //if country and price are not default
    if (house.country === country && isDefault(property) &&
    housesPrice >= minPrice && housesPrice <= maxPrice) {
      return house;
    }
    
    //if property and price are not default
    if (isDefault(country) && house.type === property &&
    housesPrice >= minPrice && housesPrice <= maxPrice) {
      return house;
    }

    //if country and property are default
    if (isDefault(country) && isDefault(property) &&
    housesPrice >= minPrice && housesPrice <= maxPrice) {
      return house;
    }

    //if country and price are default
    if (isDefault(country) && house.type === property &&
    isDefault(price)) {
      return house;
    }

    //if property and price are default
    if (house.country === country && isDefault(property) &&
    isDefault(price)) {
      return house;
    }


    setTimeout(() => {
      return newHouse.length > 0 ? setHouses(newHouse) : setHouses([]);
      }, 2000);
   
  });


 

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
        houses,
        handleClick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
