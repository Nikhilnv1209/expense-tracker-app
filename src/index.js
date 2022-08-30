import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <SpeechProvider appId = "46b1f2fe-418d-437f-916b-6d098d1221c8" language = "en-US">
  <Provider>
    <App />
  </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
