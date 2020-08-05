import React, { Component } from "react";
import { FaWindowClose, FaHome } from "react-icons/fa";

import Head from "next/head";
import Link from "next/link";

import withAnalytics from "~/hocs/withAnalytics";

import { Warn, Description } from "./style";

class Error extends Component {
  render() {
    return (
      <Warn>
        <Head>
          <title>Error</title>
        </Head>
        <div>
          <Description>
            <FaWindowClose color="#15202B" size={48} />
            <p>Informed value is not allowed.</p>
          </Description>
          <Link href={`/`}>
            <a>
              <FaHome color="#fff" size={60} />
            </a>
          </Link>
        </div>
      </Warn>
    );
  }
}

export default withAnalytics()(Error);
