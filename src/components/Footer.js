import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <div>이건 푸터임</div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  margin-top: 4rem;
  background-color: #3d3d45;
`;

export default Footer;
