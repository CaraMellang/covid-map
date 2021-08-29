import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import Home from "./Home";

const Main = () => {
  const [test, setTest] = useState();
  const getData = async () => {
    let data = await axios.get(`http://localhost:4000/api`);
    console.log(data.data.response.body);
    setTest(data.data.response.body);
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <MainWrap>
        <SideNavBar />
        <Route path={"/"} exact render={() => <Home test={test} />} />
      </MainWrap>
    </BrowserRouter>
  );
};
const MainWrap = styled.div`
  color: white;
`;
export default Main;
