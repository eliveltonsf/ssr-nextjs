import React from "react";
import axios from "axios";

import Link from "next/link";
import Head from "next/head";

import { FaInfo, FaAngleLeft } from "react-icons/fa";

import withAnalytics from "~/hocs/withAnalytics";

import { Title, Member } from "./style";

const User = ({ orgs }) => {
  return (
    <div>
      <Head>
        <title>Usúarios</title>
      </Head>
      <Title> Organization members</Title>
      <Member>
        {orgs.map((org) => (
          <li key={org.id}>
            <p>{org.login}</p>
            <Link href={`/users/${org.login}`}>
              <a>
                <FaInfo color="FFF" size={14} />
              </a>
            </Link>
          </li>
        ))}
      </Member>
      <Link href="/">
        <a>
          <FaAngleLeft color="FFF" size={48} />
        </a>
      </Link>
    </div>
  );
};

User.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/orgs/${query.org}/members`
  );

  return { orgs: response.data };
};

export default withAnalytics()(User);
