import React, { Component } from "react";
import styled from "styled-components/primitives";

import {
  Heading,
  PageHeading,
  PageHeadingDivider,
  PageSubtitle,
  Paragraph,
  Txt,
  Width700
} from "./shared";

class About extends Component {
  render() {
    return (
      <Width700>
        <PageHeading>About</PageHeading>
        <PageSubtitle>
          About learnTRUTH and how to be a part of its work
        </PageSubtitle>
        <PageHeadingDivider />
        <Heading style={{ marginTop: 8 }}>
          Who is working on learnTRUTH?
        </Heading>
        <Paragraph style={{ marginTop: 8 }}>
          <Txt>
            learnTRUTH is currently being built and maintained by a software
            engineer who desires to use his programming skills for God's glory.
          </Txt>
        </Paragraph>
        <Heading>What is the mission of learnTRUTH?</Heading>
        <Paragraph style={{ marginTop: 8 }}>
          <Txt>
            The mission of learnTRUTH is to utilize technology to teach the
            gospel of Jesus Christ, specifically from a Reformed theological
            perspective.
          </Txt>
        </Paragraph>
        {/* <Text>
          Facebook ads are being used to share the gospel summary page of this
          app with hundreds of people every day.
        </Text>
        <Heading>Contributing</Heading>
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
      </Width700>
    );
  }
}

export default About;
