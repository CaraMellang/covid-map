import React from "react";
import FadeIn from "react-fade-in";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import Notice from "../components/Notice";
import media from "../lib/media";
import Loading from "../components/Loading/Loading";
import incDataComponent from "../components/common/incDataComponent";
import { InfecDatasConverter } from "../components/common/InfecDatas";

const OverFlow = ({ data }) => {
  const { infData, loading, overflow } = data;

  const barData = {
    labels: [`확진자 수`, `환자수`, `완치자 수`, `사망자 수`],
    datasets: [
      {
        label: `전세계 확진자수`,
        borderColor: [
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
        ],
        backgroundColor: [
          "rgba(238, 173, 81,1)",
          "rgba(75, 176, 202,1)",
          "rgba(91, 182, 93,1)",
          "rgba(234, 71, 65,1)",
        ],
        data: [
          overflow.cases,
          overflow.active,
          overflow.recovered,
          overflow.deaths,
        ],
      },
    ],
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <MainWrap>
      <div className="contents">
        <FadeIn>
          <Notice infData={infData} title={"해외 코로나 상황"} />
        </FadeIn>

        <div className="cd-wrap">
          <div className="cd-field">
            <section className="cd-left cd">
              <FadeIn>
                <div className="cd-padd">
                  <div className="card">
                    <div className="cd-name">
                      전세계 코로나 현항(
                      {infData[0]?.createDt._text.slice(0, 10)}
                      기준)
                    </div>
                    <div className="cd-left-body">
                      <FadeIn>
                        <div className="chart-bar">
                          <Bar
                            data={barData}
                            style={{ height: "20rem" }}
                            options={{
                              maintainAspectRatio: false,
                              animation: {
                                // duration: aniToggle,
                                // onComplete: animationHandler,
                              },
                              plugins: {
                                legend: {
                                  display: false,
                                  position: "bottom",
                                },
                              },
                            }}
                          />
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </div>
                <div className="cd-left-ft">
                  <FadeIn className="cd-padd">
                    <div className=" cd-ft-item">
                      <div className="ft-text ft-card">
                        <div className="ft-name">확진자 수</div>
                        <div className="ft-text ft-con back-yellow ">
                          {InfecDatasConverter(overflow.casesPerOneMillion)}
                        </div>
                      </div>
                    </div>
                    <div className=" cd-ft-item">
                      <div className="ft-text ft-card">
                        <div className="ft-name">환자 수</div>
                        <div className="ft-text ft-con back-blue">
                          {InfecDatasConverter(overflow.activePerOneMillion)}
                        </div>
                      </div>
                    </div>
                    <div className=" cd-ft-item">
                      <div className="ft-text ft-card">
                        <div className="ft-name">완치자 수</div>
                        <div className="ft-text ft-con back-green">
                          {InfecDatasConverter(
                            overflow.recoveredPerOneMillion
                          )}
                        </div>
                      </div>
                    </div>
                    <div className=" cd-ft-item">
                      <div className="ft-text ft-card">
                        <div className="ft-name">사망자 수</div>
                        <div className="ft-text ft-con back-red">
                          {InfecDatasConverter(overflow.deathsPerOneMillion)}
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        color: "#9AA0A6",
                        display: "block",
                        paddingLeft: "1rem",
                        paddingBottom: "0.5rem",
                        textAlign: "end",
                      }}
                    >
                      단위 : 100만명
                    </span>
                  </FadeIn>
                </div>
              </FadeIn>
            </section>
            <section className="cd-right cd">
              <div className="cd-padd">
                <FadeIn className="cd-right-colunm" delay="150">
                  <div className="card">
                    <div className="right-cd-name">전세계 확진자 수</div>
                    <div className="right-cd-body yellow">
                      {InfecDatasConverter(overflow.cases)}
                    </div>
                    <div className="right-cd-footer ">
                      {incDataComponent(overflow.todayCases)}
                    </div>
                  </div>
                  <div className="card">
                    <div className="right-cd-name">전세계 환자 수</div>
                    <div className="right-cd-body blue ">
                      {InfecDatasConverter(overflow.active)}
                    </div>
                    <div className="right-cd-footer ">
                      {incDataComponent(overflow.critical)}
                    </div>
                  </div>
                  <div className="card">
                    <div className="right-cd-name">전세계 완치자 수</div>
                    <div className="right-cd-body green">
                      {InfecDatasConverter(overflow.recovered)}
                    </div>
                    <div className="right-cd-footer ">
                      {incDataComponent(overflow.todayRecovered)}
                    </div>
                  </div>
                  <div className="card">
                    <div className="right-cd-name">전세계 사망자 수</div>
                    <div className="right-cd-body red">
                      {InfecDatasConverter(overflow.deaths)}
                    </div>
                    <div className="right-cd-footer">
                      {incDataComponent(overflow.todayDeaths)}
                    </div>
                  </div>
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
  /* padding-top: 3.625rem; */
  background-color: #e9e9e9;
  .red {
    color: #ea4741;
  }
  .yellow {
    color: #eead51;
  }
  .green {
    color: #5bb65d;
  }
  .blue {
    color: #4bb0ca;
  }
  .back-red {
    background-color: #ea4741;
    border: 1px solid #ea4741;
    border-radius: 0 5px 5px 0;
  }
  .back-yellow {
    background-color: #eead51;
    border: 1px solid #eead51;
    border-radius: 0 5px 5px 0;
  }
  .back-green {
    background-color: #5bb65d;
    border: 1px solid #5bb65d;
    border-radius: 0 5px 5px 0;
  }
  .back-blue {
    background-color: #4bb0ca;
    border: 1px solid #4bb0ca;
    border-radius: 0 5px 5px 0;
  }
  .contents {
    padding-bottom: 6rem;
    padding-left: 15rem;
  }
  .cd-wrap {
    /* padding-left: 2rem;
    padding-right: 2rem; */
    display: flex;
    flex-direction: column;
  }
  .cd-field {
    display: flex;
    flex-wrap: wrap;
  }
  .cd {
    width: 50%;
  }
  .cd-padd {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
  }
  .card {
    background-color: white;
    border: 1px solid none;
    border-radius: 0.35rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .cd-name {
    background-color: #468a9d;
    font-weight: bold;
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
  .chart-bar {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .cd-left-ft {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  .cd-ft-row {
    display: flex;
    gap: 0.5rem;
  }
  .cd-ft-item {
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .co-map {
    display: flex;
    justify-content: center;
  }
  .ft-name {
    background-color: #cccccc;
    width: 20%;
    color: black;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .ft-card {
    display: flex;
    border: 1px solid white;
    border-radius: 0.5rem;
  }
  .ft-text {
    text-align: center;
  }
  .ft-con {
    width: 80%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .right-cd-ft {
    padding: 0.75rem;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
  }
  .cd-right-colunm {
    display: flex;
    flex-direction: column;
    color: black;
    gap: 2rem;
  }
  .right-cd-name {
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 0.35rem 0.35rem 0 0;
  }
  .right-cd-body {
    display: flex;
    font-weight: bold;
    font-size: 2rem;
    justify-content: center;
    padding-bottom: 1.5rem;
  }
  .right-cd-footer {
    display: flex;
    justify-content: center;
    font-weight: bold;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  ${media.xlarge} {
    //1440
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  ${media.large} {
    //1024
    padding-top: 3.625rem;
    .contents {
      padding-left: 0;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  ${media.medium} {
    //768
    padding-top: 3.625rem;
    .cd-field {
      flex-direction: column;
    }
    .cd-left {
      width: 100%;
    }
    .cd-right {
      width: 100%;
    }
    .contents {
      padding-left: 0;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  ${media.small} {
    //425
    padding-top: 3.625rem;
    .contents {
      padding-left: 0;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  ${media.xsmall} {
    //375
    padding-top: 3.625rem;
    .contents {
      padding-left: 0;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  ${media.xxsmall} {
    //320
    padding-top: 3.625rem;
    .contents {
      padding-left: 0;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`;

export default React.memo(OverFlow);
