import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FlowersContext } from "../../context";
import { plants } from "../../mock/flovers";
import { Container, Item, Title } from "./style";

export const Category = () => {
  const { category, setcategory, flowers, setFlowers } =
    useContext(FlowersContext);

  const location = useLocation();
  const activeItem = (name) => {
    return location.pathname.includes(name)
      ? {
          background: "rgba(70, 163, 88, 0.2)",
        }
      : {
          background: "#fbfbfb",
        };
  };
  const active = (name) => {
    return location.pathname.includes(name)
      ? {
          textTransform: "capitalize",
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "18px",
          color: "rgb(70, 163, 88)",
          margin: "0 20px",
          textDecoration: "none",
        }
      : {
          textTransform: "capitalize",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "18px",
          margin: "0 20px",
          color: "rgb(27, 27, 27)",
          textDecoration: "none",
        };
  };
  return (
    <Container>
      <Title>Category</Title>

      {category.map((item) => {
        return (
          <Item key={item.id} style={activeItem(item.category)}>
            <NavLink
              style={active(item.category)}
              to={`/home/${item.category}/all`}
            >
              {item.category}
            </NavLink>
            <Item.Count>
              ({""}
              {
                plants.filter((value) => value.category === item.category)
                  .length
              }
              )
            </Item.Count>
          </Item>
        );
      })}
    </Container>
  );
};

export default Category;
