import React from "react";
import styled from "styled-components";
import { books } from "../../data";
import Card from "../../components/Card/Card";
const Wrapper = styled.div`
  width: 1350px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;
const Catalog = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template: 1fr/ 1fr 1fr 1fr;
  gap: 10px;
`;
const Sort = styled.div`
  text-align: right;
  margin-bottom: 15px;
`;
const SortText = styled.p`
  margin: 0;
`;

const Filter = styled.div`
  width: 23%;
  margin-right: 30px;
`;
const FilterTitle = styled.h2`
  margin: 0;
  margin-top: 36px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e1e1e1;
`;
const FilterList = styled.ul`
  margin: 0;
  padding: 0;
`;
const FilterItems = styled.li`
  list-style-type: none;
`;
const FilterText = styled.p`
  margin: 0;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    opacity: 40%;
  }
`;
const BooksSort = styled.div`
  margin-top: 50px;
`;
function Books() {
  return (
    <Wrapper>
      <Filter>
        <FilterTitle>Genres</FilterTitle>
        <FilterList>
          <FilterItems>
            <FilterText>fiction</FilterText>
            <FilterText>fiction</FilterText>
            <FilterText>fiction</FilterText>
            <FilterText>fiction</FilterText>
            <FilterText>fiction</FilterText>
          </FilterItems>
        </FilterList>
      </Filter>
      <BooksSort>
        <Sort>
          <SortText>Sort by : </SortText>
        </Sort>
        <Catalog>
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
        </Catalog>
      </BooksSort>
    </Wrapper>
  );
}

export default Books;
