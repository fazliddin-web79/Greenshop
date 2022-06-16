import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 78px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: white;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;

export const Image = styled.img`
  width: 150px;
  height: 34.3px;
`;

Container.Lists = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Navlink = styled(NavLink)`
  width: fit-content;
`;

export const ControlWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

ControlWrap.Image = styled.img`
  height: 20px;
  width: 20px;
  fill: #46a358;
`;
ControlWrap.Image1 = styled.img`
  background-color: #46a358;
  width: 100px;
  height: 35px;
  border-radius: 3px;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;
