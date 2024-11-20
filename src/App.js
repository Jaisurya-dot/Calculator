import React, { useState ,useEffect } from 'react';

function App() {
  const [count,setCount] = useState(0);
// useEffect syntax (function,dependency) but dependency is optional 

  setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);


 

  return <>
 
  <p>Count {count}</p>
  </>

}

export default App;
