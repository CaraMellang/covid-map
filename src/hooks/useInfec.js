import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useInfec() {
  const [siDoData, setSiDoData] = useState([]);
  const [infData, setInfData] = useState([]);
  const [incObj, setIncObj] = useState({});
  const [incExamCnt, serIncExamCnt] = useState(0); //전일대비 검사자
  const [incDecideCnt, setIncDecideCnt] = useState(0); //전일대비 확진자
  const [incClearCnt, setIncClearCnt] = useState(0); //전일대비 격리해제자
  const [incDeathCnt, setIncDeathCnt] = useState(0); //전일대비 사망자

  const getInfectedData = async () => {
    let data = await axios.get(`http://localhost:4000/infectedapi`);
    setInfData(data.data.response.body.items.item);
    let data2 = await axios.get(`http://localhost:4000/sidoapi`);
    setSiDoData(data2.data.response.body.items.item);
  };

  const dataProcessing = (siDoData, infData) => {
    if (siDoData === undefined) {
      return;
    }
    if (infData === undefined) {
      return;
    }
  };

  useEffect(() => {
    getInfectedData();
  }, []);
  return { siDoData, infData };
}
