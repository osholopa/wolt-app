import React from "react";
import { Restaurant } from "../types";

interface RestaurantProps {
  restaurant: Restaurant;
}

const RestaurantDetails: React.FC<RestaurantProps> = (props: RestaurantProps) => {
  return (
    <div>
      <h1>Restaurant</h1>
      <p>Name: {props.restaurant.name}</p>
      <p>Launch: {props.restaurant.launch_date}</p>
    </div>
  );
};

export default RestaurantDetails;
