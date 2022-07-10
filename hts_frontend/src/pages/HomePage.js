import React, { useEffect, useState } from 'react';

import Home from '../components/home/Home';

// HTTP 요청 ( fetch )
// fetch 로 요청
// 임시로 처리

const HomePage = () => {
  const [boards, setBoards] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 다운로드 가정= fetch ,axios , ajax  비동기 방식
    let datas = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...datas]);
    setUsers({ id: 1, username: 'ddd' });
  }, []); // 빈배열이면 최초 한번만 실행됨.

  //props 부모창에서 자식에게 속성으로 데이터를 넘길수

  return (
    <div>
      <article
        className="markdown-body entry-content container-lg"
        itemProp="text"
      >
        <h1 dir="auto">
          <a
            id="user-content-react--spring-boot-연결"
            className="anchor"
            aria-hidden="true"
            href="#react--spring-boot-연결"
          >
            <svg
              className="octicon octicon-link"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
              ></path>
            </svg>
          </a>
          React + Spring Boot
        </h1>

        <h3 dir="auto">
          <svg
            className="octicon octicon-link"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
            ></path>
          </svg>
          설정
        </h3>
        <ul dir="auto">
          <li>Springboot ^2.0</li>
          <li>JPA</li>
          <li>JWT</li>
          <li>MyBatis</li>
          <li>MYSQL</li>
          <li>Maven</li>
          <li>Spring security</li>
          <li>Spring security taglibs</li>
          <li>JSTL</li>
          <li>React</li>
          <li>react-route-dom</li>
          <li>redux react-redux</li>
          <li>react-bootstrap bootstrap</li>
          <li>@reduxjs/toolkit</li>
        </ul>
        <h3 dir="auto"></h3>
        <ul dir="auto">
          <li>ESLint</li>
          <li>Reacts code nippets</li>
          <li>vscode-styled-components </li>
          <li> @reduxjs/toolkit</li>
          <li> * AWS EC2 서버 선택시 무저건 Ubuntu 로 설치 아님 고생함. </li>
        </ul>
      </article>
    </div>
  );
};

export default HomePage;
