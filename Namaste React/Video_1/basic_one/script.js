import React from "react";
import ReactDOM from "react-dom/client";

// react element
const heading = <h2>this is JSX</h2>;
// functional components
const heading2 = () => <div>this is components</div>;
// const heading2 = React.createElement(
//   "h1",
//   {
//     id: "title2",
//   },
//   "heading 2"
// );
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2]
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(  heading);
