import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mangae from "../img/mangae.jpg";

const NavBar = () => {
  return (
    <Nav>
      <div className="navbar">
        <Link to={"/"}>
          <div className="logo-form">
            <img className="logo" src={mangae} alt="어아니야" />
          </div>
        </Link>
        <button>안녕하세요</button>
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
    justify-content: space-between;
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
