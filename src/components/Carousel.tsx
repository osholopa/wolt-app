import React from "react";
import Slider from "infinite-react-carousel";

import { SectionData, RestaurantData } from "../types";
import RestaurantCard from "./RestaurantCard";

interface SectionProps {
  section: SectionData;
}

const Carousel: React.FC<SectionProps> = (props: SectionProps) => {
  return (
    <Slider slidesToShow={2}>
      {props.section.restaurants.map((restaurant: RestaurantData) => (
        <RestaurantCard key={restaurant.blurhash} restaurant={restaurant} />
      ))}
    </Slider>
  );
};

export default Carousel;
