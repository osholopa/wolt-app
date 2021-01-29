import React from "react";

import { SectionData } from "../types";
import Carousel from "./Carousel";

interface SectionProps {
  section: SectionData;
}

interface TitleProps {
  text: string;
}

export const SectionTitle: React.FC<TitleProps> = (props: TitleProps) => {
  return <h1>{props.text}</h1>;
};

const Section: React.FC<SectionProps> = (props: SectionProps) => {
  return (
    <div>
      <SectionTitle text={props.section.title} />
      <Carousel section={props.section} />
    </div>
  );
};

export default Section;
