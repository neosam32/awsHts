import React from "react";

const EstWritePage = () => {
  const handleWirte = () => {
    // 리스트 페이지에 목록에 추가 해야됨.
    let estList = { id: 6, title: "만들어진제목" };
  };
  return (
    <div>
      <h1>글쓰기</h1>
      <hr />
      <form>
        <input type='text' placeholder='제목'></input>
        <button type='button' onClick={handleWirte}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default EstWritePage;
