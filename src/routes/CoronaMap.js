import React from "react";
import FadeIn from "react-fade-in";
import styled from "styled-components";
import CMap from "../components/CMap";
import { Pie, Doughnut } from "react-chartjs-2";

const CoronaMap = () => {
  return (
    <MainWrap>
      <div className="contents">
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div className="cd-wrap">
          <div className="cd-field">
            <section className="cd-left cd">
              뭔가 있더라
              <div className="chart-pie">
                <Doughnut data={data} height={50} width={50} />
              </div>
            </section>
            <section className="cd-right cd">
              <div className="co-map">
                <FadeIn>
                  <CMap />
                </FadeIn>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  padding-top: 3.625rem;
  .contents {
    padding-bottom: 6rem;
    padding-left: 15rem;
    background-color: #afd48d;
  }
  .cd-wrap {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .cd-field {
    display: flex;
  }
  .cd{
    width: 50%;
  }
  .chart-pie {
  }
`;

const data = {
  labels: ["서울", "인천", "경기일까"],
  datasets: [
    // {
    //   backgroundColor: "rgba(255,99,132,1)",
    //   borderColor: "rgba(255,99,132,1)",
    //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
    //   hoverBorderColor: "rgba(255,99,132,1)",
    //   data: [65,23],
    // },
    {
      data: [65, 23, 44],
      borderColor: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"],
      backgroundColor: [
        "rgba(255,99,132,1)",
        "rgba(98,181,229,1)",
        "rgba(123,198,231,1)",
      ],
    },
  ],
};

export default CoronaMap;
