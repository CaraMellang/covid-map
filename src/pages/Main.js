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
import MobileSideNavBar from "../components/MobileSideNavBar";

const Main = () => {
  const { data } = useInfec();
  const [desktop, setDesktop] = useState(true);
  const [toggle, setToggle] = useState(false);

  const onClickbackground = () => {
    setToggle((prev) => !prev);
  };
  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };
  const onLoadScreen = () => {
    const viewPortWidth = window.innerWidth;
    if (viewPortWidth <= 1024) {
      setDesktop(false);
    }
    if (viewPortWidth > 1024) {
      setDesktop(true);
    }
    console.log(viewPortWidth);
  };
  useEffect(() => {
    onLoadScreen();
  }, []);

  return (
    <BrowserRouter>
      {!desktop && <NavBar onClickToggle={onClickToggle} />}
      <MainWrap toggle={toggle}>
        {desktop === true ? (
          <SideNavBar />
        ) : (
            <MobileSideNavBar toggle={toggle}  />
        )}

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
        {/* {!desktop && toggle && (
          <div
            className="MobileDarkBackground"
            onClick={onClickbackground}
          ></div>
        )} */}
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
    z-index: 40;
  } */
  .aside-side {
    width: 15rem;
    position: fixed;
    background-color: white;
    color: black;
    height: 100vh;
    z-index: 200;
    right: 0;
  }
`;
export default Main;
