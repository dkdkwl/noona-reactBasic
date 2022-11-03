import './App.css';
import { useState } from 'react';

function App() {
  let counter = 0;
  const [counter2,setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
  };
  return (
    <div>
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
