import React from "react";
import Slider from "infinite-react-carousel";

import { Section, Restaurant } from "../types";
import RestaurantDetails from "./RestaurantDetails";

interface SectionProps {
  section: Section;
}

const Carousel: React.FC<SectionProps> = (props: SectionProps) => {
  return (
    <Slider slidesToShow={2}>
      {props.section.restaurants.map((restaurant: Restaurant) => (
        <RestaurantDetails key={restaurant.blurhash} restaurant={restaurant} />
      ))}
    </Slider>
  );
};

export default Carousel;
