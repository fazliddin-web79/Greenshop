import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Plants = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const StatusWrap = styled.div`
  position: absolute;
  top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 100%;
`;
export const Wrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

Wrap.Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
Wrap.Image = styled.img`
  height: 200px;
`;
Wrap.Title = styled.h1`
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
`;
