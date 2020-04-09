import React, { useCallback, createRef, isValidElement, useRef } from "react";
import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { useKeyboardListNavigation } from "use-keyboard-list-navigation";
import { Stack, StackProps } from "../Stack";
import composeRefs from "@seznam/compose-react-refs";
import { themeGetHexAlpha } from "../theme";

export type PaneProps = StackProps & {
  children: React.ReactElement<any> | React.ReactElement<any>[];
  onEnter?(): void;
};

export const paneShadowMixin = css`
  box-shadow: 0 0 ${themeGet("space.3")} 0
    ${themeGetHexAlpha("colors.primary", 0.2)};
`;

const Container = styled(Stack)`
  overflow: hidden;
  background-color: ${themeGet("colors.background")};
  max-width: ${themeGet("space.10")};
  ${paneShadowMixin}
`;

Container.defaultProps = {
  borderRadius: 4,
  spacing: 0,
};

export const Pane = React.forwardRef(
  ({ children, onEnter, ...rest }: PaneProps, forwardedRef: React.Ref<any>) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const composedRef = composeRefs(
      ref,
      forwardedRef
    ) as React.MutableRefObject<any>;
    const list = React.Children.toArray(children).filter(isValidElement);
    const refs = list.map(() => createRef<HTMLElement | null>());

    const handleEnter = useCallback(
      (_element, _state, i: number) => {
        refs[i].current?.click();
        onEnter && onEnter();
      },
      [onEnter, refs]
    );

    const { index } = useKeyboardListNavigation({
      list,
      ref: composedRef,
      onEnter: handleEnter,
      waitForInteractive: true,
    });

    return (
      <Container ref={composedRef} {...rest}>
        {list.map((child, i) => {
          return React.cloneElement(child as React.ReactElement<any>, {
            ref: refs[i],
            active: i === index,
          });
        })}
      </Container>
    );
  }
);

Pane.displayName = "Pane";
