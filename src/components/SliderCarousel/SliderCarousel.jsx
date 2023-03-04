import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliders } from "../../data";
import "./index.css";

const SliderSection = styled.section`
  margin: 0;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  background-color: rgba(41, 40, 40, 0.45);
`;
const Wrapper = styled.div`
  margin: 0 auto;
  height: 650px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SliderWrapper = styled.div`
  background-color: rgba(41, 40, 40, 0.45);
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

function SliderCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      {sliders.map((item, index) => {
        return (
          <SliderSection key={index} src={item.img}>
            <SliderWrapper>
              <Wrapper>
                <Title>{item.title}</Title>
                <BookTitle>{item.bookTitle}</BookTitle>
                <Description>{item.description}</Description>
                <Button bg={"white"} color={"black"}>
                  подробнее
                </Button>
              </Wrapper>
            </SliderWrapper>
          </SliderSection>
        );
      })}
    </Slider>
  );
}

export default SliderCarousel;
