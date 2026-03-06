import React from "react";
import ReactDOM from "react-dom/client"


// ################## 1.1 Create a Hello World using React ##################
console.log("###### 1.1 Create a Hello World using React ######");

// React.createElement()
// Used to create a React Element (a JavaScript object representation of HTML)

//Flow:  React.createElement => ReactElement-JS Object => HTML Element => Render
const heading = React.createElement(
    "h1",                                       // HTML Tag to be created
    { id: "heading", className: "headClass" },  // Attributes/props for the element
    "#### Learn React 19! ####"                 // Children / Inner Content
);

// React element is just a JavaScript object (not actual HTML yet)
console.log("Created React Element:", heading);


console.log("###### 1.2 Create nested elements using React ######");

// Creating nested structure:
// <div id="parent">
//      <div id="child">
//          <h1>...</h1>
//          <h2>...</h2>
//      </div>
// </div>

const outer = React.createElement(
    "div",                      // Parent div
    { id: "parent" },           // Attributes
    React.createElement(
        "div",                  // Child div
        { id: "child" },
        [
            // When multiple elements are inside an array, React requires a unique "key"
            React.createElement("p", { key: "p-1" }, "What is React? :- React is an open-source JavaScript library used to build fast, interactive, and reusable user interfaces using a component-based architecture."),
            React.createElement("p", { key: "p-2" }, "Why Do We Use React? :- React is an open-source JavaScript library developed by Facebook for building fast and interactive user interfaces using reusable components and a Virtual DOM for efficient rendering.")
        ]
    )
);

// React element is just a JavaScript object (not actual HTML yet)
console.log("Created Nested React Element:", outer);


// ################## 2.1 JSX (JavaScript XML) ##################
console.log("###### 2.1 JSX (JavaScript XML) ######");

//Flow: JSX =>(Babel transpiled) React.createElement [ => ReactElement-JS Object => HTML Element => Render]
var jsxHeading = <h1 id="jsxHeading" className="jsxClass">JSX(JavaScript XML)</h1>;
var jsxInfo = 
(
    <p> 
        What is JSX? :- JSX is a syntax extension for JavaScript used in React that
        allows developers to write HTML-like code inside JavaScript. JSX is compiled by Babel 
        into React.createElement() calls that create React elements.
        Babel is responsible for transpiled the JSX code into react code & then rendering happens.
    </p>
);

console.log("JSX Heading: ", jsxHeading);

// ################## 2.2 React Components ##################
console.log("################## 2.2 React Components ##################");

console.log("######## React Functional Components :");

// Arrow Function
const FuncHeading = () => <h4>## React Functional Component :-</h4>;

const FunctionalComponent = () => 
{
    return (
        <p>
            What is a Functional Component in React? :- A functional component in React is a JavaScript function that returns JSX and represents
            a reusable UI element. Functional components are simple, easy to maintain, and support React Hooks for managing state and side effects.
        </p>
    );
}

// Older/Normal Function
function NormalFunctionSyntax()
{
    return(<hr></hr>);
}


const allJsxComponents = 
(
    <div id="jsxContainer">
        {/** Component compostion : Component Composition is the process of combining smaller React components together to create a larger and more complex UI component.*/}
        {jsxHeading}
        {jsxInfo}

        {/* Two ways to use a functional component: as a JSX element and by calling the function directly */}
        <FuncHeading/>     
        {FunctionalComponent()}
        <NormalFunctionSyntax />
        
    </div>
);

// Combining multiple React elements into one container
// React requires a single root element to render
const container = React.createElement(
    "div",
    { id: "container" },   // Main wrapper element
    heading,               // First child element
    outer,                  // Second child element
    allJsxComponents
);

// ReactDOM.createRoot()
// Creates a root container where React will manage and render the UI
const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render()
// Converts React elements (JavaScript objects) into real DOM elements
// and inserts/replace(Existing content from HTML) them into the browser DOM
root.render(container);