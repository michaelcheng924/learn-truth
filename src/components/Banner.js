import React, { Component } from "react";
import styled from "styled-components/primitives";

const BannerContainer = styled.View`
  background: #3498db;
  padding: 30px 20px;
`;

const BannerTextHighlight = styled.Text`
  color: #f1c40f;
  font-size: 24px;
`;

const BannerText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

class Banner extends Component {
  render() {
    return (
      <BannerContainer>
        <BannerText>
          <BannerTextHighlight>{`Mission: `}</BannerTextHighlight>
          To utilize technology to teach the world about the gospel of Jesus
          Christ
        </BannerText>
      </BannerContainer>
    );
  }
}

export default Banner;
