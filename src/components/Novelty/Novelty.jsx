import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { books } from "../../data";
import List from "../List/List";
import Card from "../Card/Card";
import Title from "../Title/Title";

const Wrapper = styled.div`
  /* width: 1440px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

function Novelty() {
  return (
    <Wrapper>
      <Title>New Books</Title>
      <List>
        {books.map((item, index) => {
          return (
            <Card
            key={index}
              img={item.img}
              title={item.title}
              genre={item.genre}
              author={item.author}
            />
          );
        })}
      </List>
      <Button bg={"black"} color={"white"}>
        View all
      </Button>
    </Wrapper>
  );
}

export default Novelty;
