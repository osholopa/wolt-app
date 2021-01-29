import React from "react";
import { Restaurant } from "../types";
import { Blurhash } from "react-blurhash";

interface RestaurantProps {
  restaurant: Restaurant;
}

const RestaurantDetails: React.FC<RestaurantProps> = (props: RestaurantProps) => {
  return (
    <div>
      <h1>Restaurant</h1>
      <p>Name: {props.restaurant.name}</p>
      <p>Launch: {props.restaurant.launch_date}</p>
      <Blurhash
        hash={props.restaurant.blurhash}
        width={400}
        height={300}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
    </div>
  );
};

export default RestaurantDetails;
