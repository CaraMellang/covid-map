import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useInfec() {
  const [siDoData, setSiDoData] = useState([]);
  const [infData, setInfData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [incExamCnt, setIncExamCnt] = useState(0); //전일대비 검사자
  const [incDecideCnt, setIncDecideCnt] = useState(0); //전일대비 확진자
  const [incClearCnt, setIncClearCnt] = useState(0); //전일대비 격리해제자
  const [incDeathCnt, setIncDeathCnt] = useState(0); //전일대비 사망자

  const getInfectedData = async () => {
    let data = await axios.get(`http://localhost:4000/infectedapi`);
    setInfData(data.data.response.body.items.item);
    let data2 = await axios.get(`http://localhost:4000/sidoapi`);
    setSiDoData(data2.data.response.body.items.item);
    setLoading(false);
  };

  const dataProcessing = (siDoData, infData) => {
    if (siDoData === undefined) {
      return;
    }
    if (infData === undefined) {
      return;
    }
    const aa = "1112";
    console.log(parseInt(infData[0]?.examCnt?._text));
    const resultExamCnt =
      parseInt(infData[0]?.examCnt?._text) -
      parseInt(infData[1]?.examCnt?._text);
    const resultDecideCnt =
      parseInt(infData[0]?.decideCnt?._text) -
      parseInt(infData[1]?.decideCnt?._text);
    const resultClearCnt =
      parseInt(infData[0]?.clearCnt?._text) -
      parseInt(infData[1]?.clearCnt?._text);

    const resultDeathCnt =
      parseInt(infData[0]?.deathCnt?._text) -
      parseInt(infData[1]?.deathCnt?._text);

    setIncExamCnt(resultExamCnt);
    setIncDecideCnt(resultDecideCnt);
    setIncClearCnt(resultClearCnt);
    setIncDeathCnt(resultDeathCnt);
  };

  useEffect(() => {
    if (loading) {
      getInfectedData();
    }
    dataProcessing(siDoData, infData);
  }, [loading]);
  return {
    data: {
      siDoData,
      infData,
      loading,
      incExamCnt,
      incDecideCnt,
      incClearCnt,
      incDeathCnt,
    },
  };
}
