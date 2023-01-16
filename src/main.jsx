import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ArtistApp } from "./ArtistApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="buttom">
        <ArtistApp />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
