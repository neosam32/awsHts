import React from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../counterSlice";

const Bottom = () => {
  // const dispatch = useDispatch();
  // <button onClick={() => dispatch(increment("증가"))}>증가</button>
  // <button onClick={() => dispatch(decrement("감소"))}>감소</button>
  return (
    <div className='sub_container'>
      <h1>바닥</h1>
    </div>
  );
};

export default Bottom;
