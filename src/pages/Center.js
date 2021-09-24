import React from "react";
import styled from "styled-components";
import KaKaoMap from "../components/KakaoMap/KakaoMap";
import media from "../lib/media";

const Center = () => {
  return (
    <CenterWrap className="commonwrap">
      <section className="contents">
        <NoticeWrap>
          <div className="nt-field">
            <div className="nt-card">
              <b style={{ display: "block" }}>예방접종센터</b>
              <div className="nt-subtitle">
                "예방접종센터"관련 검색결과 입니다.(최대 45개표현)
              </div>
            </div>
          </div>
        </NoticeWrap>
        <KaKaoMap />
      </section>
    </CenterWrap>
  );
};

const CenterWrap = styled.div`
  background-color: #e9e9e9;
  color: black;
  .center-wrap {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 80vh;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .map {
    width: 100%;
    height: 100%;
  }
  .map-wrap {
    width: 70%;
  }
  ${media.medium} {
    //768px
    .center-wrap {
      flex-direction: column;
      gap: 2rem;
    }
    .map-wrap {
      width: 100%;
      height: 40vh;
    }
  }
`;
const NoticeWrap = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  .nt-field {
    background-color: #f7f7f7;
    color: black;
    width: 100%;
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
  .nt-subtitle {
    color: #848486;
  }
`;

export default Center;
