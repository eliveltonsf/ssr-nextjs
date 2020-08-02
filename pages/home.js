import React from "react";

import Link from "next/link";
import Head from "next/head";

import Mylogo from "../public";

import withAnalytics from "../src/hocs/withAnalytics";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Mylogo />
      <h1>Hello world</h1>
      <Link href="/users">
        <a>Usuarios</a>
      </Link>
    </div>
  );
};

export default withAnalytics()(Home);
