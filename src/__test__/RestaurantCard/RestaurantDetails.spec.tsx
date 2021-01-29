import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, RenderResult } from "@testing-library/react";

import RestaurantDetails from "../../components/RestaurantCard/RestaurantDetails";

let documentBody: RenderResult;

const restaurant = {
  blurhash: "UDSoswyZVqm.p%cRjLaKUgZ+k.kWrFZ%a$kX",
  launch_date: "2020-11-26",
  location: [24.938908, 60.160413],
  name: "Salt",
  online: true,
  popularity: 0.8954324472876662,
};

describe("<RestaurantDetails />", () => {
  beforeEach(() => {
    documentBody = render(<RestaurantDetails restaurant={restaurant} />);
  });

  it("renders name", () => {
    expect(documentBody.getByText("Salt")).toBeInTheDocument();
  });

  it("renders correct online status", () => {
    expect(documentBody.getByText("ONLINE")).toBeInTheDocument();
  });
});
