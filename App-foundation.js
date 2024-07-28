import ReactDom from "react-dom/client";
import React from "react";

// React Element
// const header = React.createElement(
//   "h1",
//   { className: "heading" },
//   "Namaster React!!"
// );

// JSX
const Header = () => <h1>Namaste React using JSX</h1>;

const HeaderComponent = () => (
    <div className="container">
        <Header />
        <h1>Namaste React using FC</h1>
    </div>

);

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(header) // normal reactElements can be rendered directly but components need to be written as a tag
root.render(<HeaderComponent />);
