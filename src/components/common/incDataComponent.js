import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function incDataComponent(item) {
  let data;
  if (item > 0) {
    data = item;
    return (
      <div>
        (
        <FontAwesomeIcon icon={faCaretUp} style={{ color: "red" }} />
        {data.toLocaleString()})
      </div>
    );
  }
  if (item < 0) {
    data = -1 * item;
    return (
      <div>
        (
        <FontAwesomeIcon icon={faCaretDown} style={{ color: "blue" }} />
        {data.toLocaleString()})
      </div>
    );
  }
  if (item === 0) {
    return <div>({data.toLocaleString()})</div>;
  }
  return "정보없음.";
}
