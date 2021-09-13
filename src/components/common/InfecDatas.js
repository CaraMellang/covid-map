import React from "react";

export function InfecDatasConverter(item) { 
  if (item === undefined) {
    return <div>정보없음</div>;
  }
  const data = parseInt(item);
  return <div>{data.toLocaleString()}</div>;
}
