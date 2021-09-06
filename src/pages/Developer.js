import React from "react";
import styled from "styled-components";
import media from "../lib/media";
import FadeIn from "react-fade-in/lib/FadeIn";

const Developer = () => {
  return (
    <DeveloperWrap>
      <FadeIn delay="200" transitionDuration="800">
        <NoticeWrap>
          <div className="nt-field">
            <div className="nt-card">만든사람 & 데이터 출처</div>
          </div>
        </NoticeWrap>
        <div className="card-frame">
          <div className="card">멜랑!!!</div>
        </div>
        <div className="card-frame">
          <div className="card">
            사용한 API
            <div>
              <ul>
                <li>공공 데이터 포털 openAPI(코로나19 감염현황)</li>
                <li>공공 데이터 포털 openAPI(코로나19 시·도 발생현황)</li>
                <li>NovelCOVID API</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </DeveloperWrap>
  );
};

const DeveloperWrap = styled.div`
  padding-left: 15rem;
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
    height: 15vh;
    border: 1px solid none;
    border-radius: 0.35rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  ${media.large} {
    padding-top: 3.625rem;
    padding-left: 0;
    .card-frame {
      padding-top: 1.375rem;
    }
  }
  ${media.medium} {
    padding-top: 3.625rem;
    padding-left: 0;
    .card-frame {
      padding-top: 1.375rem;
    }
  }
  ${media.small} {
    padding-top: 3.625rem;
    padding-left: 0;
    .card-frame {
      padding-top: 1.375rem;
    }
  }
  ${media.xsmall} {
    padding-top: 3.625rem;
    padding-left: 0;
    .card-frame {
      padding-top: 1.375rem;
    }
  }
  ${media.xxsmall} {
    padding-top: 3.625rem;
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

export default Developer;
