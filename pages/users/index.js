import React from "react";
import axios from "axios";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "~/hocs/withAnalytics";

const User = ({ orgs }) => {
  return (
    <div>
      <Head>
        <title>Usúarios</title>
      </Head>
      <ul>
        {orgs.map((org) => (
          <li key={org.id}>
            {org.login}
            <Link href={`/users/${org.login}`}>
              <a>details</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>Voltar</a>
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
