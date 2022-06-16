import React from "react";
import { Container, ControlWrap, Image } from "./style";
import logo from "../../assets/icons/Logo.svg";
import { navbar } from "../../utils/navbar";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import search from "../../assets/icons/search.svg";
import basket from "../../assets/icons/trolley.svg";
import login from "../../assets/icons/Login.svg";

export const Navbar = () => {
  const location = useLocation();
  const active = (name) => {
    return location.pathname.includes(name)
      ? {
          textDecoration: "none",
          fontWeight: "700",
          fontStyle: "normal",
          fontSize: "16px",
          borderBottom: "3px solid  #46a358",
          color: "#3D3D3D",
          padding: "29px 10px",
          transition: "all 0.3s",
        }
      : {
          textDecoration: "none",
          fontWeight: 400,
          fontSize: "16px",
          padding: "30px 10px",
          textAlign: "center",
          color: "#3D3D3D",
        };
  };
  return (
    <>
      <Container>
        <Image src={logo} alt="" />
        <Container.Lists>
          {navbar.map((item) => {
            return (
              <NavLink
                key={item.id}
                style={() => active(item.mainPath)}
                to={item.path}
              >
                {item.title}
              </NavLink>
            );
          })}
        </Container.Lists>
        <ControlWrap>
          <ControlWrap.Image src={search} />
          <ControlWrap.Image src={basket} />
          <ControlWrap.Image1 src={login} />
        </ControlWrap>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
