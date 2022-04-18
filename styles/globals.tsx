import styled, { createGlobalStyle } from "styled-components";
interface FlexProps {
  items?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  direction?: React.CSSProperties["flexDirection"];
}
export const Flex = styled.div<FlexProps>`
  display: flex;
  width: 100%;
  align-content: ${(p) => p.items ?? "flex-start"};
  justify-content: ${(p) => p.justify ?? "flex-start"};
  flex-direction: ${(p) => p.direction ?? "row"};
`;

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8fafc;
  }
  h1, h2, h3, h4, h5, h6, p, blockquote{
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }

  *::-webkit-scrollbar {
    height: 7px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
`;
