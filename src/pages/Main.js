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
import CoronaNews from "./CoronaNews";
import media from "../lib/media";

const Main = () => {
  const { data } = useInfec();

  return (
    <BrowserRouter>
      <MainWrap>
        <AllbarComponents />
        <ReponsiveWrap>
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
            path={"/coronanews"}
            exact
            render={() => <CoronaNews data={data} />}
          />
          <Route path={"/info"} exact render={() => <Info data={data} />} />
        </ReponsiveWrap>
      </MainWrap>
      <Footer />
    </BrowserRouter>
  );
};
const MainWrap = styled.div`
  color: white;
`;
const ReponsiveWrap = styled.div`
  .contents {
    padding-left: 15rem;
    padding-bottom: 6rem;
  }
  ${media.large} {
    //1024
    .commonwrap {
      padding-top: 3.625rem;
    }
    .contents {
      padding-left: 0;
    }
  }
  ${media.medium} {
    //768
    /* .commonwrap {
      padding-top: 3.625rem;
    } */
  }
  ${media.small} {
    /* .commonwrap {
      padding-top: 3.625rem;
    } */
  }
  ${media.xsmall} {
    /* .commonwrap {
      padding-top: 3.625rem;
    } */
  }
  ${media.xxsmall} {
    /* .commonwrap {
      padding-top: 3.625rem;
    } */
  }
`;
export default Main;
