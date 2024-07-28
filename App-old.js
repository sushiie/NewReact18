import React from "react";
import ReactDOM from "react-dom/client";

const headerJS = document.createElement("h1");
headerJS.innerHTML = "Hello using javascript";
document.getElementById("container").appendChild(headerJS);

const root = document.getElementById("root");

const headerReact1 = React.createElement("h1", {}, "This is a React Project");
const headerReact2 = React.createElement("h1", {}, "Header2 using React");
const container = React.createElement(
    "div",
    { class: "new-react-container" },
    [headerReact1, headerReact2]
);

const rootElementForReact = ReactDOM.createRoot(root);
rootElementForReact.render(container);