import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css'; // Asegúrate de que la ruta coincida con tu archivo CSS


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
