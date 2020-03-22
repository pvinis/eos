import React from "react";
import { Button, ButtonProps } from "../Button";

export type PageProps = ButtonProps & {
  pageNumber: number;
  href: string;
  per: number;
  currentPage: number;
  children: JSX.Element | string | number;
  rel?: string;
  as?: "a" | React.ElementType;
};

export const Page: React.FC<PageProps> = ({
  pageNumber,
  href,
  per,
  currentPage,
  children,
  as = "a"
}) => (
  <Button
    flex="1"
    as={as}
    disabled={pageNumber === currentPage}
    {...(as === "a"
      ? { href: `${href}?page=${pageNumber}&per=${per}` }
      : {
          to: {
            pathname: href,
            search: `?page=${pageNumber}&per=${per}`
          }
        })}
  >
    {children}
  </Button>
);

Page.displayName = "Page";