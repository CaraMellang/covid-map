import React from "react";
import styled, { keyframes } from "styled-components";

const NewsForm = ({ id, item }) => {
  return (
    <NewsItem id={id}>
      <div className="cd-top row">
        <a href={item.originallink} className="cd-title">
          {convertWord(item.title)}
        </a>
        {`\u00a0\u00a0 \u00a0`}
        {dateConvert(item.pubDate)}
      </div>
      <div className="cd-bot description">{convertWord(item.description)}</div>
    </NewsItem>
  );
};
const OpacityFadeFrame = keyframes`
  from{
    transform:translateX(200px);
  opacity:0;
  }
  to{
    transform:translateX(0px);
}
`;

const NewsItem = styled.div`
  display: block;
  padding: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #f7f7f7;
  border: 1px solid none;
  border-radius: 0.35rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  animation: ${OpacityFadeFrame} ${(props) => (props.id + 1) / 10 + 0.2}s
    ease-in-out;
  :hover {
    transform: scale(1.03, 1.03);
    transition: transform 0.2s;
  }
  .cd-title {
    font-weight: bold;
  }
  .cd-title:hover {
    font-weight: bold;
    animation: pulse 1s;
  }
  .cd-date {
    color: #a9a9ac;
  }

  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }
    20% {
      transform: scale3d(1.02, 1.02, 1.02);
    }
    40% {
      transform: scale3d(0.98, 0.98, 0.98);
    }
    60% {
      transform: scale3d(1.01, 1.01, 1.01);
    }
    80% {
      transform: scale3d(0.99, 0.99, 0.99);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
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
export default NewsForm;
