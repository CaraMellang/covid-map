import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import media from "../lib/media";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="ft">
        <div>코로나 종식되는 그날까지.</div>
        <div>Copyright © 2021. Mellang All rights reserved.</div>
        <a href="https://github.com/CaraMellang">
          <FontAwesomeIcon icon={faGithub} size={"2x"} className="gitgit" />
        </a>
      </div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  background-color: #3d3d45;
  .ft {
    padding-left: 15rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    color: white;
  }
  .gitgit {
    margin-top: 0.5rem;
  }
  ${media.xlarge} {
    //1440
  }
  ${media.large} {
    //1024
    .ft {
      padding-left: 0;
    }
  }
  ${media.medium} {
    //768
    .ft {
      padding-left: 0;
    }
  }
  ${media.xsmall} {
    //375
  }
  ${media.xxsmall} {
    //320
  }
`;

export default Footer;
