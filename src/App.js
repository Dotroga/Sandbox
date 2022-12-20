import React, {useState} from "react";
import BackgroundColor from "./copmonents/BackgroundColor";
import './App.scss';

function App() {
    const [visiblePopup, setVisiblePopup] = useState(false)
    console.log(document.body.style.backgroundColor)
  return (
    <div className="app">
        <div className='color'>
            <BackgroundColor/>
        </div>
      <header className="header">
        <h1>Sandbox</h1>
          <button onClick={()=>setVisiblePopup(!visiblePopup)}>
              {visiblePopup ? 'Close' : 'Open'}
          </button>
          {visiblePopup &&
              <div className="info">
                  <p>Karpenkin Vasili</p>
                  <p>Course: Front-end Developer</p>
              </div>}
      </header>
    </div>
  );
}

export default App;
