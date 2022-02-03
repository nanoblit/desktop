import React from "react";
import { useEffect } from "react";
import DisplayWindow from "./components/display-window/DisplayWindow";
import "./index.css";

function App() {
  useEffect(
    () =>
      document.addEventListener(
        "dragover",
        function (event) {
          // prevent default to allow drop
          event.preventDefault();
        },
        false
      ),
    []
  );

  return (
    <div className="relative h-full">
      <DisplayWindow />
    </div>
  );
}

export default App;
