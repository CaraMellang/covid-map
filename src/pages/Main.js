import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import CoronaMap from "./CoronaMap";
import Home from "./Home";
import Footer from "../components/Footer";
import useInfec from "../hooks/useInfec";
import OverFlow from "./OverFlow";
import OverFlowDashboard from "./OverFlowDashboard";
import AllbarComponents from "../components/Sidebar/AllbarComponents";
import Info from "./Info";

const Main = () => {
  const { data } = useInfec();

  return (
    <BrowserRouter>
      <MainWrap>
        <AllbarComponents />

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
        <Route path={"/info"} exact render={() => <Info data={data} />} />
      </MainWrap>
      <Footer />
    </BrowserRouter>
  );
};
const MainWrap = styled.div`
  color: white;

  /* .MobileDarkBackground {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: ${({ toggle }) => (toggle === true ? 40 : -40)};
  }
  .aside-side {
    width: 15rem;
    position: fixed;
    background-color: white;
    color: black;
    height: 100vh;
    right: 0;
  }
  .as-show {
    transition: 0.1s ease-in;
    transform: translateX(0px);
    z-index: 200;
  }
  .as-hide {
    transition: 0.1s ease-in;
    transform: translateX(250px);
    z-index: -200;
  } */
`;
export default Main;
