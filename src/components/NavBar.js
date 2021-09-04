import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ onClickToggle }) => {
  return (
    <Nav>
      <div className="navbar">
        <FontAwesomeIcon onClick={onClickToggle} icon={faBars} size={"2x"} />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: white;
  height: 3.625rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  .navbar {
    display: flex;
    justify-content: flex-end;
  }
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
`;

export default NavBar;
