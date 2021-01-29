import React from "react";
import { Restaurant } from "../types";
import "./RestaurantDetails.css";
import { Blurhash } from "react-blurhash";

interface RestaurantProps {
  restaurant: Restaurant;
}

interface OnlineProps {
  online: boolean;
}

const Online: React.FC<OnlineProps> = (props: OnlineProps) => {
  return (
    <div>
      <p className="online-text">
        <svg className="online-icon" height="14" width="14">
          <circle
            cx="50%"
            cy="50%"
            r="4"
            strokeWidth="0"
            fill={props.online ? "#4CD137" : "#737373"}
          />
        </svg>
        {props.online ? "ONLINE" : "OFFLINE"}
      </p>
    </div>
  );
};

const RestaurantDetails: React.FC<RestaurantProps> = (
  props: RestaurantProps
) => {
  
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
      <Online online={props.restaurant.online} />
      <p className="restaurant-name">{props.restaurant.name}</p>
    </div>
  );
};

export default RestaurantDetails;
