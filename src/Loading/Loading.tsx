import React from "react";
import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Pill, PillProps } from "../Pill";

const incoming = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(200%);
  }

  100% {
    transform: translateX(-100%);
  }
`;

const Container = styled(Pill)`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 2px;
    animation: ${incoming} 1.5s ease infinite;
    background-color: ${themeGet("colors.primary")};
  }
`;

export type LoadingProps = PillProps & {
  children?: React.ReactNode;
};

export const Loading: React.FC<LoadingProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children ?? <>&nbsp;</>}</Container>;
};

Loading.displayName = "Loading";
