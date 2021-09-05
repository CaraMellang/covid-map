import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import FadeIn from "react-fade-in/lib/FadeIn";
import Notice from "../components/Notice";
import media from "../lib/media";
import Loading from "../components/Loading/Loading";

const Home = ({ data }) => {
  // console.log(test.items.item[18]);
  // const { scrollY } = useScroll();
  const {
    infData,
    siDoData,
    loading,
    incExamCnt,
    incClearCnt,
    incDeathCnt,
    incDecideCnt,
  } = data;

  const [aniToggle, setAniToggle] = useState(1000); //조잡하지만 이거라도..
  const animationHandler = () => {
    setAniToggle(0);
  };
  useEffect(() => {
    setTimeout(() => {
      animationHandler();
    }, 1000);
    return () => {};
  });

  const barData = {
    labels: [
      "서울",
      "인천",
      "경기",
      "강원",
      "세종",
      "충북",
      "충남",
      "대전",
      "경북",
      "전북",
      "대구",
      "전남",
      "광주",
      "경남",
      "울산",
      "부산",
      "제주",
    ],
    datasets: [
      {
        label: "확진자",
        backgroundColor: "rgba(238, 173, 81,1)",
        borderColor: "rgba(238, 173, 81,1)",
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          siDoData[17]?.defCnt._text,
          siDoData[16]?.defCnt._text,
          siDoData[15]?.defCnt._text,
          siDoData[14]?.defCnt._text,
          siDoData[13]?.defCnt._text,
          siDoData[12]?.defCnt._text,
          siDoData[11]?.defCnt._text,
          siDoData[10]?.defCnt._text,
          siDoData[9]?.defCnt._text,
          siDoData[8]?.defCnt._text,
          siDoData[7]?.defCnt._text,
          siDoData[6]?.defCnt._text,
          siDoData[5]?.defCnt._text,
          siDoData[4]?.defCnt._text,
          siDoData[3]?.defCnt._text,
          siDoData[2]?.defCnt._text,
          siDoData[1]?.defCnt._text,
        ],
      },
      {
        label: "격리해제",
        backgroundColor: "rgba(91, 182, 93,1)",
        borderColor: "rgba(91, 182, 93,1)",
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          siDoData[17]?.isolClearCnt._text,
          siDoData[16]?.isolClearCnt._text,
          siDoData[15]?.isolClearCnt._text,
          siDoData[14]?.isolClearCnt._text,
          siDoData[13]?.isolClearCnt._text,
          siDoData[12]?.isolClearCnt._text,
          siDoData[11]?.isolClearCnt._text,
          siDoData[10]?.isolClearCnt._text,
          siDoData[9]?.isolClearCnt._text,
          siDoData[8]?.isolClearCnt._text,
          siDoData[7]?.isolClearCnt._text,
          siDoData[6]?.isolClearCnt._text,
          siDoData[5]?.isolClearCnt._text,
          siDoData[4]?.isolClearCnt._text,
          siDoData[3]?.isolClearCnt._text,
          siDoData[2]?.isolClearCnt._text,
          siDoData[1]?.isolClearCnt._text,
        ],
      },
      // { 그래프 여러개를 써서 반응형에 대응하자 데이터가 너무많다.
      //   label: "사망자",
      //   backgroundColor: "rgba(255,99,132,0.2)",
      //   borderColor: "rgba(255,99,132,1)",
      //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
      //   hoverBorderColor: "rgba(255,99,132,1)",
      //   data: [2, 33, 23, 12, 54, 67, 19],
      // },
    ],
  };

  const incBarData = {
    labels: [
      "서울",
      "인천",
      "경기",
      "강원",
      "세종",
      "충북",
      "충남",
      "대전",
      "경북",
      "전북",
      "대구",
      "전남",
      "광주",
      "경남",
      "울산",
      "부산",
      "제주",
    ],
    datasets: [
      {
        label: "확진자 증가",
        backgroundColor: "rgba(238, 173, 81,1)",
        borderColor: "rgba(238, 173, 81,1)",
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          siDoData[17]?.incDec._text,
          siDoData[16]?.incDec._text,
          siDoData[15]?.incDec._text,
          siDoData[14]?.incDec._text,
          siDoData[13]?.incDec._text,
          siDoData[12]?.incDec._text,
          siDoData[11]?.incDec._text,
          siDoData[10]?.incDec._text,
          siDoData[9]?.incDec._text,
          siDoData[8]?.incDec._text,
          siDoData[7]?.incDec._text,
          siDoData[6]?.incDec._text,
          siDoData[5]?.incDec._text,
          siDoData[4]?.incDec._text,
          siDoData[3]?.incDec._text,
          siDoData[2]?.incDec._text,
          siDoData[1]?.incDec._text,
        ],
      },
    ],
  };
  // if (loading) {
  //   return <span>로딩중..</span>;
  // }
  if (loading) {
    return <Loading />;
  }
  return (
    <MainWrap>
      <section className="contents">
        <FadeIn>
          <Notice />
        </FadeIn>

        <div className="cd-field">
          <section className="cd-tp">
            <FadeIn transitionDuration="600">
              <div className="cd-top">
                <div className="cd-name">
                  지역별 코로나 ({infData[0]?.createDt._text.slice(0, 10)} 기준)
                  {/*지금 코로나는 {test.items.item[0].stdDay._text} */}
                </div>
                <div className="cd-body">
                  <div className="cd-chart">
                    <Bar
                      data={barData}
                      height={100}
                      options={{
                        maintainAspectRatio: false,
                        animation: {
                          // duration: aniToggle,
                          // onComplete: animationHandler,
                        },
                      }}
                    />
                  </div>
                  <div className="cd-chart-footer">매일 오전에 갱신됩니다.</div>
                </div>
              </div>
            </FadeIn>
          </section>
          <section className="cd-bt-row">
            <FadeIn className="cd-bt" delay="500">
              <div className="cd-padd">
                <div className="cd-contents blue">
                  <div
                    className="cd-name"
                    style={{ background: "#388396", color: "white" }}
                  >
                    검사중
                  </div>
                  <div className="cd-bt-body">
                    {infData[0]?.examCnt?._text === undefined
                      ? "정보 없음"
                      : infData[0]?.examCnt._text}
                  </div>
                  <div className="cd-bt-footer">
                    <div
                      className="cd-bt-footer-inc"
                      style={{ background: "#388396" }}
                    >
                      +{incExamCnt}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn className="cd-bt" delay="600">
              <div className="cd-padd">
                <div className="cd-contents yellow">
                  <div
                    className="cd-name"
                    style={{ background: "#BB873F", color: "white" }}
                  >
                    확진자
                  </div>
                  <div className="cd-bt-body">
                    {infData[0]?.decideCnt._text === undefined
                      ? "정보 없음"
                      : infData[0]?.decideCnt._text}
                  </div>
                  <div className="cd-bt-footer">
                    <div
                      className="cd-bt-footer-inc"
                      style={{ background: "#BB873F" }}
                    >
                      +{incDecideCnt}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn className="cd-bt" delay="700">
              <div className="cd-padd">
                <div className="cd-contents green">
                  <div
                    className="cd-name"
                    style={{ background: "#418342", color: "white" }}
                  >
                    격리해제
                  </div>
                  <div className="cd-bt-body">
                    {siDoData[18]?.isolClearCnt._text === undefined
                      ? "정보없음"
                      : siDoData[18]?.isolClearCnt._text}
                  </div>
                  <div className="cd-bt-footer">
                    <div
                      className="cd-bt-footer-inc"
                      style={{ background: "#418342" }}
                    >
                      +{incClearCnt}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn className="cd-bt" delay="800">
              <div className="cd-padd">
                <div className="cd-contents red">
                  <div
                    className="cd-name "
                    style={{ background: "#B63732", color: "white" }}
                  >
                    사망자
                  </div>
                  <div className="cd-bt-body">
                    {siDoData[18]?.deathCnt._text === undefined
                      ? "정보 없음"
                      : siDoData[18]?.deathCnt._text}
                  </div>
                  <div className="cd-bt-footer">
                    <div
                      className="cd-bt-footer-inc "
                      style={{ background: "#B63732" }}
                    >
                      +{incDeathCnt}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>
          <section className="cd-tp">
            <FadeIn delay="300" visible>
              {/*나중에 scroll로 구현 <- 구현하니 그래프가 리렌더링으로 계속 춤을 춤. 무기한 연기 */}
              <div className="cd-top">
                <div className="cd-name">
                  전일 대비 코로나 ({infData[0]?.createDt._text.slice(0, 10)}{" "}
                  기준)
                  {/*지금 코로나는 {test.items.item[0].stdDay._text} */}
                </div>
                <div className="cd-body">
                  <div className="cd-chart">
                    <Bar
                      data={incBarData}
                      height={100}
                      options={{
                        maintainAspectRatio: false,
                        animation: {
                          // duration: aniToggle,
                          // onComplete: animationHandler,
                        },
                      }}
                    />
                  </div>
                  <div className="cd-chart-footer">매일 오전에 갱신됩니다.</div>
                </div>
              </div>
            </FadeIn>
          </section>
        </div>
      </section>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  /* padding-top: 3.625rem; */
  background-color: #e9e9e9;
  .red {
    background-color: #ea4741;
  }
  .yellow {
    background-color: #eead51;
  }
  .green {
    background-color: #5bb65d;
  }
  .blue {
    background-color: #4bb0ca;
  }
  .contents {
    padding-bottom: 6rem;
    padding-left: 15rem;
  }
  .cd-field {
    color: black;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .cd-top {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid none;
    border-radius: 0.35rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .cd-name {
    background-color: #468a9d;
    color: white;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 0.35rem 0.35rem 0 0;
  }
  .cd-chart {
    height: 25rem;
  }
  .cd-chart-footer {
    background-color: #f7f7f7;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 0 0 0.35rem 0.35rem;
  }
  .cd-bt-row {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    padding-bottom: 5rem;
  }
  .cd-bt {
    width: 25%;
  }
  .cd-padd {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .cd-contents {
    display: flex;
    flex-direction: column;
    border: 1px solid none;
    border-radius: 0.35rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .cd-bt-body {
    font-size: 2rem;
    text-align: center;
    color: white;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .cd-bt-footer {
    display: flex;
    justify-content: center;
    text-align: center;
    padding-bottom: 0.5rem;
  }
  .cd-bt-footer-inc {
    width: 60%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 1px solid none;
    border-radius: 0.35rem;
    color: white;
  }

  ${media.xlarge} {
    //1440
  }
  ${media.large} {
    //1024
    padding-top: 3.625rem;
    .contents {
      padding-left: 0;
    }
    .cd-bt-row {
      padding-bottom: 2rem;
    }
    .cd-bt {
      width: 50%;
    }
    .cd-bt-body {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 1rem;
    }
  }
  ${media.medium} {
    //768
    padding-top: 3.625rem;
    .contents {
      padding-bottom: 6rem;
      padding-left: 0;
    }
    .cd-bt-row {
      padding-bottom: 2rem;
    }
    .cd-bt {
      width: 50%;
    }
    .cd-bt-body {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 1rem;
    }
  }
  ${media.small} {
    //425
    padding-top: 3.625rem;
    .contents {
      padding-bottom: 6rem;
      padding-left: 0;
    }
    .cd-bt-row {
      padding-bottom: 2rem;
    }
    .cd-bt {
      width: 100%;
    }
    .cd-bt-body {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 1rem;
    }
  }
  ${media.xsmall} {
    //375
    padding-top: 3.625rem;
    .contents {
      padding-bottom: 6rem;
      padding-left: 0;
    }
    .cd-bt-row {
      padding-bottom: 2rem;
    }
    .cd-bt {
      width: 100%;
    }
    .cd-bt-body {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 1rem;
    }
  }
  ${media.xxsmall} {
    //320
    padding-top: 3.625rem;
    .contents {
      padding-bottom: 6rem;
      padding-left: 0;
    }
    .cd-bt-row {
      padding-bottom: 2rem;
    }
    .cd-bt {
      width: 100%;
    }
    .cd-bt-body {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .cd-padd {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 1rem;
    }
  }
`;
export default React.memo(Home);
