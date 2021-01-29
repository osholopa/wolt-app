import React from "react";

import { RestaurantProps } from "./index";

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
  return (
    <>
      <Online online={props.restaurant.online} />
      <p className="restaurant-name">{props.restaurant.name}</p>
    </>
  );
};

export default RestaurantDetails;
