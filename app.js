import React from "react";
import ReactDOM from "react-dom/client";


const elem = <span>React Element</span>

// react element
const jsxHeading = (
    <h1 id="heading">
        {elem}
        hello world
    </h1>
);


//# component composition

// 1st component
const Title = ()=>(
    
    <h1 className="head" tabIndex="5">
        namaste react functional component2
    </h1>
)

// 2nd react functional component

const number  = 1000;
const HeadingComponet = () =>(
    <div id="container">
        {jsxHeading}
        <h2>{number}</h2>
        <Title />
        <h1 className="heading">react functional component</h1>
    </div>
)




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponet/>)