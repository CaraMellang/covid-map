import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideNavBar = () => {
  return (
    <SideBar>
      <nav className="sb-sidenav">
        <div className="sb-sidenav-menu">
          <div className="sb-sidenav-list">
            <div className="sb-sidenav-title">메뉴 목록</div>
            <SideMenuItem>이히히</SideMenuItem>
            <SideMenuItem>이히히</SideMenuItem>
            <SideMenuItem>이히히</SideMenuItem>
          </div>
        </div>
      </nav>
    </SideBar>
  );
};
const SideBar = styled.section`
  padding-top: 3.625rem;
  width: 15rem;
  position: fixed;
  background-color: white;
  color: black;
  .sb-sidenav-list {
    display: flex;
    flex-direction: column;
  }
  .sb-sidenav-title {
    padding: 1.5rem;
    text-align: center;
  }
`;

const SideMenuItem = styled(Link)`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default SideNavBar;
