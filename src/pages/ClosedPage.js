import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faRedo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ClosedPage = () => {
  const history = useHistory();
  const onReloadClick = () => {
    history.push("/");
  };
  return (
    <ClosedPageWrap className="commonwrap">
      <section className="contents">
        <div className="errorwrap">
          <div className="error">
            <span>
              <FontAwesomeIcon className="star" icon={faStar} />
              <span>잠시 닫힌 페이지 입니다. 빠르게 복구하겠습니다!!</span>
              <FontAwesomeIcon className="star" icon={faStar} />
            </span>
          </div>
          <button className="reloadbutton" onClick={onReloadClick}>
            <FontAwesomeIcon icon={faRedo} />
            {`\u00A0`}
            홈으로
          </button>
        </div>
      </section>
    </ClosedPageWrap>
  );
};

const ClosedPageWrap = styled.div`
  background-color: #242c3e;
  width: 100%;
  .errorwrap {
    display: flex;
    flex-direction: column;
    height: 90vh;
    justify-content: center;
    align-items: center;
  }
  .error {
    display: flex;
    font-size: 20px;
  }
  .star {
    color: yellow;
  }
  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .reloadbutton {
    cursor: pointer;
    margin-top: 1rem;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    background-color: #242c3e;
  }
`;

export default ClosedPage;
