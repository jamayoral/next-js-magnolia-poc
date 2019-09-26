import { css, Global } from "@emotion/core";
import React from "react";
<<<<<<< HEAD
import { PageBody } from "../styles";
=======
import { Global, css } from "@emotion/core";
>>>>>>> e8e6ce8fa18fbde7df46835a965c73c7e13fed6b

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
