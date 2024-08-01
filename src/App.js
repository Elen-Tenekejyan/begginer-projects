import React, { useState } from "react";
import "./index.scss";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Open Window
      </button>

      {open && (
        <div className="overlay">
          <div className="modal">
            <svg
              onClick={() => setOpen(false)}
              height="200"
              viewBox="0 0 200 200"
              width="200"
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGpmOGpnZjR1NWRhNmR3Zml0MHU3eGpzbTBobzdtYnFvaGxmNXJweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
