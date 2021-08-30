import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import mangae from "../img/mangae.jpg";

const SideNavBar = () => {
  return (
    <SideBar>
      <nav className="sb-sidenav">
        <div className="">
          <Link to={"/"}>
            <div className="logo-form">
              <img className="logo" src={mangae} alt="어아니야" />
            </div>
          </Link>
        </div>
        <div className="sb-sidenav-menu">
          <div className="sb-sidenav-list">
            <div className="sb-sidenav-title">메뉴 목록</div>
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
            <SideMenuItem to="/dummy" exact activeClassName="active-navlink">
              이히히
            </SideMenuItem>
          </div>
        </div>
      </nav>
    </SideBar>
  );
};
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
  .sb-sidenav {
  }
  .sb-sidenav-list {
    display: flex;
    flex-direction: column;
  }
  .sb-sidenav-title {
    padding: 1.5rem;
    text-align: center;
  }
  .active-navlink {
    color: #afd48d;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
`;

const SideMenuItem = styled(NavLink)`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: 1px solid none;
`;

export default SideNavBar;
