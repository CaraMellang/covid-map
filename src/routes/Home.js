import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = ({ test }) => {
  console.log(test.items.item[0]);
  return (
    <MainWrap>
      <section className="contents">
        여긴 컨텐츠
        <div className="card-field">
          <div className="card">
            <div className="card-name">
              지금 코로나는{test.items.item[0].stdDay._text}
            </div>
            <div className="card-body">
              <div className="card-chart"></div>
              <div className="뭐넣지"></div>
            </div>
          </div>
        </div>
      </section>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  padding-top: 3.625rem;
  .contents {
    padding-left: 15rem;
    background-color: beige;
    height: 93.6vh;
  }
  .card-field {
    color: black;
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .card {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .card-name {
    background-color: #f7f7f7;
  }
  .card-chart {
    height: 25rem;
  }
`;

export default Home;
