import styled from "styled-components";

const Button = styled.a`
  display: block;
  font-weight: 600;
  margin-top: 65px;
  width: 222px;
  line-height: 54px;
  border: solid 1px ${(props) => props.bg};
  transition: all 0.3s;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.color};
    background-color: ${(props) => props.bg};
  }
`;

export default Button;
