console.log("###### 1.1 Create a Hello World using React ######");

// React.createElement()
// Used to create a React Element (a JavaScript object representation of HTML)

const heading = React.createElement(
    "h1",                                       // HTML Tag to be created
    { id: "heading", className: "headClass" },  // Attributes/props for the element
    "#### Learn React! ####"                // Inner text / children
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
            React.createElement("h3", { key: "child-h3" }, "h3 tag inside nested tags."),
            React.createElement("h4", { key: "child-h4" }, "h4 tag inside nested tags.")
        ]
    )
);

// React element is just a JavaScript object (not actual HTML yet)
console.log("Created Nested React Element:", outer);

// Combining multiple React elements into one container
// React requires a single root element to render

const container = React.createElement(
    "div",
    { id: "container" },   // Main wrapper element
    heading,               // First child element
    outer                  // Second child element
);

// ReactDOM.createRoot()
// Creates a root container where React will manage and render the UI
const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render()
// Converts React elements (JavaScript objects) into real DOM elements
// and inserts them into the browser DOM
root.render(container);