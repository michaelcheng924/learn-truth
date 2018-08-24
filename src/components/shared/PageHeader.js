import React from "react";
import styled from "styled-components/primitives";

import { View } from "react-native";
import { Width700 } from "./index";

const PageHeading = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 8px;
  margin-top: 20px;
`;

const PageSubtitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
`;

const PageHeader = ({ backgroundColor, title, subtitle }) => {
  return (
    <View style={{ backgroundColor, marginBottom: 20 }}>
      <Width700>
        <PageHeading>{title}</PageHeading>
        <PageSubtitle>{subtitle}</PageSubtitle>
      </Width700>
    </View>
  );
};

export default PageHeader;
