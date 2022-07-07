import React from "react";
import { Button } from "react-bootstrap";

import styled from "styled-components";

const StyDeleteBtn = styled.button`
  color: ${(props) => props.color};
`;

// 페이제에서 넘긴 boards 데이터를
// function 방식으로 받아서 처리 가능
const Home = (props) => {
  //   const boards = props.boards;
  //   console.log(props);

  // 구조분할 할당
  const { boards, users, setBoards } = props;
  //   const { id } = props;
  console.log(users.username);

  return (
    <div>
      <Button variant='outline-primary'>Primary</Button>{" "}
      <StyDeleteBtn color={"blue"} onClick={() => setBoards([])}>
        전체삭제
      </StyDeleteBtn>
      <StyDeleteBtn color={"red"} onClick={() => setBoards([])}>
        삭제
      </StyDeleteBtn>
      {boards.map((board) => (
        <h3 key={board.id}>
          {" "}
          타이틀 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
