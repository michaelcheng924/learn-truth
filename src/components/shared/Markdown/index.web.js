import React from "react";
import Markdown from "react-universal-markdown/dom";

const renderMarkdown = content => {
  return <Markdown className="markdown">{content}</Markdown>;
};

export default renderMarkdown;
