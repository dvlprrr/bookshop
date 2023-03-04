import React from "react";
import styled from "styled-components";
import newsImage from "../../images/newsImage.jpg";
import otherLogo from "../../images/otherLogo.jpg";
import otherImage from "../../images/otherNewsImage.jpg";
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
  width: 1110px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
`;
const MainNews = styled.div`
  width: 60%;
  margin-right: 50px;
`;

const MainNewsImage = styled.img`
  width: 100%;
`;
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
const OtherNewsImage = styled.img`
  width: 70%;
`;
const OtherNewsImageLast = styled(OtherNewsImage)`
  width: 45%;
`;
const OtherNews = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 35px;
  width: 30%;
  border-left: 1px solid hsl(0deg 0% 87%);
`;
const OtherNewsItems = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid hsl(0deg 0% 87%);
  margin-bottom: 20px;
  padding-bottom: 20px;
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;
const OtherNewsTitle = styled.h4`
  margin: 0;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;
const OtherNewsDescription = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #878787;
`;
function News() {
  return (
    <Wrapper>
      <Title>News</Title>
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
            <OtherNewsImage src={otherLogo}></OtherNewsImage>
            <OtherNewsTitle>6 Paperback Books to Read This Week</OtherNewsTitle>
            <OtherNewsDescription>
              New releases include titles by Jennifer Egan, Eloghosa Osunde and
              more.
            </OtherNewsDescription>
          </OtherNewsItems>
          <OtherNewsItems>
            <OtherNewsImageLast src={otherImage}></OtherNewsImageLast>
            <OtherNewsTitle>6 Paperback Books to Read This Week</OtherNewsTitle>
            <OtherNewsDescription>
              New releases include titles by Jennifer Egan, Eloghosa Osunde and
              more.
            </OtherNewsDescription>
          </OtherNewsItems>
        </OtherNews>
      </Content>
    </Wrapper>
  );
}

export default News;
