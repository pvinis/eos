import React, { isValidElement, cloneElement } from "react";
import { Box, BoxProps } from "../Box";

type Direction = "vertical" | "horizontal";
export const DEFAULT_STACK_SPACING = "-1px";
export const DEFAULT_STACK_DIRECTION: Direction = "vertical";

export type StackProps = BoxProps & {
  spacing?: number | string;
  direction?: Direction | Direction[];
  children?: React.ReactNode;
};

export const Stack = React.forwardRef(
  (
    {
      direction = DEFAULT_STACK_DIRECTION,
      spacing,
      children,
      ...rest
    }: StackProps,
    forwardedRef: React.Ref<any>
  ) => {
    const nodes = React.Children.toArray(children).filter(isValidElement);
    const directions = ([] as Direction[]).concat(...[direction]);

    const spacingProps = {
      mb: directions.map(d => [d === "vertical" ? spacing : 0]),
      mr: directions.map(d => [d === "horizontal" ? spacing : 0])
    };

    const flexDirection = directions.map(
      d => ({ horizontal: "row", vertical: "column" }[d])
    );

    return (
      <Box
        ref={forwardedRef}
        display="flex"
        justifyContent="flex-start"
        // TODO
        // @ts-ignore
        flexDirection={flexDirection}
        {...rest}
      >
        {nodes.map((child, i) =>
          cloneElement(child, {
            ...(i === nodes.length - 1 ? {} : spacingProps)
          })
        )}
      </Box>
    );
  }
);

Stack.defaultProps = {
  spacing: DEFAULT_STACK_SPACING,
  direction: DEFAULT_STACK_DIRECTION
};

Stack.displayName = "Stack";
