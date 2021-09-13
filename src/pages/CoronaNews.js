import React from "react";
import styled from "styled-components";

const CoronaNews = ({ data }) => {
  const { newsData } = data;
  return (
    <NewsWrap>
      <section className="contents">
        뉴스페이지 준비중
        {newsData.map((item, index) => {
          console.log(item.description);
          return (
            <div key={index}>
              <div>{convertWord(item.title)}</div>
              <div className="desctipyion">{convertWord(item.description)}</div>
            </div>
          );
        })}
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

export default CoronaNews;
