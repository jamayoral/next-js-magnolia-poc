import { ThemeProvider } from "emotion-theming";
import fetch from "isomorphic-unfetch";
import React from "react";
import Tabs from "../components/Tabs";
import Layout from "../layouts";

const Home = props => {
  const { content } = props;
  return (
    <ThemeProvider theme={{ primary: "black" }}>
      <Layout>
        <Tabs content={content} />
      </Layout>
    </ThemeProvider>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/magnolia");
  const content = await res.json();
  return { content };
};

export default Home;
