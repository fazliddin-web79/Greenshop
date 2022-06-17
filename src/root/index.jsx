import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Notfount from "../components/notfound";
import { navbar } from "../utils/navbar";
import { Container } from "./style";
import { FlowersContext } from "../context";
import { status } from "../mock/status";
import Home from "../components/home";

export const Root = () => {
  const { category } = useContext(FlowersContext);

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
          <Route path={"/"} element={<Navigate to={"/home/seeds/all"} />} />
          <Route path={"/home"} element={<Navigate to={"/home/seeds/all"} />} />
        </Route>
        <Route path={"*"} element={<Notfount />} />
      </Routes>
    </Container>
  );
};

export default Root;
