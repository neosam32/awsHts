import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

// 자신의 스타일을 랜더링 되는 밖에 전달
const Header = () => {
  return (
    <div>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand> HTS</Navbar.Brand>
          <Nav className='me-auto'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
            <Link to='/login' className='nav-link'>
              로그인
            </Link>
            <Link to='/join' className='nav-link'>
              회원가입
            </Link>
            <Link to='/est/write' className='nav-link'>
              글쓰기
            </Link>
            <Link to='/est/search' className='nav-link'>
              목록조회
            </Link>
            <Link to='/testWrite' className='nav-link'>
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
