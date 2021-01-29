import React from "react";
import "./App.css";
import data from "./data/discovery_page.json";

import Section from "./components/Section";

const App: React.FC = () => {
  return (
    <div className="App">
      {data.sections.map((section) => (
        <Section key={section.title} section={section} />
      ))}
    </div>
  );
};

export default App;
