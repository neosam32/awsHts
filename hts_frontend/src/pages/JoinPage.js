import React from 'react';
import { useState } from 'react';
import Join from '../components/join/Join';

const JoinPage = () => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    tlno1: '',
    tlno2: '',
    tlno3: '',
  });

  const changeValue = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  /* 회원등록 */
  const submitJoinUser = () => {
    // e.prventDefault();
    // console.log("START joinUser");
    // console.log(JSON.stringify(user));
    //    alert(JSON.stringify(user));
    //    return;
    fetch('http://localhost:8000/auth/joinProc', {
      method: 'post',
      Accept: 'application/json',
      headers: { 'Content-Type': 'application/json ; charset=utf-8;' },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="container">
        <Join> </Join>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            name="email"
            onChange={changeValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">회원명:</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            name="username"
            onChange={changeValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">비밀번호:</label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            name="password"
            onChange={changeValue}
          />
        </div>
        <br />
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">휴대폰번호</span>
          </div>

          <input
            type="text"
            className="form-control"
            name="tlno1"
            onChange={changeValue}
          />
          <input
            type="text"
            className="form-control"
            name="tlno2"
            onChange={changeValue}
          />
          <input
            type="text"
            className="form-control"
            name="tlno3"
            onChange={changeValue}
          />
        </div>

        <button
          id="btn-join"
          className="btn btn-primary"
          onClick={submitJoinUser}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default JoinPage;
