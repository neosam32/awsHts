import React from "react";
import styled from "styled-components";

//하나의 컴포넌트를 생성 ( 재사용 )
// js 파일과 css 파일관리 가능
const SylFooterDiv = styled.div`
  border: 1px solid black;
  height: 100px;
`;

const Footer = () => {
  return (
    <SylFooterDiv>
      <ul>
        <li>오시는길 : 서울....</li>
        <li>전화번호 : 020000</li>
      </ul>
    </SylFooterDiv>
  );
};

export default Footer;
