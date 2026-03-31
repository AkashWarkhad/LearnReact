import ReactDOM from "react-dom/client"
import About from "./components/About";
import HelloWorld from "./components/HelloWorld";
import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ContactUsClass from "./components/ContactUsClass"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestroMenu from "./components/RestroMenu";
import { lazy , Suspense } from "react";
//import Grocery from "./components/Grocery";

/** Comment the above regular import
 * Lazy Loading : Its also called as Chuncking/ Code Splitting/ Dynamic bundling/ On Demand loading/ Dynamic loading */
const Grocery = lazy(()=> import("./components/Grocery"));

/**
 * Food app design :
 * HEADER :
 *  - Logo
 *  - Nav Items
 *
 * BODY :
 *  - Search Bar
 *  - Restaurant Container
 *      - Food Cards
 *          - Img, Name of restro, star rating, cusines, delivery time
 *
 * FOOTER :
 *  - Copyrights
 *  - Contact details
 *  - Links
 *  - Addess
 */

const AppLayout = () => 
{
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

// createBrowserRouter is used to configure routing in React.
// It accepts an array of route objects with properties such as `path` and `element`,
// and returns a router instance used by RouterProvider.
const appRouter = createBrowserRouter(
  [
    {
      "path": "/",
      "element": <AppLayout/>,
      "errorElement": <Error />,
      "children": 
      [
        {
          "path": "/",
          "element": <Body/>
        },
        {
          "path": "/about",
          "element": <About/>
        },
        {
          "path": "/contact",
          "element": <ContactUsClass className = "ContactUsClass"/>
        },
        {
          "path": "/hello",
          "element": <HelloWorld />,
        },
        {
          "path": "/restaurant/:restroId", //Dynamic routing with Id
          "element": <RestroMenu /> 
        },
        {
          "path": "/grocery",
          
          // Suspense is a React component used to show a fallback UI (like a loader) while a lazy-loaded component is being fetched. It works together with React.lazy for code splitting.
          // When the user navigates to "Grocery", the component is loaded asynchronously in a separate bundle, and Suspense displays the fallback until loading is complete.
          "element": <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense> 
        }
      ]
    }
  ]);

// ReactDOM.createRoot()
// Creates a root container where React will manage and render the UI
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render()
// Converts React elements (JavaScript objects) into real DOM elements
// and inserts/replace(Existing content from HTML) them into the browser DOM
root.render
(

  // RouterProvider is used to connect the router (created using createBrowserRouter) to the React application.
  // It enables navigation and rendering of routes based on the current URL.
  <RouterProvider
      future={{ v7_startTransition: true }} // Just to disable the warning from next upcomming version
      router={appRouter} />
);