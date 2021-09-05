import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import styled from "styled-components";
import CMap from "../components/CMap";
import { Doughnut } from "react-chartjs-2";
import Notice from "../components/Notice";
import media from "../lib/media";

const CoronaMap = ({ data }) => {
  const {
    infData,
    siDoData,
    loading,
    incExamCnt,
    incClearCnt,
    incDeathCnt,
    incDecideCnt,
  } = data;
  const [aniToggle, setAniToggle] = useState(700);
  const animationHandler = () => {
    setAniToggle(0);
    console.log("앙앙");
  };
  useEffect(() => {
    setTimeout(() => {
      animationHandler();
    }, 700);
    return () => {};
  });

  const doughnutData = {
    labels: [
      `검사중(${infData[0]?.examCnt?._text}명)`,
      `결과양성(${infData[0]?.decideCnt?._text}명)`,
      `결과음성(${infData[0]?.resutlNegCnt?._text}명)`,
    ],
    datasets: [
      // {
      //   backgroundColor: "rgba(255,99,132,1)",
      //   borderColor: "rgba(255,99,132,1)",
      //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
      //   hoverBorderColor: "rgba(255,99,132,1)",
      //   data: [65,23],
      // },
      {
        data: [
          infData[0]?.examCnt?._text,
          infData[0]?.decideCnt?._text,
          infData[0]?.resutlNegCnt?._text,
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
  return (
    <MainWrap>
      <div className="contents">
        <FadeIn>
          <Notice />
        </FadeIn>
        <div className="cd-wrap">
          <div className="cd-field">
            <section className="cd-left cd">
              <div className="cd-padd">
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
                    <div className="cd-left-ft">
                      <div className="cd-ft-top">
                        <div className=" cd-ft-top-item">
                          <div className="ft-text ft-card">
                            <div className="ft-name">총 검사수</div>
                            <div className="ft-text ft-con">
                              {infData[0]?.accExamCnt?._text === undefined
                                ? "정보 없음"
                                : infData[0]?.accExamCnt._text}
                            </div>
                          </div>
                        </div>
                        <div className=" cd-ft-top-item">
                          <div className="ft-text ft-card">
                            <div className="ft-name">검사 완료수</div>
                            <div className="ft-text ft-con">
                              {infData[0]?.accExamCompCnt?._text === undefined
                                ? "정보 없음"
                                : infData[0]?.accExamCompCnt._text}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ft-bottom">
                        <div className="ft-text ft-card">
                          <div className="ft-name">확진율</div>
                          <div className="ft-text ft-con">
                            {infData[0]?.accDefRate?._text}%
                          </div>
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
                  <div className="ft-card right-cd-ft">
                    <span style={{ cursor: "pointer" }}>전국 현황판</span>
                  </div>
                </div>
              </div>
            </section>

            <div className="clinic-form">
              <a
                href="https://www.mohw.go.kr/react/popup_200128_3.html"
                className="go-clinic card clinic-card"
              >
                내 주변 선별진료소 찾기
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  /* padding-top: 3.625rem; */
  background-color: #e9e9e9;
  .contents {
    padding-bottom: 6rem;
    padding-left: 15rem;
  }
  .cd-wrap {
    /* padding-left: 2rem;
    padding-right: 2rem; */
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
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  .cd-left-ft {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  .cd-ft-top {
    display: flex;
    padding-bottom: 0.5rem;
  }
  .cd-ft-top-item {
    width: 50%;
  }
  .co-map {
    display: flex;
    justify-content: center;
  }
  .ft-name {
    background-color: #d1c4b4;
    color: black;
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
  .right-cd-ft {
    padding: 0.75rem;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
  }
  .clinic-form {
    width: 100%;
    margin-left: 4rem;
    margin-right: 4rem;
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

export default React.memo(CoronaMap);
