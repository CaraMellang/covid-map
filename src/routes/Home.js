import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import FadeIn from "react-fade-in/lib/FadeIn";
import Notice from "../components/Notice";

const Home = ({ test }) => {
  // console.log(test.items.item[18]);
  return (
    <MainWrap>
      <section className="contents">
        <Notice />
        <div
          className="home-head"
          style={{ marginBottom: "4rem", backgroundColor: "green" }}
        >
          <div>
            <h1 style={{ marginTop: "0" }}>ㅎㅇ</h1>
          </div>
          <div>더미</div>
        </div>
        <div className="cd-field">
          <section className="cd-tp">
            <FadeIn transitionDuration="600">
              <div className="cd-top">
                <div className="cd-name">
                  일간 지역별 코로나 (2021.00.00 기준)
                  {/*지금 코로나는 {test.items.item[0].stdDay._text} */}
                </div>
                <div className="cd-body">
                  <div className="cd-chart">
                    <Bar
                      data={data}
                      height={100}
                      options={{
                        maintainAspectRatio: false,
                      }}
                    />
                  </div>
                  <div className="cd-chart-footer">아아아</div>
                </div>
              </div>
            </FadeIn>
          </section>
          <section className="cd-bt-row">
            <FadeIn className="cd-bt" delay="500">
              <div className="cd-padd">
                <div className="cd-contents blue">
                  <div className="cd-name">검사중</div>
                  <div className="cd-bt-body">1234명(+2354)</div>
                  <div className="cd-footer">
                    <div>버튼</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn className="cd-bt" delay="600">
              <div className="cd-padd">
                <div className="cd-contents yellow">
                  <div className="cd-name">확진자</div>
                  <div className="cd-bt-body">
                    {test?.items.item[18].defCnt._text === undefined
                      ? "오류"
                      : test.items.item[18].defCnt._text}
                    명(+
                    {test?.items.item[18].incDec._text === undefined
                      ? "오류"
                      : test.items.item[18].incDec._text}
                    )
                  </div>
                  <div className="cd-footer">
                    <div>버튼</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn className="cd-bt" delay="700">
              <div className="cd-padd">
                <div className="cd-contents green">
                  <div className="cd-name">격리해제</div>
                  <div className="cd-bt-body">1234명(+2354)</div>
                  <div className="cd-footer">
                    <div>버튼</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn className="cd-bt" delay="800">
              <div className="cd-padd">
                <div className="cd-contents red">
                  <div className="cd-name ">사망자</div>
                  <div className="cd-bt-body">
                    {test?.items.item[18].deathCnt._text === undefined
                      ? "오류"
                      : test.items.item[18].deathCnt._text}
                    명(+2354)
                  </div>
                  <div className="cd-footer">
                    <div>버튼</div>
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
  padding-top: 3.625rem;
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
    height: 15rem;
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
const data = {
  labels: ["서울", "인천", "앙", "기", "모", "띠", "님"],
  datasets: [
    {
      label: "확진자",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "병실환자",
      backgroundColor: "rgba(255,99,132,1)",
      borderColor: "rgba(255,99,132,1)",
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [23, 15, 56, 77, 98, 23, 111],
    },
    {
      label: "사망자",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [2, 33, 23, 12, 54, 67, 19],
    },
  ],
};
export default Home;
