import { useState } from 'react'

export default function CounterApp () {
    const [count, setCount] = useState(0);

    function addition (){
        setCount(count + 1);
    }
    function substraction (){
        if (count>0) {
            setCount(count - 1);
        }
    }
    function reset (){
        if (count>0) {
            setCount(0);
        }
    }
    function add5 (){
        setCount(count + 5);
    }
    function sub5() {
  if (count >= 5) {
    setCount(count - 5);
  } else {
    setCount(0);
  }
}

  return(
    <>
    <div id="counter" > 
    <div id="header">
      <div id="title">Counter App</div>
      <div id="subtitle">mahnoor ashfaq</div>
    </div>

    <div id="display-container">
      <div id="result">{count}</div>
    </div>
    
    <div id="buttons-grid">
        <div id='btn'>
    <button id='btn-action' onClick={addition}>Add1</button>
    <button id='btn-action' onClick={substraction}>Sub1</button>
    <button id='btn-action' onClick={add5}>Add5</button>
    <button id='btn-action'onClick={sub5}>Sub5</button>
    <button id='btn-reset' onClick={reset}>Reset</button>
    </div>
    </div>
    </div>


    </>
  )
}