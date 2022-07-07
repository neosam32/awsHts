import React, { useState } from "react";
import styled from "styled-components";

const StyEstListPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 50;
  margin: 10px;
  align-items: center;
`;

const TestWritePage = () => {
  //상태를 만든다.
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
  });

  const [objList, setObjList] = useState([
    { id: 1, title: "제목1", content: "내용  1" },
    { id: 2, title: "제목2", content: "내용  2" },
    { id: 3, title: "제목3", content: "내용  3" },
    { id: 4, title: "제목4", content: "내용  4" },
    { id: 5, title: "제목5", content: "내용  5" },
  ]);

  //   const handleChangeTitle = e => {
  //     console.log('handleChangeTitle');
  //     setPost({ title: e.target.value });
  //   };
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    // computed property names 문법 : 키값 동적 할당
    // 기존값 유지하면서 update
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleWirte = (e) => {
    ///   e.preventDefalut(); // 폼태그가 갈려는 옵션 중지
    console.log(post);

    setObjList([...objList, post]);
  };

  return (
    <div>
      <h1>테스트 글쓰기</h1>
      <form>
        <input
          type='text'
          placeholder='제목'
          value={post.title}
          onChange={handleChange}
          name='title'
        ></input>
        <input
          type='text'
          placeholder='내용'
          value={post.content}
          onChange={handleChange}
          name='content'
        ></input>
        <button type='button' onClick={handleWirte}>
          글쓰기
        </button>
      </form>
      <h1>목록조회</h1>
      <div>
        {objList.map((ol) => {
          return (
            <StyEstListPageBox>
              <div>
                {" "}
                id : {ol.id} 제목 : {ol.title} 내용 : {ol.content}
              </div>
              <button onClick={() => {}}> 삭제 </button>
            </StyEstListPageBox>
          );
        })}
      </div>
    </div>
  );
};

export default TestWritePage;
