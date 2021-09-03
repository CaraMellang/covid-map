import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="ft">
        <div>코로나 종식되는 그날까지.</div>
        <div>Copyright © 2021. Mellang All rights reserved.</div>
      </div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  background-color: #3d3d45;
  .ft {
    padding-left: 15rem;
    text-align: center;
    color: white;
  }
`;

export default Footer;
