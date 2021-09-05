import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import media from "../../lib/media";

const NavBar = ({ onClickToggle }) => {
  return (
    <Nav>
      <div className="navbar">
        <FontAwesomeIcon
          onClick={onClickToggle}
          icon={faBars}
          size={"2x"}
          style={{ color: "black" }}
        />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  /* display: none; */
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: white;
  height: 3.625rem;
  background: linear-gradient(
    to bottom right,
    hsla(0, 0%, 100%, 0.7),
    hsla(0, 0%, 100%, 0.7)
  );
  /* background: linear-gradient(
    to bottom right,
    hsla(91, 46%, 70%, 0.9),
    hsla(91, 46%, 70%, 0.5),
    hsla(91, 46%, 70%, 0.4),
    hsla(0, 0%, 100%, 0.8),
    hsla(0, 0%, 100%, 1)
  ); */
  .navbar {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    padding-right: 1rem;
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
  /* ${media.large} {
    display: block;
  }
  ${media.medium} {
    display: block;
  }
  ${media.small} {
    display: block;
  }
  ${media.xsmall} {
    display: block;
  }
  ${media.xxsmall} {
    display: block;
  } */
`;

export default NavBar;
