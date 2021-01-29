import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, RenderResult } from "@testing-library/react";

import { SectionTitle } from "../../components/Section";

let documentBody: RenderResult;

describe("<SectionTitle />", () => {
  beforeEach(() => {
    documentBody = render(<SectionTitle text="New Restaurants" />);
  });

  it("renders section title correctly", () => {
    expect(documentBody.getByText("New Restaurants")).toBeInTheDocument();
  });
});
