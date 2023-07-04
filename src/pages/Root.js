import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const Root = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};
