import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import composeRefs from "@seznam/compose-react-refs";
import { boxMixin, Box, BoxProps } from "../Box";

enum Mode {
  Pending,
  Error,
  Loaded,
}

export const imgMixin = css`
  display: block;
  max-width: 100%;
  max-height: 100%;
  opacity: 0;
  transition: opacity 250ms;
`;

const Placeholder = styled(Box)`
  ${imgMixin}
  opacity: 1;
`;

export const Img = styled.img<{ mode: Mode }>`
  ${imgMixin}
  ${boxMixin}

  ${({ mode }) => {
    switch (mode) {
      case Mode.Pending:
        return ``;
      case Mode.Loaded:
        return `
          opacity: 1;
        `;
      case Mode.Error:
        return `
          opacity: 0;
        `;
    }
  }};
`;

export type ImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src"
> &
  BoxProps & {
    srcs: string[];
    onError?(): void;
    onLoad?(): void;
    onComplete?(): void;
  };

export const Image = React.forwardRef(
  (
    { srcs, alt, onError, onLoad, onComplete, ...rest }: ImageProps,
    forwardedRef: React.Ref<HTMLImageElement>
  ) => {
    const [mode, setMode] = useState(Mode.Pending);
    const ref = React.useRef<HTMLImageElement>(null);

    const handleError = useCallback(() => {
      setMode(Mode.Error);
      onError && onError();
      onComplete && onComplete();
    }, [onComplete, onError]);

    const handleLoad = useCallback(() => {
      setMode(Mode.Loaded);
      onLoad && onLoad();
      onComplete && onComplete();
    }, [onComplete, onLoad]);

    useEffect(() => {
      if (ref.current?.complete) {
        handleLoad();
      }
    }, [handleLoad, ref]);

    if (srcs.length === 0) {
      return <Placeholder {...rest} />;
    }

    const [src1x, src2x] = srcs;

    return (
      <Img
        ref={composeRefs(ref, forwardedRef)}
        mode={mode}
        src={src1x}
        {...(src2x
          ? {
              srcSet: `${src1x} 1x, ${src2x} 2x`,
            }
          : {})}
        onError={handleError}
        onLoad={handleLoad}
        alt={alt ?? "a meaningful description"}
        {...rest}
      />
    );
  }
);

Image.displayName = "Image";
