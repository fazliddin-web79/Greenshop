import React from "react";
import { Container, Image, Title } from "./style";

export const Card = (props) => {
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
