import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollTop from "./components/ScrollTop.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollTop />
    <App />
  </BrowserRouter>
);
