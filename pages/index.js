import React from "react";
import Layout from "../layouts";
import Tabs from "../components/Tabs";
import fetch from "isomorphic-unfetch";

const Home = props => {
  const { content } = props;
  return (
    <Layout>
      <Tabs content={content} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/magnolia");
  const content = await res.json();
  return { content };
};

export default Home;
