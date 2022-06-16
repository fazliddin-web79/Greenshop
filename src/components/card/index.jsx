import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Image, Title } from "./style";

export const Card = (props) => {
  const location = useLocation();
  return (
    <Container>
      <Image src={props.data.img} />
      <Title>
        <Title.Text>{props.data.name}</Title.Text>
        <Title.Price>${props.data.price}.00</Title.Price>
      </Title>
    </Container>
  );
};
export default Card;
