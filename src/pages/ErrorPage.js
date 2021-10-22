import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faRedo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  const onReloadClick = () => {
    window.location.reload();
  };
  return (
    <ErrorPageWrap className="commonwrap">
      <section className="contents">
        <div className="errorwrap">
          <div className="error">
            <span>
              <FontAwesomeIcon className="star" icon={faStar} />
              <span>에러가 발생했습니다. 다시 시도해주세요!</span>
              <FontAwesomeIcon className="star" icon={faStar} />
            </span>
          </div>
          <button className="reloadbutton" onClick={onReloadClick}>
            <FontAwesomeIcon icon={faRedo} />
            {`\u00A0`}
            새로고침
          </button>
        </div>
      </section>
    </ErrorPageWrap>
  );
};

const ErrorPageWrap = styled.div`
  background-color: #242c3e;
  width: 100%;
  .errorwrap {
    display: flex;
    flex-direction: column;
    height: 85vh;
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

export default ErrorPage;
