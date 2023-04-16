import { useState } from 'react';
import './index.scss';

function App() {

  let[count , setCount] = useState(0)

  function handleCountPlus(){
    setCount(()=>count++);
  }

  function handleCountMinus(){
    setCount(()=>{
      if(count<=1)return count
      
      return count--;
    });
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={handleCountMinus} className="minus">- Минус</button>
        <button onClick={handleCountPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
