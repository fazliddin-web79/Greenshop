import React, { useContext, useState, useEffect } from "react";
import Card from "../card";
import Category from "../Category";
import { FlowersContext } from "../../context";
import { Outlet, useLocation, NavLink } from "react-router-dom";

import { Container, Plants, StatusWrap, Wrap } from "./style";

export const Home = () => {
  const { flowers, setFlowers } = useContext(FlowersContext);
  const [plants, setPlants] = useState(flowers);
  const location = useLocation();

  const onTo = (name) => {
    const arr = location.pathname.split("/");
    let count = "";
    for (let i = 0; i < arr.length - 1; i++) {
      count += arr[i] + "/";
    }
    return (count += name);
  };
  const [path, setPath] = useState(location.pathname.split("/"));
  useEffect(() => {
    setPath(location.pathname.split("/"));
  }, [location.pathname]);
  const active = ({ isActive }) => {
    return isActive
      ? {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "15px",
          color: "rgb(70, 163, 88)",
          margin: "0 20px",
          textDecoration: "none",
        }
      : {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "15px",
          margin: "0 20px",
          color: "rgb(27, 27, 27)",
          textDecoration: "none",
        };
  };
  return (
    <Container>
      <Category />
      <Plants>
        <StatusWrap>
          <NavLink style={active} to={onTo("all")}>
            All Plants
          </NavLink>
          <NavLink style={active} to={onTo("new")}>
            New Arrivals
          </NavLink>
          <NavLink style={active} to={onTo("sale")}>
            Sale
          </NavLink>
        </StatusWrap>
        <Wrap>
          {flowers
            .filter((item) => item.category === path[2])
            .filter((v) => v.status === path[3])
            .map((item) => {
              return <Card key={item.id} data={item} />;
            })}
        </Wrap>
      </Plants>
      <Outlet />
    </Container>
  );
};

export default Home;
