import styled from "styled-components";
import { Box, BoxProps } from "../Box";

export type PillProps = BoxProps;

export const PILL = {
  fontFamily: "body",
  fontSize: 3,
  py: 4,
  px: 6,
  border: "1px solid",
  borderRadius: 4,
  lineHeight: 2
};

export const Pill = styled(Box)<PillProps>`
  display: flex;
  color: black;
  align-items: center;
`;

Pill.defaultProps = { ...PILL };
