import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import PostProvider from "./contexts/PostProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>
);
