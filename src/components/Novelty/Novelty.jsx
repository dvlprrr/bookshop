import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import heart from "../../images/heart.svg";
import cart from "../../images/cart.svg";

const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const Title = styled.h2`
  margin: 0;
  margin: 90px auto 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
  color: #000;
`;
const Catalog = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
`;
const Items = styled.li`
  list-style-type: none;
  margin-right: 10px;
  width: 350px; ;
`;
const Item = styled.div`
  background-color: #f3f2f1;
  max-width: 320px;
  margin: 0 auto;
  padding: 43px 24px 20px;

  position: relative;
`;
const Status = styled.p`
  position: absolute;
  margin: 0;
  top: 0;
  right: 0;
  padding: 0 9px;
  text-transform: uppercase;
  line-height: 20px;
  font-size: 10px;
  font-weight: 600;
  color: white;
  background-color: #2c2c2c;
`;

const Link = styled.a``;
const BookImage = styled.img`
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    opacity: 50%;
  }
`;
const Category = styled.a`
  margin: 0;
  margin-top: 15px;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  color: #878787;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    opacity: 60%;
  }
`;
const BookTitle = styled.h3`
  margin: 0;
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: #000;
`;
const Author = styled.a`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  text-decoration: underline;
  color: #878787;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    opacity: 60%;
  }
`;
const BottomItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Price = styled.p``;
const Favourites = styled.img`
  margin-right: 5px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
`;
const Cart = styled.img`
  cursor: pointer;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
`;
function Novelty() {
  return (
    <Wrapper>
      <Title>Новинки</Title>
      <Catalog>
        <Items>
          <Item>
            <Status>Новинка</Status>
            <Link>
              <BookImage src="https://admarginem.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/rachel_kask_trilogia-copie-311x280.png.webp"></BookImage>
            </Link>
            <Category>Художественная литература</Category>
            <BookTitle>Контур.Трилогия</BookTitle>
            <Author>Рейчел Каск</Author>
            <BottomItems>
              <Price>1500₽</Price>
              <Icons>
                <Favourites src={heart} alt={"heart"}></Favourites>
                <Cart src={cart} alt={"cart"}></Cart>
              </Icons>
            </BottomItems>
          </Item>
        </Items>
        <Items>
          <Item>
            <Status>Новинка</Status>
            <Link>
              <BookImage src="https://admarginem.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/rachel_kask_trilogia-copie-311x280.png.webp"></BookImage>
            </Link>
            <Category>Художественная литература</Category>
            <BookTitle>Контур.Трилогия</BookTitle>
            <Author>Рейчел Каск</Author>
            <BottomItems>
              <Price>1500₽</Price>
              <Icons>
                <Favourites src={heart} alt={"heart"}></Favourites>
                <Cart src={cart} alt={"cart"}></Cart>
              </Icons>
            </BottomItems>
          </Item>
        </Items>
        <Items>
          <Item>
            <Status>Новинка</Status>
            <Link>
              <BookImage src="https://admarginem.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/rachel_kask_trilogia-copie-311x280.png.webp"></BookImage>
            </Link>
            <Category>Художественная литература</Category>
            <BookTitle>Контур.Трилогия</BookTitle>
            <Author>Рейчел Каск</Author>
            <BottomItems>
              <Price>1500₽</Price>
              <Icons>
                <Favourites src={heart} alt={"heart"}></Favourites>
                <Cart src={cart} alt={"cart"}></Cart>
              </Icons>
            </BottomItems>
          </Item>
        </Items>
        <Items>
          <Item>
            <Status>Новинка</Status>
            <Link>
              <BookImage src="https://admarginem.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/rachel_kask_trilogia-copie-311x280.png.webp"></BookImage>
            </Link>
            <Category>Художественная литература</Category>
            <BookTitle>Контур.Трилогия</BookTitle>
            <Author>Рейчел Каск</Author>
            <BottomItems>
              <Price>1500₽</Price>
              <Icons>
                <Favourites src={heart} alt={"heart"}></Favourites>
                <Cart src={cart} alt={"cart"}></Cart>
              </Icons>
            </BottomItems>
          </Item>
        </Items>
      </Catalog>
      <Button bg={"black"} color={"white"}>
        смотреть все
      </Button>
    </Wrapper>
  );
}

export default Novelty;
