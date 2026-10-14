import React from 'react'

const Counter = () => {
  const [count,setCount] = useState(0);
    function incCount(){
      setCount(count+1);
      console.log(count);
    }
  
    return (
      <div>
      <h1>React State App</h1>
      <h3>Count={count}</h3>
      <button onClick={incCount}>Click Me!</button>
      </div>
    )
}

export default Counter