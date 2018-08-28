import React from "react";
import styled from "styled-components/primitives";

import { TouchableOpacity } from "react-native";
import { B, Heading, Img, Quote, Txt, Width700 } from "../components/shared";

const ResourcesContainer = styled.View`
  align-items: center;
  border-color: #689f38;
  border-radius: 5px;
  border-width: 1px;
  display: flex;
  flex-direction: row;
  margin-top: 25px;
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

export const Intro = ({ renderNextButton }) => (
  <Width700 spaceBottom>
    <Heading first>1. Introduction</Heading>
    <Txt first>
      Does your life have purpose and meaning? Or are you simply a product of
      random chemical processes, a miniscule and insignificant speck in a
      naturalistic, uncaring universe?
    </Txt>
    <Img source={require("../images/universe.png")} height="169" width="300" />
    <Txt>
      The truth is that your life does indeed have purpose and meaning. God
      created the universe and humans, and He has revealed exactly why He
      created us.
    </Txt>
    <Txt>
      At the heart of why God created humans is the gospel, or the good news, of
      Jesus Christ. The gospel is the most important truth in the universe for
      every human to learn.
    </Txt>
    <Txt>
      Here, we will summarize the gospel, and then provide you with resources
      for how to continue your lifelong journey of learning more and more about
      the glorious gospel of Jesus Christ.
    </Txt>
    <Txt>
      To begin, let's first learn about the Bible, which is where we learn about
      the gospel.
    </Txt>
    {renderNextButton("#795548", "Bible")}
  </Width700>
);

export const Bible = ({ renderNextButton }) => (
  <Width700 spaceBottom>
    <Heading first>2. Bible</Heading>
    <Txt first>
      The Bible is how God has chosen to reveal Himself and His plans to humans.
      Throughout history, God chose to use ordinary humans to record His
      revelation in writings that would become the Bible that we have today. And
      today, these writings, preserved in the Bible, are the sole source of our
      knowledge of God and truth.
    </Txt>
    <Img source={require("../images/bible.png")} height="171" width="300" />
    <Quote>
      "All Scripture is breathed out by God and profitable for teaching, for
      reproof, for correction, and for training in righteousness, that the man
      of God may be <B>complete, equipped for every good work</B>
      ." (2 Timothy 3:16-17)
    </Quote>
    <Txt>
      The Bible is all we need to be "complete, equipped for every good work."
      We do not need anything else besides the Bible. Neither the additional
      teachings of the Roman Catholic Church, nor any direct revelation or voice
      from God, is necessary to be saved or to please God with the life we live.
    </Txt>
    <Txt>
      A common term used to describe the teaching that the Bible <B>alone</B> is
      sufficient for salvation and godliness is <B>Sola Scriptura</B>.
    </Txt>
    <Txt>Next, we will learn what the Bible teaches us about God.</Txt>
    {renderNextButton("#673AB7", "God")}
  </Width700>
);

export const God = ({ renderNextButton }) => (
  <Width700 spaceBottom>
    <Heading first>3. God</Heading>
    <Txt first>
      What has God revealed about Himself through the Bible? First, God is the{" "}
      <B>creator</B>. He created the universe, humans, and everything else in
      the universe.{" "}
    </Txt>
    <Quote>
      "In the beginning, God created the heavens and the earth." (Genesis 1:1)
    </Quote>
    <Img source={require("../images/earth.png")} height={200} width={200} />
    <Txt>
      That God is creator means that He has <B>authority</B> over everything in
      the universe. He created the universe for a specific purpose, namely,{" "}
      <B>for His glory</B>.
    </Txt>
    <Txt>
      Second, God is <B>holy</B>, which means that He is{" "}
      <B>set apart in His perfect righteousness</B>.
    </Txt>
    <Quote>
      "There is none holy like the Lord: for there is none besides you." (1
      Samuel 2:2a)
    </Quote>
    <Txt>
      That God is holy and perfectly righteous means that He{" "}
      <B>hates evil and sin and will certainly punish it</B>. This is bad news
      for us because every human being has sinned against God by not perfectly
      obeying His commands.
    </Txt>
    <Txt>
      Next, we will learn about sin, which is the problem of every human.
    </Txt>
    {renderNextButton("#F44336", "Sin")}
  </Width700>
);

export const Sin = ({ renderNextButton }) => (
  <Width700 spaceBottom>
    <Heading first>4. Sin</Heading>
    <Txt first>Every human being is guilty of sin before God in two ways:</Txt>
    <Txt>
      First, when Adam sinned in the garden of Eden, he sinned as the{" "}
      <B>representative head</B> of the human race, and because of his sin,
      every human being after him is therefore also guilty of his sin, which is
      often called <B>original sin</B>.
    </Txt>
    <Quote>
      "Therefore, just as sin came into the world through one man, and death
      through sin, and so death spread to all men because all sinned." (Romans
      5:12)
    </Quote>
    <Img source={require("../images/blood.png")} height={195} width={300} />
    <Txt>
      Although every human is guilty of sin simply "through one man" (Adam),
      every human is also guilty of <B>personal sin</B>.
    </Txt>
    <Quote>
      "None is righteous, no, not one; no one understands; no one seeks for God.
      All have turned aside; together they have become worthless; no one does
      good, not even one." (Romans 3:10-12)
    </Quote>
    <Quote>
      "But as for the cowardly, the faithless, the detestable, as for murderers,
      the sexually immoral, sorcerers, idolaters, and all liars, their portion
      will be in the lake that burns with fire and sulfur, which is the second
      death." (Revelation 21:8)
    </Quote>
    <Txt>
      No human being is completely innocent of the list above. All people have
      been cowardly, faithless, sexually immoral, idolatrous, and/or dishonest
      at some point in their lives.
    </Txt>
    <Txt>
      The punishment for our sin against God is <B>eternal torment in hell</B>.
      Suffering in hell is infinite because an offense against an infinitely
      holy God is <B>infinitely serious</B>.
    </Txt>
    <Img source={require("../images/fire.png")} height={225} width={300} />
    <Quote>
      "And the smoke of their torment goes up forever and ever, and they have no
      rest, day or night, these worshipers of the beast and its image, and
      whoever receives the mark of its name." (Revelation 14:11)
    </Quote>
    <Txt>
      Sin is a serious problem, and we seem to be in a hopeless situation,
      because we have absolutely no ability to escape from our sin. But
      thankfully, there is a solution to sin, Jesus, whom we will learn about
      next.
    </Txt>
    {renderNextButton("#1976D2", "Jesus")}
  </Width700>
);

export const Jesus = ({ renderNextButton }) => (
  <Width700 spaceBottom>
    <Heading first>5. Jesus</Heading>
    <Txt first>
      Jesus is both <B>fully God</B> and <B>fully human</B>. In the verses
      below, Jesus is "the Word."
    </Txt>
    <Quote>
      "In the beginning was the Word, and the Word was with God, and{" "}
      <B>the Word was God</B>
      ." (John 1:1)
    </Quote>
    <Quote>
      "And <B>the Word became flesh</B> and dwelt among us..." (John 1:14a)
    </Quote>
    <Img source={require("../images/cross.png")} height={200} width={300} />
    <Txt>
      Jesus accomplished two primary things during his life to save sinners.
      First, on the cross, he became a <B>substitute sacrifice</B> for the sins
      of all who would believe in him. In other words, he paid the punishment
      for sin in their place so that they no longer need to pay it themselves in
      hell. This concept of Jesus "satisfying" God's justice and wrath is called{" "}
      <B>propitiation</B> in the Bible.
    </Txt>
    <Quote>
      "In this is love, not that we have loved God but that he loved us and sent
      his Son to be the <B>propitiation for our sins</B>
      ." (1 John 4:10)
    </Quote>
    <Txt>
      Second, Jesus lived a perfectly righteous life, and through faith, his
      perfect righteousness is <B>imputed</B>, or credited, to us, so that God
      now sees us as also being perfectly righteous. So, Jesus not only rescues
      us from our sin, but he also gives us a positive righteousness that
      enables us to have favor with God.
    </Txt>
    <Quote>
      "And to the one who does not work but believes in him who justifies the
      ungodly, his <B>faith is counted as righteousness</B>
      ." (Romans 4:5)
    </Quote>
    <Txt>
      It is important to recognize that it is <B>Jesus' work alone</B> that
      saves us, and not Jesus' work <B>plus</B> our works. We do not contribute
      anything to our salvation, which means that God gets all the glory for our
      salvation.
    </Txt>
    <Txt>
      Next, we will cover the role of <B>repentance</B> and <B>faith</B> in
      salvation.
    </Txt>
    {renderNextButton("#43A047", "Salvation")}
  </Width700>
);

export const Salvation = ({ renderNextButton }) => (
  <Width700 spaceBottom>
    <Heading first>6. Salvation</Heading>
    <Txt first>
      Jesus taught that to be saved, we must <B>repent</B> and <B>believe</B>{" "}
      the gospel.
    </Txt>
    <Quote>
      "The time is fulfilled, and the kingdom of God is at hand; <B>repent</B>{" "}
      and <B>believe</B> in the gospel." (Mark 1:15)
    </Quote>
    <Txt>
      To <B>repent</B> means to feel sorrow for and hatred toward your sin and
      to actively turn away from your sin and toward obedience to God.
    </Txt>
    <Quote>
      "For godly grief produces a repentance that leads to salvation..." (2
      Corinthians 7:10)
    </Quote>
    <Txt>
      To <B>believe</B>, or to have <B>faith</B>, means to trust in Jesus' work{" "}
      <B>alone</B> for your salvation, and not in <B>any</B> of your own good
      works.
    </Txt>
    <Quote>
      "For by grace you have been saved through faith. And this is not your own
      doing; it is the gift of God not a result of works, so that no one may
      boast." (Ephesians 2:8-9)
    </Quote>
    <Txt>
      Although repentance and faith are actions we must take to be saved, it is
      God who gives us the ability to repent and have faith. God takes the
      initiative in giving us new life so that we can take these actions to be
      saved.
    </Txt>
    <Quote>
      Jesus answered him, "Truly, truly, I say to you, unless one is born again
      he cannot see the kingdom of God."'(John 3:3)
    </Quote>
    <Img source={require("../images/heaven.png")} height={157} width={300} />
    <Txt>
      If you find that you have a desire to turn from your sin towards obedience
      to God, and you realize that you can only be saved by believing, or
      trusting, in Jesus' saving work, then you are experiencing the results of
      being "born again," or saved, by God. This is incredibly exciting!
    </Txt>
    <Txt>
      Next, we will talk about the next steps to take in your lifelong journey
      to learn more about the God of the Bible.
    </Txt>
    {renderNextButton("#009688", "Next Steps")}
  </Width700>
);

export const NextSteps = ({ navigateToResources, navigateToChurchFinder }) => (
  <Width700 spaceBottom>
    <Heading first>7. Next Steps</Heading>
    <Txt first>
      The most important thing to do as one who believes in Jesus is to{" "}
      <B>continue learning about and obeying the Bible</B>. Being a Christian is
      a lifelong journey and not merely a one-time decision or prayer.
    </Txt>
    <Img source={require("../images/grow.png")} height={157} width={300} />
    <Quote>
      "And this is eternal life, that they know you, the only true God, and
      Jesus Christ whom you have sent." (John 17:3)
    </Quote>
    <Txt>
      Eternal life, or heaven, is about "knowing" God, which means that there is
      no end to this endeavor. Visit the "Resources" page below for a list of
      great resources to continue learning about God through the Bible.
    </Txt>
    <TouchableOpacity onPress={navigateToResources}>
      <ResourcesContainer>
        <ResourceImage source={require("../images/icon-list-green.png")} />
        <ResourceText>Resources</ResourceText>
      </ResourcesContainer>
    </TouchableOpacity>
    <Img source={require("../images/church.png")} height={169} width={300} />
    <Txt>
      In addition to continuing to learn about the Bible, you should find a
      solid church where you can fellowship and share life with other believers.
      The Bible is clear that we should be regularly meeting with other
      believers:
    </Txt>
    <Quote>
      "And let us consider how to stir up one another to love and good works,
      not neglecting to meet together, as is the habit of some, but encouraging
      one another, and all the more as you see the Day drawing near." (Hebrews
      10:24-25)
    </Quote>
    <Txt>
      Visit the Church Finder page for a list of church finders/directories that
      you can use to find a solid church:
    </Txt>
    <TouchableOpacity onPress={navigateToChurchFinder}>
      <ResourcesContainer style={{ width: 210 }}>
        <ResourceImage source={require("../images/icon-list-green.png")} />
        <ResourceText>Church Finders</ResourceText>
      </ResourcesContainer>
    </TouchableOpacity>
  </Width700>
);
