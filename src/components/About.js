import React, { Component } from "react";

import { View } from "react-native";
import { Heading, PageHeader, Txt, Width700 } from "./shared";

class About extends Component {
  render() {
    return (
      <View>
        <PageHeader
          backgroundColor="#607D8B"
          title="About"
          subtitle="About learnTRUTH and how to be a part of its work"
        />
        <Width700>
          <Heading first>Who is working on learnTRUTH?</Heading>
          <Txt first>
            learnTRUTH is currently being built and maintained by a software
            engineer who desires to use his programming skills for God's glory.
          </Txt>
          <Heading>What is the mission of learnTRUTH?</Heading>
          <Txt first>
            The mission of learnTRUTH is to utilize technology to teach the
            gospel of Jesus Christ, specifically from a Reformed theological
            perspective.
          </Txt>
        </Width700>
      </View>
    );
  }
}

export default About;
