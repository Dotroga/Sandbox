import React, {useState} from "react";
import './App.scss';

function App() {
    const [visiblePopup, setVisiblePopup] = useState(false)
  return (
    <div className="App">
      <header className="Header">
        <h1>Sandbox</h1>
          <button onClick={()=>setVisiblePopup(!visiblePopup)}>
              {visiblePopup ? 'Close' : 'Open'}
          </button>
          {visiblePopup &&
              <div className="Info">
                  <p>Karpenkin Vasili</p>
                  <p>Course: Front-end Developer</p>
              </div>}
      </header>
    </div>
  );
}

export default App;
