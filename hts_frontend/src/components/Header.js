import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

// 자신의 스타일을 랜더링 되는 밖에 전달
const Header = () => {
  const email = useSelector(state => state.token.email);
  const brId = useSelector(state => state.token.brId);

  console.log('[' + email + ']');

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> HTS</Navbar.Brand>
          <Nav className="me-auto" id="menuBar">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link
              to="/login"
              className="nav-link"
              id="loginLink"
              style={email === '' ? { display: 'block' } : { display: 'none' }}
            >
              로그인
            </Link>
            <Link
              to="/join"
              className="nav-link"
              id="joinLink"
              style={email === '' ? { display: 'block' } : { display: 'none' }}
            >
              회원가입
            </Link>
            <Link
              to="/est/write"
              className="nav-link"
              style={email === '' ? { display: 'none' } : { display: 'block' }}
              id="writeLink"
            >
              글쓰기
            </Link>

            <Link
              style={email === '' ? { display: 'none' } : { display: 'block' }}
              id="searchEstList"
              to="/est/search"
              className="nav-link"
            >
              목록조회
            </Link>
            <Link
              style={email === '' ? { display: 'none' } : { display: 'block' }}
              to="/testWrite"
              className="nav-link"
              id="testAdmin_1"
            >
              글쓰기테스트
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;
