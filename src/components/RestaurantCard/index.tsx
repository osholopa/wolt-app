import React from "react";
import { Blurhash } from "react-blurhash";

import "./index.css";
import { RestaurantData } from "../../types";
import RestaurantDetails from "./RestaurantDetails";

export interface RestaurantProps {
  restaurant: RestaurantData;
}

const RestaurantCard: React.FC<RestaurantProps> = (props: RestaurantProps) => {
  const imageHeight = 0.25 * window.innerHeight;

  return (
    <div className="container">
      <Blurhash
        hash={props.restaurant.blurhash}
        width="100%"
        style={{ borderRadius: "inherit" }}
        height={imageHeight}
        resolutionX={32}
        resolutionY={32}
        punch={2}
      />
      <RestaurantDetails restaurant={props.restaurant} />
    </div>
  );
};

export default RestaurantCard;
