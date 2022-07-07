import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const Top = ({}) => {
  const number = useSelector((state) => state.counter.number);
  const username = useSelector((state) => state.counter.username);

  return (
    <div className='sub_container'>
      <h1>Top</h1>
      번호 : {number} / 이름 :{username}
    </div>
  );
};

export default Top;
