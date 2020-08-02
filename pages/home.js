import React from "react";
import styled from "styled-components";

import Link from "next/link";
import Head from "next/head";

import Mylogo from "../public";

import withAnalytics from "~/hocs/withAnalytics";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Mylogo />
      <Title>Hello world</Title>
      <Link href="/users">
        <a>Usuarios</a>
      </Link>
    </div>
  );
};

export default withAnalytics()(Home);
