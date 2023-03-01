import React from "react";
import styled from "styled-components";

const SliderSection = styled.section`
  background-image: url(https://www.fonstola.ru/images/201111/fonstola.ru_52644.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  height: 500px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.2px;
`;

const BookTitle = styled.h3`
  font-size: 50px;
  line-height: 1.12;
  letter-spacing: -0.4px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: 400;
  text-align: center;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;
const Button = styled.a`
  font-weight: 600;
  margin-top: 65px;
  width: 222px;
  line-height: 54px;
  border: solid 1px #fff;
  transition: all 0.3s;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: white;
  }
`;

function Slider() {
  return (
    <SliderSection>
      <Wrapper>
        <Title>Предзаказ</Title>
        <BookTitle>Фрагменты речи влюбленного</BookTitle>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, magnam
          modi.
        </Description>
        <Button>Подробнее</Button>
      </Wrapper>
    </SliderSection>
  );
}

export default Slider;
