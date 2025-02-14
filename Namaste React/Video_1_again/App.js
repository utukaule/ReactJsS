// NOTE: while creating element using createElement react is not creating HTML, it is actually creating
// object.
// when it is rendeing on to the DOM eg.root.render(parent) it converts itself into the HTML and puts
// itself into the element.

// nested React
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () =>{
    return <>
        <h2> this is title</h2>
    </>
}   

const title = (
    <h1> this is title</h1>
)

const number = 10;

const Heading = () =>{
    return <>
        {number}{title}
        <h1> this is heading</h1>
    </>
}


// const heading = React.createElement('h1',{},'this is heading')
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);

// JSX heading
// const jsxHeading = <h1>this is JSX code</h1>

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//         React.createElement("h1", {}, "Nested H1 Heading"),
//         React.createElement("h2", {}, "Nested H2 Heading"),

//     ]
//   )
// );
// console.log(parent)

// const heading = React.createElement("h1", { id: "heading" }, "Hello React");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement('h1',{},"Hello React")

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// JavaScript code
// const heading = document.createElement('h1');
// heading.innerHTML = 'this is heading';

// const root = document.getElementById('root')
// root.append(heading)
