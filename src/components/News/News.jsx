import React from "react";
import styled from "styled-components";
import newsImage from "../../images/newsImage.jpg";
import otherLogo from "../../images/otherLogo.jpg";
const Wrapper = styled.div`
  margin-top: 90px;
`;
const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  color: #000;
`;
const Content = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const MainNews = styled.div`
  width: 50%;
`;
const OtherNews = styled.ul`
  margin: 0;
  padding: 0;
`;
const OtherNewsItems = styled.li`
  list-style-type: none;
`;
const MainNewsImage = styled.img``;
const MainNewsTitle = styled.h3`
  margin: 0;
  margin-top: 40px;
  font-weight: 600;
  font-size: 20px;
`;
const MainNewsDescription = styled.p`
  margin: 0;
  margin-top: 15px;
`;
const OtherNewsLogo = styled.img`
  width: 100px;
`;
function News() {
  return (
    <Wrapper>
      <Title>Новости</Title>
      <Content>
        <MainNews>
          <MainNewsImage src={newsImage}></MainNewsImage>
          <MainNewsTitle>14 Books Coming in March</MainNewsTitle>
          <MainNewsDescription>
            A haunting horror novel set a century ago in the American West,
            Eleanor Catton’s first novel in a decade, a Ukrainian war diary and
            much more.
          </MainNewsDescription>
        </MainNews>
        <OtherNews>
          <OtherNewsItems>
            <OtherNewsLogo src={otherLogo}></OtherNewsLogo>
          </OtherNewsItems>
          <OtherNewsItems></OtherNewsItems>
        </OtherNews>
      </Content>
    </Wrapper>
  );
}

export default News;
