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

const EstListPage = () => {
  // 임시 최초 데이터
  const [objList, setObjList] = useState([
    { id: 1, title: "제목1" },
    { id: 2, title: "제목2" },
    { id: 3, title: "제목3" },
    { id: 4, title: "제목4" },
    { id: 5, title: "제목5" },
  ]);

  return (
    <div>
      {" "}
      <h1>목록조회</h1>
      <div>
        {objList.map((ol) => {
          return (
            <StyEstListPageBox>
              <div>
                {" "}
                id : {ol.id} 제목 : {ol.title}{" "}
              </div>
              <button onClick={() => {}}> 삭제 </button>
            </StyEstListPageBox>
          );
        })}
      </div>
    </div>
  );
};

export default EstListPage;
