import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  margin: 0 auto;
`;
const Logo = styled.h1`
  margin: 0;
  margin: 25px 0;
  font-size: 37px;
  cursor: pointer;
`;
const NavList = styled.ul`
  margin: 0;
  margin: 40px 0;
  display: flex;
  font-family: "Montserrat";
  font-size: 11px;
  font-weight: 600;
`;
const NavItems = styled.li`
  list-style-type: none;
  margin-right: 70px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
const NavLink = styled.a`
  padding-bottom: 4px;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  transition: background-size 0.3s;
  &:hover {
    background-size: 100% 1px;
  }
`;

// const LastNavItem = styled(NavItems)`
//   margin-right: 0;
// `;

function Header() {
  return (
    <Wrapper>
      <Logo>Bookshop</Logo>
      <NavList>
        <NavItems>
          <NavLink>КНИГИ</NavLink>
        </NavItems>
        <NavItems>
          <NavLink>АВТОРЫ</NavLink>
        </NavItems>
        <NavItems>
          <NavLink>ЖУРНАЛ</NavLink>
        </NavItems>
        <NavItems>
          <NavLink>НОВОСТИ</NavLink>
        </NavItems>
        <NavItems>
          <NavLink>О НАС</NavLink>
        </NavItems>
      </NavList>
    </Wrapper>
  );
}

export default Header;
