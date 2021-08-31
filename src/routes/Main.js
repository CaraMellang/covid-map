import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import CoronaMap from "./CoronaMap";
import Home from "./Home";
import Footer from "../components/Footer";

const Main = () => {
  const [test, setTest] = useState();
  const getData = async () => {
    let data = await axios.get(`http://localhost:4000/sidoapi`);
    console.log(data.data.response.body);
    setTest(data.data.response.body);
  };
  useEffect(() => {
    // getData();
    return () => {};
  }, []);
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <MainWrap>
        <SideNavBar />
        <Route path={"/"} exact render={() => <Home test={test} />} />
        <Route
          path={"/coronamap"}
          exact
          render={() => <CoronaMap test={test} />}
        />
      </MainWrap>
      <Footer />
    </BrowserRouter>
  );
};
const MainWrap = styled.div`
  color: white;
`;
export default Main;
