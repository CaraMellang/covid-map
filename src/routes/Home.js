import React, { useEffect } from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import FadeIn from "react-fade-in/lib/FadeIn";
import Notice from "../components/Notice";
import useInfec from "../hooks/useInfec";
import ReactTooltip from "react-tooltip";

const Home = ({ data }) => {
  // console.log(test.items.item[18]);
  const {
    infData,
    siDoData,
    loading,
    incExamCnt,
    incClearCnt,
    incDeathCnt,
    incDecideCnt,
  } = data;
  console.log(loading);
  console.log(incExamCnt);
  console.log(parseInt(infData[0]?.examCnt._text));

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
  // if (loading) {
  //   return <span>로딩중..</span>;
  // }
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
                    (+{incExamCnt})
                  </div>
                  <ReactTooltip offset="gdgd">앙ㄴ녕...</ReactTooltip>
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
                    총 확진자
                  </div>
                  <div className="cd-bt-body">
                    {siDoData[18]?.incDec._text === undefined
                      ? "정보 없음"
                      : siDoData[18]?.incDec._text}
                    (+{incDecideCnt})
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
                    (+{incClearCnt})
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
                    (+{incDeathCnt})
                  </div>
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
    background-color: #afd48d;
  }
  .cd-field {
    color: black;
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .cd-top {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
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
    font-size: 2.5rem;
    text-align: center;
    color: white;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  .cd-footer {
  }
`;
export default Home;
