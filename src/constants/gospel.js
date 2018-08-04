import React from "react";
import styled from "styled-components/primitives";

import { Platform, TouchableOpacity, View } from "react-native";
import { Heading, Text } from "../components/shared";

const GospelContent = styled.View`
  margin: 0 auto;
  max-width: 740px;
  padding: 20px;
`;

const UniverseImage = styled.Image`
  ${Platform.OS === "web" ? "float: right;" : ""} height: 200px;
  ${Platform.OS === "web" ? "margin: 0 0 20px 20px" : "margin: 0 auto 20px"};
  width: 300px;
`;

const BibleImage = styled.Image`
  ${Platform.OS === "web" ? "float: left;" : ""} height: 171px;
  ${Platform.OS === "web" ? "margin: 0 20px 20px 0" : "margin: 0 auto 20px"};
  width: 300px;
`;

const EarthImage = styled.Image`
  ${Platform.OS === "web" ? "float: right;" : ""} height: 200px;
  ${Platform.OS === "web" ? "margin: 0 0 20px 20px" : "margin: 0 auto 20px"};
  width: 200px;
`;

const BloodImage = styled.Image`
  ${Platform.OS === "web" ? "float: right;" : ""} height: 139px;
  ${Platform.OS === "web" ? "margin: 0 0 20px 20px" : "margin: 0 auto 20px"};
  width: 300px;
`;

const FireImage = styled.Image`
  ${Platform.OS === "web" ? "float: left;" : ""} height: 225px;
  ${Platform.OS === "web" ? "margin: 0 20px 20px 0" : "margin: 0 auto 20px"};
  width: 300px;
`;

const CrossImage = styled.Image`
  ${Platform.OS === "web" ? "float: left;" : ""} height: 200px;
  ${Platform.OS === "web" ? "margin: 0 20px 20px 0" : "margin: 0 auto 20px"};
  width: 300px;
`;

const HeavenImage = styled.Image`
  ${Platform.OS === "web" ? "float: right;" : ""} height: 157px;
  ${Platform.OS === "web" ? "margin: 0 0 20px 20px" : "margin: 0 auto 20px"};
  width: 300px;
`;

const GrowImage = styled.Image`
  ${Platform.OS === "web" ? "float: left;" : ""} height: 157px;
  ${Platform.OS === "web" ? "margin: 0 20px 20px 0" : "margin: 0 auto 20px"};
  width: 300px;
`;

const ChurchImage = styled.Image`
  ${Platform.OS === "web" ? "float: right;" : ""} height: 169px;
  ${Platform.OS === "web" ? "margin: 0 0 20px 20px" : "margin: 0 auto 20px"};
  width: 300px;
`;

const GospelQuote = styled.Text`
  color: #795548;
  font-size: 18px;
  font-style: italic;
  line-height: 28;
  margin-bottom: 21px;
`;

const ResourcesContainer = styled.View`
  align-items: center;
  border-color: #689f38;
  border-radius: 5px;
  border-width: 1px;
  display: flex;
  flex-direction: row;
  margin-bottom: 21px;
  padding: 10px 20px;
  width: 165px;
`;

const ResourceImage = styled.Image`
  height: 20px;
  margin-right: 15px;
  width: 20px;
`;

const ResourceText = styled.Text`
  color: #689f38;
  font-size: 18px;
  line-height: 28;
`;

const B = styled.Text`
  font-size: 18px;
  font-weight: bold;
  line-height: 28;
`;

const ImageContainer = Platform.OS === "web" ? Text : View;

export const Intro = ({ renderNextButton }) => (
  <GospelContent>
    <Heading>1. Introduction</Heading>
    <Text>
      Does your life have purpose and meaning? Or are you simply a product of
      random chemical processes, a miniscule and insignificant speck in a
      naturalistic, uncaring universe?
    </Text>
    <ImageContainer>
      <UniverseImage source={require("../images/universe.png")} />
      <Text>
        The truth is that your life does indeed have purpose and meaning. God
        created the universe and humans, and He has revealed exactly why He
        created us.
        {Platform.OS === "web"
          ? `
          
`
          : ""}
      </Text>
      <Text>
        At the heart of why God created humans is the gospel, or the good news,
        of Jesus Christ. The gospel is the most important truth in the universe
        for every human to learn.
      </Text>
    </ImageContainer>
    <Text>
      Here, we will summarize the gospel, and then provide you with resources
      for how to continue your lifelong journey of learning more and more about
      the glorious gospel of Jesus Christ.
    </Text>
    <Text>
      To begin, let's first learn about the Bible, which is where we learn about
      the gospel.
    </Text>
    {renderNextButton("#795548", "Bible")}
  </GospelContent>
);

export const Bible = ({ renderNextButton }) => (
  <GospelContent>
    <Heading>2. Bible</Heading>
    <Text>
      The Bible is how God has chosen to reveal Himself and His plans to humans.
      Throughout history, God chose to use ordinary humans to record His
      revelation in writings that would become the Bible that we have today. And
      today, these writings, preserved in the Bible, are the sole source of our
      knowledge of God and truth.
    </Text>
    <ImageContainer>
      <BibleImage source={require("../images/bible.png")} />
      <GospelQuote>
        "All Scripture is breathed out by God and profitable for teaching, for
        reproof, for correction, and for training in righteousness, that the man
        of God may be <B>complete, equipped for every good work</B>." (2 Timothy
        3:16-17)
        {Platform.OS === "web"
          ? `

`
          : ""}
      </GospelQuote>
      <Text>
        The Bible is all we need to be "complete, equipped for every good work."
        We do not need anything else besides the Bible. Neither the additional
        teachings of the Roman Catholic Church, nor any direct revelation or
        voice from God, is necessary to be saved or to please God with the life
        we live.
      </Text>
    </ImageContainer>
    <Text>
      A common term used to describe the teaching that the Bible <B>alone</B> is
      sufficient for salvation and godliness is <B>Sola Scriptura</B>.
    </Text>
    <Text>Next, we will learn what the Bible teaches us about God.</Text>
    {renderNextButton("#673AB7", "God")}
  </GospelContent>
);

export const God = ({ renderNextButton }) => (
  <GospelContent>
    <Heading>3. God</Heading>
    <Text>
      What has God revealed about Himself through the Bible? First, God is the{" "}
      <B>creator</B>. He created the universe, humans, and everything else in
      the universe.{" "}
    </Text>
    <GospelQuote>
      "In the beginning, God created the heavens and the earth." (Genesis 1:1)
    </GospelQuote>
    <ImageContainer>
      <EarthImage source={require("../images/earth.png")} />
      <Text>
        That God is creator means that He has <B>authority</B> over everything
        in the universe. He created the universe for a specific purpose, namely,{" "}
        <B>for His glory</B>.
        {Platform.OS === "web"
          ? `

`
          : ""}
      </Text>
      <Text>
        Second, God is <B>holy</B>, which means that He is{" "}
        <B>set apart in His perfect righteousness</B>.
        {Platform.OS === "web"
          ? `

`
          : ""}
      </Text>
      <GospelQuote>
        "There is none holy like the Lord: for there is none besides you." (1
        Samuel 2:2a)
      </GospelQuote>
    </ImageContainer>
    <Text>
      That God is holy and perfectly righteous means that He{" "}
      <B>hates evil and sin and will certainly punish it</B>. This is bad news
      for us because every human being has sinned against God by not perfectly
      obeying His commands.
    </Text>
    <Text>
      Next, we will learn about sin, which is the problem of every human.
    </Text>
    {renderNextButton("#F44336", "Sin")}
  </GospelContent>
);

export const Sin = ({ renderNextButton }) => (
  <GospelContent>
    <Heading>4. Sin</Heading>
    <Text>Every human being is guilty of sin before God in two ways:</Text>
    <Text>
      First, when Adam sinned in the garden of Eden, he sinned as the{" "}
      <B>representative head</B> of the human race, and because of his sin,
      every human being after him is therefore also guilty of his sin, which is
      often called <B>original sin</B>.
    </Text>
    <GospelQuote>
      "Therefore, just as sin came into the world through one man, and death
      through sin, and so death spread to all men because all sinned." (Romans
      5:12)
    </GospelQuote>
    <ImageContainer>
      <BloodImage source={require("../images/blood.png")} />
      <Text>
        Although every human is guilty of sin simply "through one man" (Adam),
        every human is also guilty of <B>personal sin</B>.
        {Platform.OS === "web"
          ? `

`
          : ""}
      </Text>
      <GospelQuote>
        "None is righteous, no, not one; no one understands; no one seeks for
        God. All have turned aside; together they have become worthless; no one
        does good, not even one." (Romans 3:10-12)
      </GospelQuote>
    </ImageContainer>
    <GospelQuote>
      "But as for the cowardly, the faithless, the detestable, as for murderers,
      the sexually immoral, sorcerers, idolaters, and all liars, their portion
      will be in the lake that burns with fire and sulfur, which is the second
      death." (Revelation 21:8)
    </GospelQuote>
    <Text>
      No human being is completely innocent of the list above. All people have
      been cowardly, faithless, sexually immoral, idolatrous, and/or dishonest
      at some point in their lives.
    </Text>
    <Text>
      The punishment for our sin against God is <B>eternal torment in hell</B>.
      Suffering in hell is infinite because an offense against an infinitely
      holy God is <B>infinitely serious</B>.
    </Text>
    <ImageContainer>
      <FireImage source={require("../images/fire.png")} />
      <GospelQuote>
        "And the smoke of their torment goes up forever and ever, and they have
        no rest, day or night, these worshipers of the beast and its image, and
        whoever receives the mark of its name." (Revelation 14:11)
        {Platform.OS === "web"
          ? `

`
          : ""}
      </GospelQuote>
      <Text>
        Sin is a serious problem, and we seem to be in a hopeless situation,
        because we have absolutely no ability to escape from our sin. But
        thankfully, there is a solution to sin, Jesus, whom we will learn about
        next.
      </Text>
    </ImageContainer>
    {renderNextButton("#1976D2", "Jesus")}
  </GospelContent>
);

export const Jesus = ({ renderNextButton }) => (
  <GospelContent>
    <Heading>5. Jesus</Heading>
    <Text>
      Jesus is both <B>fully God</B> and <B>fully human</B>. In the verses
      below, Jesus is "the Word."
    </Text>
    <GospelQuote>
      "In the beginning was the Word, and the Word was with God, and{" "}
      <B>the Word was God</B>." (John 1:1)
    </GospelQuote>
    <GospelQuote>
      "And <B>the Word became flesh</B> and dwelt among us..." (John 1:14a)
    </GospelQuote>
    <ImageContainer>
      <CrossImage source={require("../images/cross.png")} />
      <Text>
        Jesus accomplished two primary things during his life to save sinners.
        First, on the cross, he became a <B>substitute sacrifice</B> for the
        sins of all who would believe in him. In other words, he paid the
        punishment for sin in their place so that they no longer need to pay it
        themselves in hell. This concept of Jesus "satisfying" God's justice and
        wrath is called <B>propitiation</B> in the Bible.
      </Text>
    </ImageContainer>
    <GospelQuote>
      "In this is love, not that we have loved God but that he loved us and sent
      his Son to be the <B>propitiation for our sins</B>." (1 John 4:10)
    </GospelQuote>
    <Text>
      Second, Jesus lived a perfectly righteous life, and through faith, his
      perfect righteousness is <B>imputed</B>, or credited, to us, so that God
      now sees us as also being perfectly righteous. So, Jesus not only rescues
      us from our sin, but he also gives us a positive righteousness that
      enables us to have favor with God.
    </Text>
    <GospelQuote>
      "And to the one who does not work but believes in him who justifies the
      ungodly, his <B>faith is counted as righteousness</B>." (Romans 4:5)
    </GospelQuote>
    <Text>
      It is important to recognize that it is <B>Jesus' work alone</B> that
      saves us, and not Jesus' work <B>plus</B> our works. We do not contribute
      anything to our salvation, which means that God gets all the glory for our
      salvation.
    </Text>
    <Text>
      Next, we will cover the role of <B>repentance</B> and <B>faith</B> in
      salvation.
    </Text>
    {renderNextButton("#43A047", "Salvation")}
  </GospelContent>
);

export const Salvation = ({ renderNextButton }) => (
  <GospelContent>
    <Heading>6. Salvation</Heading>
    <Text>
      Jesus taught that to be saved, we must <B>repent</B> and <B>believe</B>{" "}
      the gospel.
    </Text>
    <GospelQuote>
      "The time is fulfilled, and the kingdom of God is at hand; <B>repent</B>{" "}
      and <B>believe</B> in the gospel." (Mark 1:15)
    </GospelQuote>
    <Text>
      To <B>repent</B> means to feel sorrow for and hatred toward your sin and
      to actively turn away from your sin and toward obedience to God.
    </Text>
    <GospelQuote>
      "For godly grief produces a repentance that leads to salvation..." (2
      Corinthians 7:10)
    </GospelQuote>
    <Text>
      To <B>believe</B>, or to have <B>faith</B>, means to trust in Jesus' work{" "}
      <B>alone</B> for your salvation, and not in <B>any</B> of your own good
      works.
    </Text>
    <GospelQuote>
      "For by grace you have been saved through faith. And this is not your own
      doing; it is the gift of God not a result of works, so that no one may
      boast." (Ephesians 2:8-9)
    </GospelQuote>
    <Text>
      Although repentance and faith are actions we must take to be saved, it is
      God who gives us the ability to repent and have faith. God takes the
      initiative in giving us new life so that we can take these actions to be
      saved.
    </Text>
    <GospelQuote>
      Jesus answered him, "Truly, truly, I say to you, unless one is born again
      he cannot see the kingdom of God."'(John 3:3)
    </GospelQuote>
    <ImageContainer>
      <HeavenImage source={require("../images/heaven.png")} />
      <Text>
        If you find that you have a desire to turn from your sin towards
        obedience to God, and you realize that you can only be saved by
        believing, or trusting, in Jesus' saving work, then you are experiencing
        the results of being "born again," or saved, by God. This is incredibly
        exciting!
      </Text>
    </ImageContainer>
    <Text>
      Next, we will talk about the next steps to take in your lifelong journey
      to learn more about the God of the Bible.
    </Text>
    {renderNextButton("#009688", "Next Steps")}
  </GospelContent>
);

export const NextSteps = ({ navigateToResources, navigateToChurchFinder }) => (
  <GospelContent>
    <Heading>7. Next Steps</Heading>
    <Text>
      The most important thing to do as one who believes in Jesus is to{" "}
      <B>continue learning about and obeying the Bible</B>. Being a Christian is
      a lifelong journey and not merely a one-time decision or prayer.
    </Text>
    <ImageContainer>
      <GrowImage source={require("../images/grow.png")} />
      <GospelQuote>
        "And this is eternal life, that they know you, the only true God, and
        Jesus Christ whom you have sent." (John 17:3)
        {Platform.OS === "web"
          ? `

`
          : ""}
      </GospelQuote>
      <Text>
        Eternal life, or heaven, is about "knowing" God, which means that there
        is no end to this endeavor. Visit the "Resources" page below for a list
        of great resources to continue learning about God through the Bible.
      </Text>
    </ImageContainer>
    <TouchableOpacity onPress={navigateToResources}>
      <ResourcesContainer>
        <ResourceImage source={require("../images/icon-list-green.png")} />
        <ResourceText>Resources</ResourceText>
      </ResourcesContainer>
    </TouchableOpacity>
    <ImageContainer>
      <ChurchImage source={require("../images/church.png")} />
      <Text>
        In addition to continuing to learn about the Bible, you should find a
        solid church where you can fellowship and share life with other
        believers. The Bible is clear that we should be regularly meeting with
        other believers:
        {Platform.OS === "web"
          ? `

`
          : ""}
      </Text>
      <GospelQuote>
        "And let us consider how to stir up one another to love and good works,
        not neglecting to meet together, as is the habit of some, but
        encouraging one another, and all the more as you see the Day drawing
        near." (Hebrews 10:24-25)
      </GospelQuote>
    </ImageContainer>
    <Text>
      Visit the Church Finder page for a list of church finders/directories that
      you can use to find a solid church:
    </Text>
    <TouchableOpacity onPress={navigateToChurchFinder}>
      <ResourcesContainer style={{ width: 210 }}>
        <ResourceImage source={require("../images/icon-list-green.png")} />
        <ResourceText>Church Finders</ResourceText>
      </ResourcesContainer>
    </TouchableOpacity>
  </GospelContent>
);
