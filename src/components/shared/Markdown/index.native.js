import React from "react";
import Markdown from "react-universal-markdown/native";

const renderMarkdown = content => {
  return (
    <Markdown
      styles={{
        Text: { color: "#000", fontSize: 18, lineHeight: 28, opacity: 0.84 },
        Paragraph: {
          marginBottom: 0,
          marginTop: 0
        },
        BlockQuote: {
          borderLeftWidth: 0,
          marginLeft: 20,
          marginTop: 0,
          paddingTop: 0,
          paddingBottom: 0
        }
      }}
    >
      {content}
    </Markdown>
  );
};

export default renderMarkdown;
