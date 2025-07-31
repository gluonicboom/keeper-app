import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
 import "./styles.css"; // ✅ updated path after moving styles.css into src/

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
