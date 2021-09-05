import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import mangae from "../../img/mangae.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import media from "../../lib/media";

const MobileSideNavBar = ({ toggle }) => {
  return (
    <MbSideBar toggle={toggle}>
      <nav className="mb-sb-sidenav">
        <div className="mb-sb-logo">
          <Link to={"/"}>
            <div className="mb-logo-form">
              <img className="mb-logo" src={mangae} alt="어아니야" />
            </div>
          </Link>
        </div>
        <div className="mb-sb-sidenav-body">
          <div className="mb-sb-sidenav-menu">
            <div className="mb-sb-sidenav-list">
              <div className="mb-sb-sidenav-title">
                <span className="mb-title-name">국내</span>
              </div>
              <MbSideMenuItem to="/" exact activeClassName="active-navlink">
                국내 코로나 상황
              </MbSideMenuItem>
              <MbSideMenuItem
                to="/coronamap"
                exact
                activeClassName="active-navlink"
              >
                국내 코로나 지도
              </MbSideMenuItem>
              <MbSideMenuItem
                to="/coronanews"
                exact
                activeClassName="active-navlink"
              >
                코로나 뉴스 (준비중)
              </MbSideMenuItem>
            </div>
            <div className="mb-sb-sidenav-list">
              <div className="mb-sb-sidenav-title card">
                <span className="mb-title-name">해외</span>
              </div>
              <MbSideMenuItem
                to="/overflow"
                exact
                activeClassName="active-navlink"
              >
                해외 코로나 상황 (준비중)
              </MbSideMenuItem>
              <MbSideMenuItem
                to="/overflowdashboard"
                exact
                activeClassName="active-navlink"
              >
                해외 코로나 대시보드
              </MbSideMenuItem>
            </div>
            <div className="mb-sb-sidenav-list">
              <div className="mb-sb-sidenav-title">
                <span className="mb-title-name">기타</span>
              </div>
              <MbSideMenuItem
                to="/developer"
                exact
                activeClassName="active-navlink"
              >
                만든사람
              </MbSideMenuItem>
            </div>
          </div>
        </div>

        <div className="mb-sb-sidenav-footer">
          <div className="mb-sb-footer-info1">Developer : Mellang</div>
          <div className="mb-sb-footer-info2" style={{ paddingTop: "0.5rem" }}>
            <a href="https://github.com/CaraMellang">
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </a>
          </div>
        </div>
      </nav>
    </MbSideBar>
  );
};
const MbSideMenuItem = styled(NavLink)`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 1px solid none;
`;

const MbSideBar = styled.aside`
  .mb-logo-form {
    width: 14rem;
    padding-top: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .mb-logo {
    height: 3.125rem;
    width: 14rem;
  }
  .mb-sb-sidenav-list {
    display: flex;
    flex-direction: column;
  }
  .mb-sb-sidenav-body {
    height: 80vh;
    overflow-y: overlay;
  }
  .mb-sb-sidenav-footer {
    display: flex;
    flex-direction: column;
    background-color: #3d3d45;
    height: 14vh;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .mb-sb-footer-info {
  }
  .mb-sb-sidenav-title {
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
  .mb-title-name {
    display: block;
    padding-bottom: 0.5rem;
    width: 80%;
    border-bottom: 1px solid #e6e6e6;
  }
  .mb-sb-sidenav-bar {
    display: flex;
    flex-direction: column;
  }

  ${media.xlarge} {
    //1440
    display: none;
  }
  ${media.large} {
    //1024
    display: block;
  }
  ${media.medium} {
    //768
    display: block;
  }
  ${media.small} {
    //425
    display: block;
  }
  ${media.xsmall} {
    //375
    display: block;
  }
  ${media.xxsmall} {
    //320
    display: block;
  }
`;

export default MobileSideNavBar;
