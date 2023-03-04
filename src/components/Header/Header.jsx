import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 98%;
  margin: 0 auto;
  align-items: center;
  border-bottom: solid 1px #e1e1e1;
`;
const Logo = styled(Link)`
  color: black;
  margin: 0;
  margin: 25px 0;
  font-size: 25px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
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
const NavLink = styled(Link)`
  color: black;
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

function Header() {
  return (
    <Wrapper>
      <Logo to={"/"}>Bookshop</Logo>
      <NavList>
        <NavItems>
          <NavLink to={"/books"}>BOOKS</NavLink>
        </NavItems>
        <NavItems>
          <NavLink to={"/authors"}>AUTHORS</NavLink>
        </NavItems>
        <NavItems>
          <NavLink to={"/journal"}>JOURNAL</NavLink>
        </NavItems>
        <NavItems>
          <NavLink to={"/news"}>NEWS</NavLink>
        </NavItems>
        <NavItems>
          <NavLink to={"/about"}>ABOUT US</NavLink>
        </NavItems>
      </NavList>
    </Wrapper>
  );
}

export default Header;
