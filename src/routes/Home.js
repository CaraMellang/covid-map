import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <MainWrap>
      <section>여긴 컨텐츠</section>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  padding-top: 3.625rem;
  padding-left: 15rem;
`;

export default Home;
