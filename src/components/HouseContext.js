import React, { createContext } from 'react';
import { useEffect, useState } from 'react'
import { housesData } from '../data'

// create context
export const HouseContext = createContext();
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Place type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price Range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map(house => {
      return house.country;
    })
    // remove duplicate
    const uniqueCountry = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountry);

    const allProperties = houses.map(house => {
      return house.type;
    })
    // remove duplicate
    const uniqueProperty = ['Place type (any)', ...new Set(allProperties)];
    console.log(uniqueProperty);
    setProperties(uniqueProperty);
  }, [])

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    }
    // Get price
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      const houseCountry = house.country;
      const houseProperty = house.type;
      if (houseCountry === country
        && houseProperty === property
        && housePrice < maxPrice
        && housePrice > minPrice
      ) {
        return house;
      }
      // all is default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      // property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      // price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice < maxPrice && housePrice > minPrice) {
          return house;
        }
      }
      // country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      // country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (country === house.country && housePrice < maxPrice && housePrice > minPrice) {
          return house;
        }
      }
      // property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (property === house.type && housePrice < maxPrice && housePrice > minPrice) {
          return house;
        }
      }
    })
    setTimeout(() => {
      setLoading(false);
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses)
    }, 1000);
  }

  return <HouseContext.Provider
    value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      loading,
      houses,
      handleClick
    }}>{children}</HouseContext.Provider>
}

export default HouseContextProvider;
