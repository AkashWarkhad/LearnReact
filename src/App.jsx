import ReactDOM from "react-dom/client"
import About from "./components/About";
import AppLayout from "./components/foodApp";
import HelloWorld from "./components/HelloWorld";
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";

// React DOM Router takes array data with path & element
const appRouter = createBrowserRouter(
  [
    {
        "path": "/",
        "element": <HelloWorld />
    },
    {
      "path": "/app",
      "element": <AppLayout/>
    },
    {
      "path": "/about",
      "element": <About/>
    }
  ]);

// ReactDOM.createRoot()
// Creates a root container where React will manage and render the UI
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render()
// Converts React elements (JavaScript objects) into real DOM elements
// and inserts/replace(Existing content from HTML) them into the browser DOM
root.render(<RouterProvider
    future={{ v7_startTransition: true }} // Just to disable the warning from next upcomming version
    router={appRouter} />);