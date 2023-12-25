import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const Title = () => <h2 className="heading">Using JSX!</h2>;

const num =<span>React Element</span>

// React Components

// Functional Component
const HeadingConponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      <h2>{num}</h2>
      <h3> Functional Component</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingConponent />);
