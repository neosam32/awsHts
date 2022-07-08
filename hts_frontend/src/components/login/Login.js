import React from "react";
import styled from "styled-components";
import Badge from "react-bootstrap/Badge";

const StyLoginDiv = styled.div`
  padding: 10px 0 10px 0;
`;

const Login = () => {
  return (
    <StyLoginDiv>
      <h5>
        <Badge bg='success'>로그인 페이지</Badge>
      </h5>
    </StyLoginDiv>
  );
};

export default Login;
