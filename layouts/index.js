import React from "react";
import { Global, css } from "@emotion/core";

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  a {
    text-decoration: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
