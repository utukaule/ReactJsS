// NOTE: while creating element using createElement react is not creating HTML, it is actually creating 
// object.
// when it is rendeing on to the DOM eg.root.render(parent) it converts itself into the HTML and puts 
// itself into the element.


// nested React
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
        React.createElement("h1", {}, "Nested H1 Heading"),
        React.createElement("h2", {}, "Nested H2 Heading"),

    ]
  )
);
console.log(parent)

const heading = React.createElement("h1", { id: "heading" }, "Hello React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




// const heading = React.createElement('h1',{},"Hello React")

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// JavaScript code
// const heading = document.createElement('h1');
// heading.innerHTML = 'this is heading';

// const root = document.getElementById('root')
// root.append(heading )
