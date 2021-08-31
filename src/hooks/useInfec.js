import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useInfec() {
  const [siDoData, setSiDoData] = useState([]);
  const [infData, setInfData] = useState();

  const getInfectedData = async () => {
    let data = await axios.get(`http://localhost:4000/infectedapi`);
    setInfData(data.data.response.body.items.item);
    let data2 = await axios.get(`http://localhost:4000/sidoapi`);
    setSiDoData(data2.data.response.body.items.item);
  };

  useEffect(() => {
    getInfectedData();
  }, []);
  return { siDoData, infData };
}
