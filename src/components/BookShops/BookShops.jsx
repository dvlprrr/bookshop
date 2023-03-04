import React from "react";
import styled from "styled-components";
import logoLabirint from "../../images/labirint.svg";
import logoGorod from "../../images/chitai_gorod.svg";
import logoBook from "../../images/book24.svg";
import logoBukvoed from "../../images/bukvoed.svg";
import logoLitres from "../../images/litres.svg";
const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Background = styled.div`
  background-color: #f3f2f1;
  margin-top: 90px;
`;
const Title = styled.h2`
  margin: 0;
  text-align: center;
`;
const Link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  background-color: transparent;
  width: 200px;
`;
const LogoWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  gap:  50px 100px;
  align-items: center;
`;
function BookShops() {
  return (
    <Background>
      <Wrapper>
        <Title>Лучшие книжные магазины России</Title>
        <LogoWrapper>
          <Link target="_blank" href="https://www.labirint.ru/">
            <Logo src={logoLabirint}></Logo>
          </Link>
          <Link target="_blank" href="https://www.chitai-gorod.ru/">
            <Logo src={logoGorod}></Logo>
          </Link>
          <Link target="_blank" href="https://book24.ru/">
            <Logo src={logoBook}></Logo>
          </Link>
          <Link target="_blank" href="https://www.bookvoed.ru/">
            <Logo src={logoBukvoed}></Logo>
          </Link>
          <Link target="_blank" href="https://www.litres.ru/">
            <Logo src={logoLitres}></Logo>
          </Link>
          <Link target="_blank" href="https://www.mann-ivanov-ferber.ru/">
            <Logo
              src={
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTExIiBoZWlnaHQ9IjI3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDYuNDUyIDEzLjcyYzAtNi4wOS0yLjk1My05LjI1NC01LjYzOS05LjI1NC0xLjUwMyAwLTIuNDQyLjY3My00LjIxOCAyLjczNi0xLjEyMSAxLjMwNy0zLjExNyA0LjI0OC00LjUxMiA2LjM1NyAxLjYwMyAyLjQzNyAzLjI3MyA0Ljk1MyA0LjIyMiA2LjExIDEuNiAxLjk1IDIuNTI1IDMuMDkyIDQuNDQyIDMuMDkyIDIuOTQzIDAgNS43MDQtMy40MTMgNS43MDQtOS4wNGguMDAxem0tMTguNzY4LjI2MmMtMS43NDctMi41MjQtMy41MDgtNS4wNTQtNC40OTYtNi4yNi0xLjYtMS45NS0yLjM5NC0zLjIzNi00LjMxMi0zLjIzNi0yLjk0IDAtNS43MDMgMy40MTMtNS43MDMgOS4wNCAwIDYuMDkxIDIuOTUzIDkuMjU1IDUuNjQgOS4yNTUgMS41MDIgMCAyLjQ0MS0uNjczIDQuMjE3LTIuNzM1IDEuMTM4LTEuMzIzIDMuMjI1LTQuMTIgNC42NTQtNi4wNjR6bTIzLjAxLS42OTljMCA4LjY4Mi00LjQ5NiAxMy42NzItOS45ODEgMTMuNjcyLTIuNzI0IDAtNS40MS0xLjU1NC03LjYyMi00LjQ2LTEuMDQ1LTEuMzY2LTIuMjMzLTMuMTIzLTMuMzExLTQuODE0LTEuMDY1IDEuNDY5LTIuODA1IDMuODIzLTQuMjYgNS41ODQtMi4wNjMgMi40OTQtNC4xMiAzLjY5LTYuODA2IDMuNjktNS4wODUgMC05Ljc4NS00LjIxOS05Ljc4NS0xMi45OTZDNjguOTMgNS4wNTMgNzMuNDI1LjI4NyA3OC45MS4yODdjMi43MjYgMCA1LjA0NSAxLjUzNSA3LjM0NyA0LjcwM2EzNzkuNzY3IDM3OS43NjcgMCAwMTMuNjEzIDUuMDVjMS4wMjQtMS42MzYgMi43NTItNC4yNzkgNC4yMzUtNi4wNiAyLjA3LTIuNDg5IDQuMTItMy42OSA2LjgwNC0zLjY5IDUuMDg2IDAgOS43ODUgNC4yMiA5Ljc4NSAxMi45OTZ2LS4wMDN6bS05NC4zNTcgOC42NEw3LjQ5Mi45N0guNjk4djI1LjU0NWg0LjE1M1Y1Ljg3bDguODk3IDIwLjY0NGg0LjczM0wyNy4zNzcgNS45M3YyMC41ODRoNC4zMTJWLjk2OWgtNi4zMzNsLTkuMDIgMjAuOTU1ek01Ny43MjkuOTdoNC44NnYyNS41NDVoLTQuMjUzVjYuODI0bC0xMy42MSAxOS42OWgtNC43NTJWLjk2OWg0LjI1NnYxOS41NzlMNTcuNzMuOTY4eiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg=="
              }
            ></Logo>
          </Link>
        </LogoWrapper>
      </Wrapper>
    </Background>
  );
}

export default BookShops;
