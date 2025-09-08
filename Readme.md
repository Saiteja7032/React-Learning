React Learning Content:

Episode-02
- What is `NPM`?
    NPM is a package manager used to install and maintain any packages needed in the project to optimise the react code.
- What is `Parcel/Webpack`? Why do we need it?
    Parcel is one of the package installed using the npm command. This package has lot of advantages/uses that can make our code production ready, some of the advantages are:
        1) It is is used for creating development builds
        2) It creates local server to run the code in browser
        3) It does HMR- Hot Module Reload 
        4) It has file watching algorithm that watches files for any changes then once saved it reloads the web browser with latest changes.
        5) It caches the data for faster rebuild time
        6) It does image optimization
        7) It minifies the code for optimization performance.
- What is `.parcel-cache`
    It is the folder created while executing the parcel commands to build, it consists of the cached code so that the rebuilding of the project will be done faster.
- What is `npx` ?
    npx is an executing command simiar to npm which is used to install the packages where as npx is used to build/execute the packages.
- What is difference between `dependencies` vs `devDependencies`
    dependencies: 
        > These are runtime dependencies.
        > Your app needs them to run in production.
        > Example: A React app needs react and react-dom at runtime.
        > These can be seen inside the package.json like
           "dependencies": {
                "react": "^19.1.1",
                "react-dom": "^19.1.1"
            },

    devdependencies:
        > These are development-only dependencies.
        > Used for building, testing, or tooling — not needed in production.
        > Example:
            Bundlers (parcel, webpack, vite)
            Transpilers (babel, typescript)
            Testing libraries (jest, eslint)    
        > These can be seen inside the package.json like        
            "devDependencies": {
                "parcel": "^2.15.4"
            },
- What is Tree Shaking?
    Parcel supports tree-shaking it statically analyzes the imports and exports of each module, and removes everything(code) that isn't used.
- What is Hot Module Replacement?
    HMR exchanges, adds or removes modules while the application is still in running state withour needing full reload.
    > It retails the application state that will be lost during full reload of the page.
    > Saves the time by only reloding what is needed instead of full reload.
    > Instantly updates the browser when modifications are made to css/html/js 
- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.
    > Tree Shaking
    > Hot reload
    > Diagnostics
    > Parcel caching
    > Minification
    > Image Optimization
    Refer https://parceljs.org/ for more understandanging of the parcel superpowers...!!!
- What is `.gitignore`? What should we add and not add into it?
    > This is a file that we can create in the project so that the files or folders that does not needed to be pushed to git repo can be mentioned.
    > If a file or folder can be recreated every time with a command even tough it is deleted, such files or folders can be added to .gitignore file so that they will not be pushed to repo. 
- What is the difference between `package.json` and `package-lock.json`
    > package.json: This is the file that contains all the dependencies in the project, the versions of the dependencies can be updated by usage of ~(majour update) and ^(Minor update) in fornt of the existing version number.
    > package-lock.json: This file contains the exact version number used to build or run the project. 
- Why should I not modify `package-lock.json`?
    > It is an auto-generated file created by npm.
    > It locks exact versions of every package (and their sub-dependencies).
    > This ensures that everyone who installs the project gets the same dependency tree, even if package.json just says "^1.2.3" (which could resolve to different versions over time). 
- What is `node_modules` ? Is it a good idea to push that on git?
    > It is a folder that is created when we run "npm install" command in a project
    > "node-modules" is a folder that consists of all the dependencies and the subdependencies of them listed in the package.json
- What is the `dist` folder?
    > dist is the folder that is created after the build command.
    > It consists of production ready build of the project.
    > It consists of optimized JS/CSS/index.html files.
- What is `browserlists`
    > It is a config that tells the build tools which borwers we want to support.

//============================================================================================================

Episode-03
- What is JSX?
    > JSX -> Java Script XML
    > It is a HTMl-like or XML-like syntax language
    > This makes the writing of JS in react easy and compact.
    > JS engine does not understand JSX it only understands ES6.
    >JSX code-> React.createElement()->which is a JS object-> converted to HTML element->which then renders to web Page.
- Superpowers of JSX
    > Makes react code easy to write and understand.
    > HTML like syntax
- Role of type attribute in script tag? What options can I use there?
    >The type attribute in the script informs what type of script it is and how to handle it.
    
- {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
    > {TitleComponent} → Just a reference to the function, NOT rendering it.
    > {<TitleComponent/>} → Renders the component (self-closing tag, no children).
    > {<TitleComponent></TitleComponent>} → Renders the component with potential children inside.

//============================================================================================================

Episode-04

- Is JSX mandatory for React?

    > No. JSX is just syntactic sugar for React.createElement().
    > You can write React without JSX, but JSX makes the code easier to read and write.
    > Example without JSX:
        > React.createElement("h1", null, "Hello");

- Is ES6 mandatory for React?

    > No. React doesn’t require ES6, but most modern React code uses ES6+ features (class, arrow functions, import/export, let/const).
    > Without ES6, your code can become verbose.

- How can I write comments in JSX?
    > Use curly braces with /* */ inside JSX.
        <div>
        {/* This is a comment */}
        <h1>Hello</h1>
        </div>

- What is <React.Fragment></React.Fragment> and <> </> ?
    > Both are ways to group multiple elements without adding an extra DOM node.
    > <React.Fragment> → Verbose form.
    > <> </> → Shorthand (doesn’t support attributes).
    > Example:
        <>
        <h1>Title</h1>
        <p>Paragraph</p>
        </>

- What is Virtual DOM?
    > A lightweight copy of the real DOM kept in memory.
    > React updates the Virtual DOM first, then efficiently updates only the changed parts in the real DOM.
    > This makes UI updates faster.

- What is Reconciliation in React?
    > The process React uses to compare the old Virtual DOM with the new Virtual DOM (using a diffing algorithm).
    > Based on this, React decides what needs to change in the actual DOM.

- What is React Fiber?
    > React Fiber is the new reconciliation engine (introduced in React 16).
    > It enables features like time slicing, suspense, and better rendering performance.
    > Basically, it helps React handle rendering in a more interruptible and efficient way.

- Why we need keys in React? When do we need keys in React?
    > Keys help React identify which items changed, added, or removed in a list.
    > Without keys, React will re-render unnecessarily, causing performance issues.
    > Needed when rendering lists of elements.

- Can we use index as keys in React?
    > Yes, but not recommended.
    > Use index as a key only when:
    > The list is static (no changes).
    > No unique IDs are available.
    > Otherwise, using index can cause bugs in UI updates.

- What is props in React? Ways to use props?
    > Props = short for properties.
    > They are used to pass data from parent to child components.
    > Props are read-only.
    > Ways to use:
        function Greeting(props) {
        return <h1>Hello {props.name}</h1>;
        }
// Usage
<Greeting name="Saiteja" />

- What is a Config Driven UI?
    > A UI that is generated based on configuration/data (usually JSON) instead of hardcoded elements.
    > Useful for dynamic forms, dashboards, or menus.
    > Example:

        [
        { "type": "text", "label": "Name" },
        { "type": "email", "label": "Email" }
        ]

//============================================================================================================

Episode-05

- Difference between Named Export, Default Export, and * as Export
    > Named Export
        > You can export multiple things by name.
        > Must import using the same name (inside {}).
        > Example: 
            // file.js
            export const a = 10;
            export function greet() {}

            import { a, greet } from "./file";

    > Default Export
        > Only one default export per file.
        > Can import with any name.
        > Example:
            // file.js
            export default function greet() {}

            import MyFunction from "./file"; // name can be anything


    > * as Export (Namespace Import)
        > Imports everything from a module under a single object.
        > Example:
            // file.js
            export const a = 10;
            export const b = 20;

            import * as utils from "./file";
            console.log(utils.a, utils.b);

- Importance of config.js File

    > A centralized file where you store configuration values (API URLs, constants, keys, feature flags).
    > Makes code clean, reusable, and maintainable.
    > Easy to switch environments (dev, staging, prod).
    > Example:
        // config.js
        export const API_URL = "https://api.example.com";
        export const TIMEOUT = 5000;

        // App.js
        import { API_URL } from "./config";

- What are React Hooks?

    > Hooks are special functions introduced in React 16.8 that let you use state and lifecycle features in functional components.
    > Examples: useState, useEffect, useContext, useReducer.

- Why do we need a useState Hook?

    > useState lets functional components store and update state (data that changes over time).
    > Without it, functional components were stateless.
    > Example:
        import { useState } from "react";

        function Counter() {
        const [count, setCount] = useState(0); // state variable

        return (
            <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
        }
Here, count is state, and setCount updates it → triggers re-render.

//============================================================================================================

