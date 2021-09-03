import React from "react";
import styled from "styled-components";

const OverFlowDashboard = () => {
  return (
    <OverFlowDashboardWrap>
      <NoticeWrap>
        <div className="nt-field">
          <div className="nt-card">
            <b style={{ display: "block" }}>해외 현황 대시보드</b>
            <b style={{ display: "block" }}>
              Johns Hopkins CSSE(존스 홉킨스 대학교)의 전세계 코로나 현황판
              입니다.
            </b>
            {/* <ul style={{ margin: 0 }}>
            <li>반응형 적용예정.</li>
            <li>1920x에서 정상작동.</li>
          </ul> */}
          </div>
        </div>
      </NoticeWrap>
      <div>
        <div className="card-frame">
          <div className="card">
            <iframe
              title="coronadashboard"
              style={{ height: "80vh" }}
              src="https://gisanddata.maps.arcgis.com/apps/dashboards/bda7594740fd40299423467b48e9ecf6"
            ></iframe>
          </div>
        </div>
      </div>
    </OverFlowDashboardWrap>
  );
};

const OverFlowDashboardWrap = styled.div`
  padding-left: 15rem;
  background-color: #e9e9e9;
  .card-frame {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 6rem;
  }
  .card {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 80vh;
    border: 1px solid none;
    border-radius: 0.35rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
`;
const NoticeWrap = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  .nt-field {
    /* height: 10vh; */
    background-color: #f7f7f7;
    color: black;
    width: 100%;
    /* border-top: 5px solid #468a9d;
    border-bottom: 5px solid #468a9d;
    border-left: 2px solid #468a9d;
    border-right: 2px solid #468a9d; */
    border-radius: 0.35rem;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.6),
      hsla(0, 0%, 100%, 0.2)
    );
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .nt-card {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export default OverFlowDashboard;
