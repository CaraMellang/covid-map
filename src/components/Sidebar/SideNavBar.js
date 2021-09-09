import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import coronacut from "../../img/coronacut.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import media from "../../lib/media";

const SideNavBar = () => {
  return (
    <SideBar>
      <nav className="sb-sidenav">
        <div className="sb-logo">
          <Link to={"/"}>
            <div className="logo-form">
              <img className="logo" src={coronacut} alt="어아니야" />
            </div>
          </Link>
        </div>
        <div className="sb-sidenav-body">
          <div className="sb-sidenav-menu">
            <div className="sb-sidenav-list">
              <div className="sb-sidenav-title">
                <span className="title-name">국내</span>
              </div>
              <SideMenuItem to="/" exact activeClassName="active-navlink">
                국내 코로나 상황
              </SideMenuItem>
              <SideMenuItem
                to="/coronamap"
                exact
                activeClassName="active-navlink"
              >
                국내 코로나 지도
              </SideMenuItem>
              {/* <SideMenuItem
                to="/coronanews"
                exact
                activeClassName="active-navlink"
              >
                코로나 관련 뉴스
              </SideMenuItem> */}
            </div>
            <div className="sb-sidenav-list">
              <div className="sb-sidenav-title card">
                <span className="title-name">해외</span>
              </div>
              <SideMenuItem
                to="/overflow"
                exact
                activeClassName="active-navlink"
              >
                해외 코로나 상황
              </SideMenuItem>
              <SideMenuItem
                to="/overflowdashboard"
                exact
                activeClassName="active-navlink"
              >
                해외 코로나 대시보드
              </SideMenuItem>
            </div>
            <div className="sb-sidenav-list">
              <div className="sb-sidenav-title">
                <span className="title-name">기타</span>
              </div>
              <SideMenuItem
                to="/info"
                exact
                activeClassName="active-navlink"
              >
                기타정보
              </SideMenuItem>
            </div>
          </div>
        </div>

        <div className="sb-sidenav-footer">
          <div className="sb-footer-info1">Developer : Jeho Lee</div>
          <div className="sb-footer-info2" style={{ paddingTop: "0.5rem" }}>
            <a href="https://github.com/CaraMellang">
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </a>
          </div>
        </div>
      </nav>
    </SideBar>
  );
};
const SideMenuItem = styled(NavLink)`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 1px solid none;
`;

const SideBar = styled.aside`
  width: 15rem;
  position: fixed;
  background-color: white;
  color: black;
  height: 100vh;
  .logo-form {
    width: 14rem;
    padding-top: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .logo {
    height: 3.125rem;
    width: 14rem;
  }
  .sb-sidenav-list {
    display: flex;
    flex-direction: column;
  }
  .sb-sidenav-body {
    height: 80vh;
    overflow-y: overlay;
  }
  .sb-sidenav-footer {
    display: flex;
    flex-direction: column;
    background-color: #3d3d45;
    height: 14vh;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .sb-footer-info {
  }
  .sb-sidenav-title {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  .active-navlink {
    color: #afd48d;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .title-name {
    display: block;
    padding-bottom: 0.5rem;
    width: 80%;
    border-bottom: 1px solid #e6e6e6;
  }
  .sb-sidenav-bar {
    display: flex;
    flex-direction: column;
  }

  ${media.xlarge} {
    //1440
    display: block;
  }
  ${media.large} {
    //1024
    display: none;
  }
  ${media.medium} {
    //768
    display: none;
  }
  ${media.small} {
    //425
    display: none;
  }
  ${media.xsmall} {
    //375
    display: none;
  }
  ${media.xxsmall} {
    //320
    display: none;
  }
`;

export default SideNavBar;
