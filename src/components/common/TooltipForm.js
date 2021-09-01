import React from "react";
import ReactTooltip from "react-tooltip";

const TooltipForm = ({ item, id, siDoData }) => {
  return (
    <ReactTooltip
      id={siDoData[id]?.gubunEn._text.toLowerCase()}
      place="right"
      effect="solid"
      backgroundColor="#00897B"
      arrowColor="rgba(0, 0, 0, 0)" //투명띠
    >
      <div>
        <div
          style={{
            paddingBottom: "2px",
            borderBottom: "1px solid white",
          }}
        >
          {item}
        </div>
        <div>전일 대비 증감수 : {siDoData[id]?.incDec._text}</div>
        <div>
          격리자 수 : {siDoData[id]?.isolIngCnt._text}(+
          {isNaN(
            parseInt(siDoData[id + 18]?.isolIngCnt._text) -
              parseInt(siDoData[id]?.isolIngCnt._text)
          )
            ? "오류"
            : parseInt(siDoData[id + 18]?.isolIngCnt._text) -
              parseInt(siDoData[id]?.isolIngCnt._text)}
          )
        </div>
        <div>
          격리 해제 수 : {siDoData[id]?.isolClearCnt._text}(+
          {siDoData[id + 18]?.isolClearCnt._text})
        </div>
        <div>
          해외 유입 수 : {siDoData[id]?.overFlowCnt._text}(+
          {siDoData[id + 18]?.overFlowCnt._text})
        </div>
        <div>
          지역 발생 수 : {siDoData[id]?.localOccCnt._text}(+
          {siDoData[id + 18]?.localOccCnt._text})
        </div>
        <div>
          총 확진자 수 : {siDoData[id]?.defCnt._text}(+
          {siDoData[id + 18]?.defCnt._text})
        </div>
      </div>
    </ReactTooltip>
  );
};

// const cities = [
//   { gubun: "검역", cityStyle: "Lazaretto" },
//   { gubun: "제주", cityStyle: "Jeju" },
//   { gubun: "경남", cityStyle: "Lazaretto" },
//   { gubun: "경북", cityStyle: "Lazaretto" },
//   { gubun: "전남", cityStyle: "Lazaretto" },
//   { gubun: "전북", cityStyle: "Lazaretto" },
//   { gubun: "충남", cityStyle: "Lazaretto" },
//   { gubun: "충북", cityStyle: "Lazaretto" },
//   { gubun: "강원", cityStyle: "Lazaretto" },
//   { gubun: "경기", cityStyle: "Lazaretto" },
//   { gubun: "세종", cityStyle: "Lazaretto" },
//   { gubun: "울산", cityStyle: "Lazaretto" },
//   { gubun: "대전", cityStyle: "Lazaretto" },
//   { gubun: "광주", cityStyle: "Lazaretto" },
//   { gubun: "인천", cityStyle: "Lazaretto" },
//   { gubun: "대구", cityStyle: "Lazaretto" },
//   { gubun: "부산", cityStyle: "Lazaretto" },
//   { gubun: "서울", cityStyle: "Lazaretto" },
//   { gubun: "합계", cityStyle: "Lazaretto" },
// ];

export default TooltipForm;
