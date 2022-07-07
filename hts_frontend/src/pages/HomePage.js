import React, { useEffect, useState } from "react";

import Home from "../components/home/Home";

// HTTP 요청 ( fetch )
// fetch 로 요청
// 임시로 처리

const HomePage = () => {
  const [boards, setBoards] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 다운로드 가정= fetch ,axios , ajax  비동기 방식
    let datas = [
      { id: 1, title: "제목1", content: "내용1" },
      { id: 2, title: "제목2", content: "내용2" },
      { id: 3, title: "제목3", content: "내용3" },
    ];

    setBoards([...datas]);
    setUsers({ id: 1, username: "ddd" });
  }, []); // 빈배열이면 최초 한번만 실행됨.

  //props 부모창에서 자식에게 속성으로 데이터를 넘길수

  return (
    <div>
      <Home boards={boards} id={1} setBoards={setBoards} users={users}></Home>
    </div>
  );
};

export default HomePage;
