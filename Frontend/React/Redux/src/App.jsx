import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Components/Navbar";
import { decrement, increment } from "./Redux/Counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Navbar />
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>The value of count is {count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
}

export default App;
