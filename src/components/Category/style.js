import styled from "styled-components";
export const Container = styled.div`
  width: 400px;
  background-color: #fbfbfb;
  padding: 10px;
`;

export const Title = styled.h1`
  letter-spacing: -1px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 15px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  transition: all 0.2s;
  :hover {
    /* border-bottom: 1px solid #46a358; */
    background-color: rgba(70, 163, 88, 0.2);
  }
`;

Item.Count = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
`;
