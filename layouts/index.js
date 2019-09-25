import React from "react";
import Link from "next/link";
import { Nav, PageBody } from "../styles";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <PageBody>{children}</PageBody>
    </React.Fragment>
  );
};

export default Layout;
