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
  const [Display, setDisplay] = useState(false);
  const [toggle, setToggle] = useState(true);

  const onClickbackground = () => {
    setToggle((prev) => !prev);
  };
  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };
  const onLoadScreen = () => {
    const viewPortWidth = window.innerWidth;
    if (viewPortWidth <= 1024) {
      setDisplay(false);
    }
    if (viewPortWidth > 1024) {
      setDisplay(true);
    }
    console.log(viewPortWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      onLoadScreen();
    });
    return () => {
      window.removeEventListener("resize", () => {
        onLoadScreen();
      });
    };
  }, []);

  return (
    <BrowserRouter>
      {!Display && <NavBar onClickToggle={onClickToggle} />}
      <MainWrap toggle={toggle}>
        {Display === true ? (
          <SideNavBar />
        ) : (
          <aside
            className={`aside-side ${toggle === true ? "as-show" : "as-hide"}`}
          >
            <MobileSideNavBar toggle={toggle} />
          </aside>
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
        {!Display && toggle && (
          <div
            className="MobileDarkBackground"
            onClick={onClickbackground}
          ></div>
        )}
      </MainWrap>
      <Footer />
    </BrowserRouter>
  );
};
const MainWrap = styled.div`
  color: white;

  .MobileDarkBackground {
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
  }
`;
export default Main;
