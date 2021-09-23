import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";
import "animate.css";
import NewsForm from "../components/NewsForm/NewsForm";

const CoronaNews = ({ data }) => {
  const { newsData } = data;
  return (
    <NewsWrap className="commonwrap">
      <section className="contents">
        <FadeIn>
          <NoticeWrap>
            <div className="nt-field">
              <div className="nt-card">
                <b style={{ display: "block" }}>코로나 뉴스</b>
                <div className="nt-subtitle">
                  "코로나"관련 뉴스검색결과 입니다.
                </div>
              </div>
            </div>
          </NoticeWrap>
        </FadeIn>
        <div className="news-field">
          <div className="field-wrap">
            {newsData.map((item, index) => {
              return (
                <NewsForm key={index} id={index} item={item} className="card" />
              );
            })}
          </div>
        </div>
      </section>
    </NewsWrap>
  );
};

const NewsWrap = styled.div`
  background-color: #e9e9e9;
  color: black;

  .contents {
    padding-bottom: 6rem;
  }
  .news-field {
    overflow: hidden;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .field-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
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

export default CoronaNews;
