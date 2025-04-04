import React from "react";
import ReactDOM from "react-dom/client"; // <-- Change "react-dom" to "react-dom/client"
//import { BrowserRouter } from "react-router-dom";
import App from "./App"; // <-- Remove curly braces {} if App has a default export

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
