import { default as SH, registerLanguage } from "react-syntax-highlighter/dist/light";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import bash from "highlight.js/lib/languages/bash";
import { assemble, defaultProps } from "reassemble";
import style from "react-syntax-highlighter/dist/styles/docco";

registerLanguage("javascript", js);
registerLanguage("typescript", ts);
registerLanguage("bash", bash);

const customStyle = {
  padding: "16px",
  fontSize: "13px",
};

const codeTagProps = {
  style: {
    fontFamily: "Roboto Mono",
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  },
};

export const SyntaxHighlighter = assemble(
  defaultProps({ style, language: "bash", customStyle, codeTagProps }),
)(SH);
