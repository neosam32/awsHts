import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Login from '../components/login/Login';
import { StyActionDiv } from '../components/HtsCss';
import { SvUrl } from '../components/HtsConf';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGrantType,
  setAccessToken,
  setRefreshToken,
  setAccessTokenExpiresIn,
  setEmail,
  setBrId,
} from '../counterSlice';

const LoginPage = props => {
  const dispatch = useDispatch();
  // 스토어에 저장할 객체
  const grantType = useSelector(state => state.token.grantType);
  const accessToken = useSelector(state => state.token.accessToken);
  const refreshToken = useSelector(state => state.token.refreshToken);
  const accessTokenExpiresIn = useSelector(
    state => state.token.accessTokenExpiresIn,
  );
  const email = useSelector(state => state.token.email);
  const brId = useSelector(state => state.token.brId);

  const naviagte = useNavigate();

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

  /* 로그인 */
  const loginProc = () => {
    // e.prventDefault();
    //console.log("START loginProc");
    //console.log(JSON.stringify(user));
    //    alert(JSON.stringify(user));
    //    return;

    let tUrl = SvUrl + 'auth/loginProc';

    //console.log("tUrl=" + tUrl);

    fetch(tUrl, {
      method: 'post',
      Accept: 'application/json',
      headers: { 'Content-Type': 'application/json ; charset=utf-8;' },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(res => {
        // 로그인 성공함
        console.log(res.grantType);

        dispatch(setGrantType(res.grantType));
        dispatch(setAccessToken(res.accessToken));
        dispatch(setRefreshToken(res.refreshToken));
        dispatch(setAccessTokenExpiresIn(res.accessTokenExpiresIn));
        dispatch(setEmail(res.email));
        dispatch(setBrId(res.brId));

        naviagte('/');
        // console.log(aa);
      })
      .catch(err => console.log(err));
  };

  // const logtrc = () => {
  //   console.log('grantType=' + grantType);
  //   console.log('accessToken=' + accessToken);
  //   console.log('refreshToken=' + refreshToken);
  //   console.log('accessTokenExpiresIn=' + accessTokenExpiresIn);
  //   console.log('email=' + email);
  //   console.log('brId=' + brId);
  // };

  return (
    <div>
      <div className="container">
        <Login>로그인 페이지</Login>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            name="email"
            onChange={changeValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">비밀번호:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
            name="password"
            onChange={changeValue}
          />
        </div>
        <br />
        <StyActionDiv>
          <div className="form-group">
            <button className="btn-primary" onClick={loginProc}>
              로그인
            </button>
          </div>
        </StyActionDiv>
        <br />
      </div>
    </div>
  );
};

export default LoginPage;
