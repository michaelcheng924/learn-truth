import React, { Component } from "react";
import styled from "styled-components/primitives";

import { Heading, PageHeading, Text } from "./shared";

const AboutContainer = styled.View`
  padding: 0 20px 20px;
`;

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <PageHeading style={{ marginBottom: 20 }}>About</PageHeading>
        <Heading>learnTRUTH</Heading>
        <Text>
          learnTRUTH is currently built and maintained by a software engineer
          who desires to use his programming skills for God's glory.
        </Text>
        <Text>
          Facebook ads are being used to share the gospel summary page of this
          app with hundreds of people every day.
        </Text>
        {/* <Heading>Contributing</Heading>
        <Text>
          If you would like to contribute to this project, here is how you can
          do so:
        </Text>
        <OL
          list={[
            {
              number: 1,
              text:
                "Help share the gospel with even more people by contributing to the Facebook ads campaign: "
            },
            {
              number: 2,
              text:
                "If you are or know a software engineer who may be interested in contributing code to this project, please contact Michael Cheng at cheng.c.michael@gmail.com."
            }
          ]}
        /> */}
      </AboutContainer>
    );
  }
}

export default About;
