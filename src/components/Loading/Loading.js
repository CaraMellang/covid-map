import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import media from "../../lib/media";

const Loading = () => {
  return (
    <LoadingWrat>
      <Loader
        type="Oval"
        color="#D1C4B4"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
      Loading...
    </LoadingWrat>
  );
};
const LoadingWrat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 15rem;
  height: 100vh;
  ${media.large} {
    padding-left: 0;
  }
  ${media.medium} {
    padding-left: 0;
  }
  ${media.small} {
    padding-left: 0;
  }
  ${media.xsmall} {
    padding-left: 0;
  }
  ${media.xxsmall} {
    padding-left: 0;
  }
`;

export default Loading;
