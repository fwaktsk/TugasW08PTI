import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
var h1 = document.createElement("h1");
h1.innerHTML = "Hello world!";
rootElement.appendChild(h1);

root.render(<StrictMode></StrictMode>);
