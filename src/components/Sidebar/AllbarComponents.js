import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MobileSideNavBar from "./MobileSideNavBar";
import NavBar from "./NavBar";
import SideNavBar from "./SideNavBar";

const AllbarComponents = () => {
  const [isDisplay, setIsDisplay] = useState(true);
  const [toggle, setToggle] = useState(false);

  const onClickbackground = () => {
    setToggle((prev) => !prev);
  };
  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };
  const onClickSideItem = () => {
    setToggle(false);
  };
  const onLoadScreen = () => {
    const viewPortWidth = window.innerWidth;
    const viewPortHeight = window.innerHeight;
    if (viewPortWidth <= 1024) {
      setIsDisplay(false);
    }
    if (viewPortWidth > 1024) {
      setIsDisplay(true);
    }
  };
  useEffect(() => {
    onLoadScreen();
    window.addEventListener("resize", () => {
      onLoadScreen();
    });
    toggle === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    return () => {
      window.removeEventListener("resize", () => {
        onLoadScreen();
      });
    };
  }, [toggle]);

  return (
    <AllbarWrap toggle={toggle}>
      {!isDisplay && <NavBar onClickToggle={onClickToggle} />}
      {isDisplay === true ? (
        <SideNavBar />
      ) : (
        <aside
          className={`aside-side ${toggle === true ? "as-show" : "as-hide"}`}
        >
          <MobileSideNavBar toggle={toggle} onClickSideItem={onClickSideItem} />
        </aside>
      )}
      {!isDisplay && toggle && (
        <div className="MobileDarkBackground" onClick={onClickbackground}></div>
      )}
    </AllbarWrap>
  );
};

const AllbarWrap = styled.div`
  .MobileDarkBackground {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: ${({ toggle }) => (toggle === true ? 40 : -40)};
    overflow: ${({ toggle }) => (toggle === true ? "hidden" : "none")};
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

export default AllbarComponents;
