import React, {useState, useEffect} from "react";
import "./index.css";

const Counter = (props) => {
  const [count, setCount] = useState(42);

  useEffect(() => {
      document.title = `You clicked ${count} times`;
  });
  
  return <div className="counter"><p>You clicked {count} times</p>
  <button onClick={() => setCount(count+1)}>Click me</button></div>;
};

export default Counter;
