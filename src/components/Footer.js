import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="ft">이건 푸터임</div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  background-color: #3d3d45;
  .ft {
    padding-left: 15rem;
  }
`;

export default Footer;
