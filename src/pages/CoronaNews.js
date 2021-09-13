import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";

const CoronaNews = ({ data }) => {
  const { newsData } = data;
  return (
    <NewsWrap>
      <NoticeWrap>
        <div className="nt-field">
          <div className="nt-card">
            <b style={{ display: "block" }}>코로나 뉴스</b>
            <div style={{ color: "#848486" }}>
              "코로나"관련 뉴스검색결과 입니다.
            </div>
          </div>
        </div>
      </NoticeWrap>
      <section className="contents">
        <div className="news-field">
          <FadeIn className="field-wrap">
            {newsData.map((item, index) => {
              console.log(item.description);
              return (
                <div className="card" key={index}>
                  <div className="cd-top row">
                    <div className="cd-title">{convertWord(item.title)}</div>
                    {`\u00a0\u00a0 \u00a0`}
                    {dateConvert(item.pubDate)}
                  </div>
                  <div className="cd-bot description">
                    {convertWord(item.description)}
                  </div>
                </div>
              );
            })}
          </FadeIn>
        </div>
      </section>
    </NewsWrap>
  );
};

const NewsWrap = styled.div`
  padding-left: 15rem;
  background-color: #e9e9e9;
  color: black;
  .contents {
    padding-bottom: 6rem;
  }
  .news-field {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .field-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .card {
    padding: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #f7f7f7;
    border: 1px solid none;
    border-radius: 0.35rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
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
`;

function convertWord(item) {
  if (item == null) {
    return "";
  }
  return item
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/<b>/g, "")
    .replace(/<\/b>/g, "");
}

const dateConvert = (dateItem) => {
  // let birthday = new Date("Dec 17, 1995 03:24:00");
  const time = new Date(
    `${dateItem.slice(8, 11)} ${dateItem.slice(5, 7)}, ${dateItem.slice(
      12,
      16
    )} ${dateItem.slice(17, 25)}`
  );
  return (
    <div className="cd-date">{` ${time.getFullYear()} ${String(
      time.getMonth() + 1
    ).padStart(2, "0")} ${String(time.getDate()).padStart(2, "0")} ${String(
      time.getHours()
    ).padStart(2, "0")}:${String(time.getMinutes()).padStart(2, "0")}:${String(
      time.getSeconds()
    ).padStart(2, "0")}`}</div>
  );
};

export default CoronaNews;
