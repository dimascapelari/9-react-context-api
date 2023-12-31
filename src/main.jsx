import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterContextProvider } from "./context/CounterContext.jsx";
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";
import { LoggedContextProvider } from "./context/LoggedContext.jsx";
import { RedContextProvider } from "./context/RedContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2 - criando provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        <LoggedContextProvider>
          <RedContextProvider>
            <App />
          </RedContextProvider>
        </LoggedContextProvider>
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
