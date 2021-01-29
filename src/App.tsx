import React from "react";
import "./App.css";
import data from "./data/discovery_page.json";

import Carousel from "./components/Carousel";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="App-header">Hello World</h1>
      {data.sections.map((section) => (
        <div key={section.title}>
          <h1>{section.title}</h1>
          <Carousel section={section} />
        </div>
      ))}
    </div>
  );
};

export default App;
