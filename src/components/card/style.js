import styled from "styled-components";

export const Container = styled.div`
  width: 258px;
  height: 350px;
  margin: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  :hover {
    border-radius: 5px;
    box-shadow: 0 0 5px 1px #46a358;
    transform: scale(1.01);
  }
`;
export const Title = styled.div`
  width: 100%;
`;
export const Image = styled.img`
  width: 258px;
  height: 300px;
`;
Title.Text = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
`;

Title.Price = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #46a358;
`;
