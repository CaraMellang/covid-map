import React from "react";
import FadeIn from "react-fade-in";
import styled from "styled-components";
import CMap from "../components/CMap";
import { Doughnut } from "react-chartjs-2";
import Notice from "../components/Notice";
import media from "../lib/media";
import Loading from "../components/Loading/Loading";
import { InfecDatasConverter } from "../components/common/InfecDatas";

const CoronaMap = ({ data }) => {
  const { infData, siDoData, loading } = data;

  const doughnutData = {
    labels: [
      `검사중(${infData[0]?.examCnt?._text}명)`,
      `결과양성(${infData[0]?.decideCnt?._text}명)`,
      `결과음성(${infData[0]?.resutlNegCnt?._text}명)`,
      // `검사중(${infData[0]?.examCnt?._text}명)`,
      // `결과양성(${infData[0]?.decideCnt?._text}명)`,
      // `결과음성(${infData[0]?.resutlNegCnt?._text}명)`,
    ],
    datasets: [
      {
        data: [
          10,
          10,
          10,
          // infData[0]?.examCnt?._text,
          // infData[0]?.decideCnt?._text,
          // infData[0]?.resutlNegCnt?._text,
        ],
        borderWidth: 2,
        hoverBorderWidth: 3,
        borderColor: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"],
        backgroundColor: [
          "rgba(98,181,229,1)",
          "rgba(255,99,132,1)",
          "rgba(78, 214, 113,1)",
        ],
      },
    ],
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <MainWrap className="commonwrap">
      <section className="contents">
        <FadeIn>
          <Notice infData={infData} title={"국내 코로나 상황(지도)"} />
        </FadeIn>
        <div className="cd-wrap">
          <div className="cd-field">
            <section className="cd-left cd">
              <div className="cd-padd">
                <FadeIn>
                  <div className="card">
                    <div className="cd-name">
                      코로나 환자 현항({infData[0]?.createDt._text.slice(0, 10)}
                      기준)
                    </div>
                    <div className="cd-left-body">
                      <FadeIn>
                        <div className="chart-pie">
                          <Doughnut
                            data={doughnutData}
                            style={{ height: "20rem" }}
                            options={{
                              // reponsive: false,
                              // reponsive: true,
                              maintainAspectRatio: false,

                              plugins: {
                                legend: {
                                  display: true,
                                  position: "right",
                                },
                              },
                              animation: {
                                // duration: aniToggle,
                                // onComplete: animationHandler,
                              },
                            }}
                          />
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </FadeIn>
                <div className="cd-left-ft">
                  <FadeIn className="cd-ft">
                    <div className=" cd-ft-item">
                      <div className="ft-text ft-card">
                        <div className="ft-name">총 검사수</div>
                        <div className="ft-con back-blue">
                          {InfecDatasConverter(infData[0]?.accExamCnt?._text)}
                        </div>
                      </div>
                    </div>
                    <div className="cd-ft-item">
                      <div className="ft-text ft-card">
                        <div className="ft-name">검사 완료수</div>
                        <div className="ft-con back-green">
                          {InfecDatasConverter(
                            infData[0]?.accExamCompCnt?._text
                          )}
                          {/* {infData[0]?.accExamCompCnt?._text === undefined
                            ? "정보 없음"
                            : infData[0]?.accExamCompCnt._text} */}
                        </div>
                      </div>
                    </div>
                    <div className="cd-ft-item">
                      <div className="ft-text ft-card">
                        <div className="ft-name">확진율</div>
                        <div className="ft-con back-red">
                          {infData[0]?.accDefRate._text}%
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>
            <section className="cd-right cd">
              <FadeIn className="cd-padd">
                <div className="card">
                  <div className="cd-name">
                    시 , 도별 코로나 현황(전일 대비 ,
                    {infData[0]?.createDt._text.slice(0, 10)} 기준)
                  </div>
                  <div className="cd-right-body">
                    <div className="co-map">
                      <FadeIn className="dd">
                        <CMap siDoData={siDoData} />
                      </FadeIn>
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: "1rem" }}>
                  <a
                    href="http://ncov.mohw.go.kr/"
                    target="_blank"
                    rel="noreferrer"
                    className="right-ft-card right-cd-ft"
                    style={{ display: "block" }}
                  >
                    전국 현황판
                  </a>
                </div>
              </FadeIn>
            </section>
          </div>

          <div className="clinic-form">
            <div className="cd-padd">
              <a
                href="https://www.mohw.go.kr/react/popup_200128_3.html"
                target="_blank"
                rel="noreferrer"
                className="go-clinic card clinic-card"
              >
                내 주변 선별진료소 찾기
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  /* padding-top: 3.625rem; */
  background-color: #e9e9e9;
  .back-red {
    background-color: #ea4741;
  }
  .back-blue {
    background-color: #4bb0ca;
  }
  .back-green {
    background-color: #5bb65d;
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
  .chart-pie {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  .cd-left-ft {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  .cd-ft {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    gap: 1rem;
  }
  .cd-ft-item {
    width: 100%;
  }
  .co-map {
    display: flex;
    justify-content: center;
  }
  .ft-name {
    background-color: #cccccc;
    color: black;
    width: 20%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .ft-card {
    display: flex;
  }
  .ft-text {
    text-align: center;
  }
  .ft-con {
    width: 80%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 1px solid none;
    border-radius: 0 0.35rem 0.35rem 0;
  }
  .right-ft-card {
    background-color: #ff9200;
    border: 1px solid none;
    border-radius: 0.35rem;
  }
  .right-cd-ft {
    padding: 0.75rem;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
  }
  .clinic-form {
    width: 100%;
  }
  .clinic-card {
    display: block;
    background-color: #00897b;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
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
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  ${media.medium} {
    //768
    .cd-field {
      flex-direction: column;
    }
    .cd-left {
      width: 100%;
    }
    .cd-right {
      width: 100%;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  ${media.small} {
    //425
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  ${media.xsmall} {
    //375
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  ${media.xxsmall} {
    //320
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`;

export default React.memo(CoronaMap);
