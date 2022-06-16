import React, { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Notfount from "../components/notfound";
import { navbar } from "../utils/navbar";
import { Container } from "./style";
import { FlowersContext } from "../context";
import { status } from "../mock/status";
import Home from "../components/home";
import Generic from "../components/generic";

export const Root = () => {
  const { flowers, setFlowers, category, setcategory } =
    useContext(FlowersContext);

  return (
    <Container>
      {/* <Home /> */}
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map((item) => {
            return (
              item.private && (
                <Route key={item.id} path={item.path} element={item.element} />
              )
            );
          })}
          <Route path={"/"} element={<Navigate to={"/home/seeds/all"} />} />
          <Route path={"/home"} element={<Navigate to={"/home/seeds/all"} />} />
          <Route path={"/home"}>
            {category.map((v) => {
              return (
                <Route key={v.id} path={`/home/${v.category}`}>
                  {status.map((value) => {
                    return (
                      <Route
                        key={value.id}
                        path={`/home/${v.category}/${value.status}`}
                        element={<Home />}
                      />
                    );
                  })}
                </Route>
              );
            })}
          </Route>
        </Route>
        <Route path={"*"} element={<Notfount />} />
      </Routes>
    </Container>
  );
};

export default Root;
