import React, {Usestate} from "react";
import ColorGenerator from './ColorGenerator';

function App() {
  return (
    <div className="showcase">
      <header className="showcase2">
        <h1>Random Color Generator</h1>
        <ColorGenerator />
      </header>
    </div>
  );
}

export default App;
