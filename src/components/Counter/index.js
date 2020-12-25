import React, {useState} from "react";
import "./index.css";

const Counter = (props) => {
  const [count, setCount] = useState(42)
  const add = () => {
      count++
  }
  return <div className="counter"><p>You clicked {count} times</p>
  <button onClick={() => setCount(count+1)}>Click me</button></div>;
};

export default Counter;
