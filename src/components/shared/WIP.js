import React from "react";
import styled from "styled-components/primitives";

const WIPContainer = styled.Text`
  background: #fff176;
  margin-bottom: 30px;
  padding: 10px 20px;
`;

const WIP = () => {
  return (
    <WIPContainer>
      This page is still a work-in-progress. Feel free to explore the page, but
      don't be surprised if something breaks or doesn't work :).
    </WIPContainer>
  );
};

export default WIP;
