import "./index.scss";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={handleMinus} className="minus">
          - Минус
        </button>
        <button onClick={handlePlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
