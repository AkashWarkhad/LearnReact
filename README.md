# LearnReact 🚀

This repository documents my learning journey while exploring **React (v18 / v19)**.  
The goal of this project is to understand React fundamentals, how React works internally, and modern React development practices through small hands-on examples.

This project contains experiments, notes, and implementations created while learning and practicing React concepts step by step.

---

## 🎯 Learning Objectives

The purpose of this repository is to:

- Understand the core fundamentals of **React**
- Learn how **React works internally**
- Practice creating elements using `React.createElement`
- Understand **JSX and how it works behind the scenes**
- Learn **component-based architecture**
- Understand **React rendering and reconciliation**
- Build a strong foundation before moving to advanced React concepts

---

## 🛠 Tech Stack

The technologies used in this learning project include:

- **JavaScript (ES6+)**
- **React 18 / React 19**
- **HTML**
- **npm (Node Package Manager)**

---

## 📚 Topics Covered

This repository will include implementations and practice examples for the following topics.

### React Fundamentals
- What is React
- Why React is used
- React vs traditional DOM manipulation
- React CDN usage
- Creating elements using `React.createElement`
- Rendering elements using `ReactDOM.createRoot`

### Parcel
- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm - Written in C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consitent Hashing
- Code spliting
- Differential Bundelling -(Support for older browser version)
- Diagonstic 
- Error Handling
- HTTPs
- Tree Shaking - Remove unused code.
- Different Bundles for Dev & Prod




### JSX
- Introduction to JSX
- JSX vs `React.createElement`
- How JSX works internally
- JSX compilation using Babel

### Components
- Functional components
- Component composition
- Reusable UI components

### Props and State
- Passing data using props
- Dynamic rendering
- Introduction to component state

### React Hooks
- `useState`
- `useEffect`
- Understanding how hooks work

### Advanced Concepts
- Virtual DOM
- React reconciliation
- Rendering process in React

### Links
- swiggy: https://www.swiggy.com/ (Refferenced)
- React: https://react.dev/learn
- npm: https://www.npmjs.com/
- Parcel: https://parceljs.org/
- Browserslist: https://browsersl.ist/
- BrowserslistDev: https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
- Bable: https://babeljs.io/
- Folder Structure : https://legacy.reactjs.org/docs/faq-structure.html
- Shimmer Loadder : https://www.npmjs.com/package/react-shimmer-effects
- CORS Proxy : https://corsproxy.io/
- React Roter Dom : https://reactrouter.com/ (CMD to Install : npm i react-router-dom)
- React Life Cycle Method Diagram - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- Lazy Loading with Suspense - https://react.dev/reference/react/lazy#suspense-for-code-splitting
- Tailwind CCS Installation guide - https://tailwindcss.com/docs/installation/framework-guides
- Redux - https://redux.js.org/
- Immer - https://immerjs.github.io/immer/ (responsible for immutating the state behind the Redux Slice)
- React Testing Library - https://testing-library.com/docs/react-testing-library/intro/
- Jest Library - https://jestjs.io/

### Redux Toolkit
- Steps :
    - Install Redux toolkit (@reduxjs/toolkit) & react-redux (CMD : npm i @reduxjs/toolkit react-redux)
    - Buid our store
    - Connect our store to our app
    - Slice (Cart Slice)
    - Dispatch (Action)
    - Selector

### Setting up testing : 
- Install React Testing Lib -> (npm install --save-dev @testing-library/react @testing-library/dom)
- Install Jest -> (npm i -D jest)
- Install Bable Dependencies (npm install --save-dev babel-jest @babel/core @babel/preset-env)
- Configure Bable file :  Can find here (https://jestjs.io/docs/getting-started)

- Configure .parcelrc file in root level to disable default babel traspilation from main parcel : find file content -> (https://parceljs.org/languages/javascript/#usage-with-other-tools)

- Write Jest Configuration (npx create-jest) Select (TypeScript : No -> jsdom (browser-like) -> coverage : y -> babel -> clear test cache: yes (Can find data : E:\Web-Design-Projects\REACT\LearnReact\jest.config.js )

- Install Jest Environmet Lib : (npm install --save-dev jest-environment-jsdom) url: https://testing-library.com/docs/react-testing-library/setup#jest-28

- Install babels preset lib -> (npm i -D @babel/preset-react)

- Add this line in babel.config.js : ["@babel/preset-react", { runtime: "automatic"}]

- Install @testing-library/jest-dom : (npm i -D @testing-library/jest-dom)

- File which considered as test file is under __tests__ folder : 
testMatch Regex: **/__tests__/**/*.?([mc])[jt]s?(x), **/?(*.)+(spec|test).?([mc])[jt]s?(x)

    - Header.test.js
    - Header.test.ts
    - Header.spec.js
    - Header.spect.ts


---

### ShortCut
- Shortcut to create react component in new file : rafce
- For Tailwind CSS IntelliSense plugin, to see suggestion : Ctrl + SpaceBar
- Shortcut to add Emoji : Windows Key + .
- To run test with anything changes in the test : 
    - Add Script : "watch-test": "jest --watch"
    - Run Once in the Terminal, it will run on every change : (npm run watch-test)
    - OR Add extension called Jest

### Install Plugins & Extensions : 
- React Developer Tool Extension - Which enables component & profiler in the inspect section
- Allow CORS Extension
- JSON Viewer Extension
- Redux DevTools Extension - Redux DevTools for debugging application's state changes. The extension provides power-ups for your Redux development workflow.

### Types of Routing
- Server Side Routing
- Client Side Routing

### Types Of Testing - Developer
- Unit Test -> Test the pice of code or component in isolation.
- Integration Test -> Test the integration of components flow together.
- End To End Test (E2E) -> Test the full e2e flow of the feature.

## 📦 Project Setup

Clone the repository:

```bash
git clone https://github.com/AkashWarkhad/LearnReact.git
```

To Run the Project on Local/Dev:

```bash
npm start
```

To Run the Project on Production:

```bash
npm run build
```