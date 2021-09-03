import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import CoronaMap from "./CoronaMap";
import Home from "./Home";
import Footer from "../components/Footer";
import useInfec from "../hooks/useInfec";
import OverFlow from "./OverFlow";
import OverFlowDashboard from "./OverFlowDashboard";
import Developer from "./Developer";

const Main = () => {
  const { data } = useInfec();
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <MainWrap>
        <SideNavBar />
        <Route path={"/"} exact render={() => <Home data={data} />} />
        <Route
          path={"/coronamap"}
          exact
          render={() => <CoronaMap data={data} />}
        />
        <Route
          path={"/overflow"}
          exact
          render={() => <OverFlow data={data} />}
        />
        <Route
          path={"/overflowdashboard"}
          exact
          render={() => <OverFlowDashboard data={data} />}
        />
        <Route
          path={"/developer"}
          exact
          render={() => <Developer data={data} />}
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
