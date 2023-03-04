import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
`;
const Container = styled.div`
  width: 55%;
  margin: 0 auto ;
  padding: 20px 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h2`
  margin: 0;
`;
const Year = styled.p`
  margin: 0;
  text-align: center;
  font-size: 12px;
`;
function Footer() {
  return (
    <Wrapper>
      <Container>
        <Logo>Bookshop</Logo>
        <Year>© Copyright 2023</Year>
      </Container>
    </Wrapper>
  );
}

export default Footer;
