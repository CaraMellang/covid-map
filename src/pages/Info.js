import React from "react";
import styled from "styled-components";
import media from "../lib/media";
import FadeIn from "react-fade-in/lib/FadeIn";

const Info = () => {
  return (
    <DeveloperWrap className="commonwrap">
      <section className="contents">
        <FadeIn delay="200" transitionDuration="800">
          <NoticeWrap>
            <div className="nt-field">
              <div className="nt-card">만든사람 & 데이터 출처</div>
            </div>
          </NoticeWrap>
          <div className="card-frame">
            <div className="card" style={{ height: "15vh" }}>
              Jeho Lee(Mellang)
              <ul>
                <li>
                  <a
                    href="https://github.com/CaraMellang"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "blue" }}
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-frame">
            <div className="card">
              <div>
                사용한 API
                <ul>
                  <li>공공 데이터 포털 openAPI(코로나19 감염현황)</li>
                  <li>공공 데이터 포털 openAPI(코로나19 시·도 발생현황)</li>
                  <li>NovelCOVID API</li>
                </ul>
              </div>
              <div>
                관련 사이트
                <ul>
                  <li>
                    세계현황 종합상황 대시보드-
                    <a
                      href="https://gisanddata.maps.arcgis.com/apps/dashboards/bda7594740fd40299423467b48e9ecf6"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "blue" }}
                    >
                      존스홉킨스 CSSE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </DeveloperWrap>
  );
};

const DeveloperWrap = styled.div`
  background-color: #e9e9e9;
  color: black;
  height: 100vh;

  .card-frame {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .card {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 20vh;
    border: 1px solid none;
    border-radius: 0.35rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  ${media.large} {
    padding-left: 0;
    .card-frame {
      padding-top: 1.375rem;
    }
  }
  ${media.medium} {
    padding-left: 0;
    .card-frame {
      padding-top: 1.375rem;
    }
  }
  ${media.small} {
    padding-left: 0;
    .card-frame {
      padding-top: 1.375rem;
    }
  }
  ${media.xsmall} {
    padding-left: 0;
    .card-frame {
      padding-top: 1.375rem;
    }
  }
  ${media.xxsmall} {
    padding-left: 0;
    .card-frame {
      padding-top: 1.375rem;
    }
  }
`;
const NoticeWrap = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  .nt-field {
    /* height: 10vh; */
    background-color: #f7f7f7;
    color: black;
    width: 100%;
    /* border-top: 5px solid #468a9d;
  border-bottom: 5px solid #468a9d;
  border-left: 2px solid #468a9d;
  border-right: 2px solid #468a9d; */
    border-radius: 0.35rem;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.6),
      hsla(0, 0%, 100%, 0.2)
    );
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .nt-card {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default Info;
