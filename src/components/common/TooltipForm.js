import React from "react";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const TooltipForm = ({ item, id, siDoData }) => {
  // const incIsolIngCnt = 2021.12.03 정책변경으로 삭제
  // parseInt(siDoData[id]?.isolIngCnt._text) -
  // parseInt(siDoData[id + 19]?.isolIngCnt._text);
  // const incIsolClearCnt = 2022.01.22 삭제
  //   parseInt(siDoData[id]?.isolClearCnt._text) -
  //   parseInt(siDoData[id + 19]?.isolClearCnt._text);
  const incOverFlowCnt =
    parseInt(siDoData[id]?.overFlowCnt._text) -
    parseInt(siDoData[id + 19]?.overFlowCnt._text);
  const incLocalOccCnt =
    parseInt(siDoData[id]?.localOccCnt._text) -
    parseInt(siDoData[id + 19]?.localOccCnt._text);
  const incDefCnt =
    parseInt(siDoData[id]?.defCnt._text) -
    parseInt(siDoData[id + 19]?.defCnt._text);

  console.log(siDoData);

  const numberHandler = (data, string) => {
    let dd;
    // console.log(data);
    if (data > 0) {
      dd = data;
      return (
        <span>
          <FontAwesomeIcon icon={faCaretUp} color="red" />
          {dd}
        </span>
      );
    }
    if (data < 0) {
      dd = data * -1;
      return (
        <span>
          <FontAwesomeIcon icon={faCaretDown} color="blue" />
          {dd}
        </span>
      );
    }
    if (data === 0) {
      //격리 해제자는 반대로 계산
      dd = data;
      return (
        <span>
          <FontAwesomeIcon icon={faTimes} color="red" />
        </span>
      );
    }
    if (string === "반대!" && data < 0) {
      //격리 해제자는 반대로 계산
      dd = data * -1;
      return (
        <span>
          <FontAwesomeIcon icon={faCaretUp} color="red" />
          {dd}
        </span>
      );
    }
    if (string === "반대!" && data > 0) {
      //격리 해제자는 반대로 계산
      dd = data;
      return (
        <span>
          <FontAwesomeIcon icon={faCaretDown} color="blue" />
        </span>
      );
    }
    if (string === "반대!" && data === 0) {
      //격리 해제자는 반대로 계산
      dd = data;
      return (
        <span>
          <FontAwesomeIcon icon={faTimes} color="red" />
          {dd}
        </span>
      );
    }
  };

  // const incTriangle = <FontAwesomeIcon icon={faCaretUp} color="red" />;
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
        <div>
          전일 대비 증감수 :
          {numberHandler(parseInt(siDoData[id]?.incDec._text))}
        </div>
        {/* <div> 2021.12.03 정책변경으로 삭제
          격리자 수 : {siDoData[id]?.isolIngCnt._text}(
          {numberHandler(incIsolIngCnt, "반대!")})
        </div> */}
        {/* <div> 2022.01.22 삭제됨.
          격리 해제 수 : {siDoData[id]?.isolClearCnt._text}(
          {numberHandler(incIsolClearCnt)})
        </div> */}
        <div>
          해외 유입 수 : {siDoData[id]?.overFlowCnt._text}(
          {numberHandler(incOverFlowCnt)})
        </div>
        <div>
          지역 발생 수 : {siDoData[id]?.localOccCnt._text}(
          {numberHandler(incLocalOccCnt)})
        </div>
        <div>
          총 확진자 수 : {siDoData[id]?.defCnt._text}(
          {numberHandler(incDefCnt, "반대!")})
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
