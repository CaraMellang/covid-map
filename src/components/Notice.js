import React from "react";
import styled from "styled-components";

const Notice = (props) => {
  const infData = props.infData;
  const title = props.title;
  console.log(infData);
  return (
    <NoticeWrap>
      <div className="nt-field">
        <div className="nt-card">
          <b style={{ display: "block" }}>-{title}-</b>
          <b style={{ display: "block" }}>매일 오전에 갱신됩니다.</b>
          <b style={{ display: "block" }}>
            현재 데이터가 업데이트된 날짜 :{" "}
            {infData[0]?.createDt._text.slice(0, 19)}
          </b>
          <b>일부 데이터들은 표기가 되지 않을 때가 있습니다.</b>
          {/* <ul style={{ margin: 0 }}>
            <li>반응형 적용예정.</li>
            <li>1920x에서 정상작동.</li>
          </ul> */}
        </div>
      </div>
    </NoticeWrap>
  );
};
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

export default Notice;
