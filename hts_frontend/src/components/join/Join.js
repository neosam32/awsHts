import React from "react";
import styled from "styled-components";
import Badge from "react-bootstrap/Badge";

const StyJoinDiv = styled.div`
  padding: 10px 0 10px 0;
`;

const Join = () => {
  return (
    <StyJoinDiv>
      <h5>
        <Badge bg='success'>회원가입 페이지</Badge>
      </h5>
    </StyJoinDiv>
  );
};

export default Join;
