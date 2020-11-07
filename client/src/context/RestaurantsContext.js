import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] =useState([])
  const addRestaurants = (restaurant) => {
      setRestaurants([...restaurants, restaurant])
  }

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        selectedRestaurant, 
        setSelectedRestaurant,
        addRestaurants
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};