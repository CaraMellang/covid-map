import axios from "axios";
import { useEffect, useState } from "react";

export default function useInfec() {
  const [siDoData, setSiDoData] = useState([]);
  const [infData, setInfData] = useState([]);
  const [overflow, setOverflow] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [incExamCnt, setIncExamCnt] = useState(0); //전일대비 검사자
  const [incDecideCnt, setIncDecideCnt] = useState(0); //전일대비 확진자
  const [incClearCnt, setIncClearCnt] = useState(0); //전일대비 격리해제자
  const [incDeathCnt, setIncDeathCnt] = useState(0); //전일대비 사망자

  const backPath = `https://project-cut.herokuapp.com`;
  // const backPath = `http://localhost:4000`;

  const getInfectedData = async () => {
    await axios
      .get(`${backPath}/infectedapi`)
      .then((data) => {
        // console.log(data.status);
        // console.log(`setInfData`, data);
        setInfData(data.data.response.body.items.item);
      })
      .catch((e) => {
        setError(true);
      });
    await axios
      .get(`${backPath}/sidoapi`)
      .then((data) => {
        // console.log(`setSiDoData`, data);
        setSiDoData(data.data.response.body.items.item);
      })
      .catch((e) => {
        setError(true);
      });
    await axios
      .get(`${backPath}/alloverflowapi`)
      .then((data) => {
        // console.log(`setOverflow`, data);
        setOverflow(data.data);
      })
      .catch((e) => {
        setError(true);
      });
    await axios
      .get(`${backPath}/newsapi`)
      .then((data) => {
        // console.log(`setNewsData`, data);
        setNewsData(data.data.data.items);
      })
      .catch((e) => {
        setError(true);
      });
    setLoading(false);
  };

  const dataProcessing = (siDoData, infData) => {
    if (siDoData === undefined) {
      return;
    }
    if (infData === undefined) {
      return;
    }

    // console.log(parseInt(infData[0]?.examCnt?._text));
    const resultExamCnt =
      parseInt(infData[0]?.accExamCnt?._text) -
      parseInt(infData[1]?.accExamCnt?._text);
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
      overflow,
      newsData,
    },
    error: error,
  };
}
