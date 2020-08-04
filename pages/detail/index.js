import react from "react";
import axios from "axios";
import { FaHome, FaGithubSquare } from "react-icons/fa";

import Head from "next/head";
import Link from "next/link";

import { User, Links } from "./style";

import withAnalytics from "~/hocs/withAnalytics";

const Detail = ({ user }) => {
  return (
    <User>
      <Head>
        <title>Details</title>
      </Head>

      <img src={user.avatar_url} width="200" />

      <h1>{user.name}</h1>
      <p> {user.bio}</p>

      <Links>
        <Link href={`/`}>
          <a>
            <FaHome color="FFF" size={32} />
          </a>
        </Link>
        <a href={`https://github.com/${user.login}`}>
          <FaGithubSquare color="FFF" size={32} />
        </a>
      </Links>
    </User>
  );
};

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  );

  return { user: response.data };
};

export default withAnalytics()(Detail);
