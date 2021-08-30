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
              <div className="cd-padd">
                <div className="card">
                  <div className="cd-name">뭔가 있더라</div>
                  <div className="cd-left-body">
                    <div className="chart-pie">
                      <Doughnut
                        data={data}
                        options={{
                          legend: {
                            position: "right",
                          },
                          reponsive: true,
                          maintainAspectRatio: true,
                        }}
                      />
                    </div>
                    <div className="cd-left-ft">
                      <div className="ft-left">
                        <div className="ft-text ft-card">
                          <div className="ft-name">총 검사수</div>
                          <div className="ft-text ft-con">123124325</div>
                        </div>
                      </div>
                      <div className="ft-left">
                        <div className="ft-text ft-card">
                          <div className="ft-name">검사 완료수</div>
                          <div className="ft-text ft-con">34535345345</div>
                        </div>
                      </div>
                      <div className="ft-right">
                        <div className="ft-text ft-card">
                          <div className="ft-name">확진율</div>
                          <div className="ft-text ft-con">34%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="cd-right cd">
              <div className="cd-padd">
                <div className="card">
                  <div className="cd-name"> gdgd</div>
                  <div className="cd-right-body">
                    <div className="co-map">
                      <FadeIn className="dd">
                        <CMap />
                      </FadeIn>
                    </div>
                  </div>
                </div>
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
    flex-wrap: wrap;
  }
  .cd {
    width: 50%;
  }
  .cd-padd {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .card {
    background-color: white;
    border: 1px solid white;
    border-radius: 0.35rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .cd-name {
    background-color: #468a9d;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 0.35rem 0.35rem 0 0;
  }
  .cd-left-body {
    display: flex;
    flex-direction: column;
  }
  .chart-pie {
    padding: 5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .cd-left-ft {
    display: flex;
    flex-wrap: wrap;
  }
  .cd-right-body {
  }
  .co-map {
    display: flex;
    justify-content: center;
  }
  .ft-left {
    width: 25%;
  }
  .ft-right {
    width: 50%;
  }
  .ft-name {
    background-color: #d1c4b4;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 0.35rem 0.35rem 0 0;
  }
  .ft-card {
    display: flex;
    flex-direction: column;
    background-color: #00897b;
    border: 1px solid white;
    border-radius: 0.5rem;
  }
  .ft-text {
    text-align: center;
  }
  .ft-con {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
const aa = 234412233;

const data = {
  labels: [`검사중(${aa}명)`, `결과양성(${aa}명)`, `결과음성(${aa}ㅁㅇ)`],
  datasets: [
    // {
    //   backgroundColor: "rgba(255,99,132,1)",
    //   borderColor: "rgba(255,99,132,1)",
    //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
    //   hoverBorderColor: "rgba(255,99,132,1)",
    //   data: [65,23],
    // },
    {
      data: [766546, 275000, 12222222],
      borderWidth: 2,
      hoverBorderWidth: 3,
      borderColor: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"],
      backgroundColor: [
        "rgba(255,99,132,1)",
        "rgba(98,181,229,1)",
        "rgba(123,198,231,1)",
      ],
      fill: true,
    },
  ],
};

export default CoronaMap;
