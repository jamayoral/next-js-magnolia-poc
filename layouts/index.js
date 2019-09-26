import { css, Global } from "@emotion/core";
import React from "react";
import { PageBody } from "../styles";

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
