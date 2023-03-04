import React from "react";
import styled from "styled-components";
import heart from "../../images/heart.svg";
import cart from "../../images/cart.svg";

const Item = styled.div`
  background-color: #f3f2f1;
  max-width: 320px;
  margin: 0 auto;
  padding: 43px 24px 20px;
`;

const BookImage = styled.img`
  width: 250px;
  height: 270px;
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
const Price = styled.p`
  margin: 0;
  font-size: 15px;
`;
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

function Card({ img, genre, title, author }) {
  return (
    <>
      <Item>
        <BookImage src={img}></BookImage>
        <Category>{genre}</Category>
        <BookTitle>{title}</BookTitle>
        <Author>{author}</Author>
        <BottomItems>
          <Price>20$</Price>
          <Icons>
            <Favourites src={heart} alt={"heart"}></Favourites>
            <Cart src={cart} alt={"cart"}></Cart>
          </Icons>
        </BottomItems>
      </Item>
    </>
  );
}

export default Card;
