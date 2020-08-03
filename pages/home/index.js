import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";
import Head from "next/head";

import Mylogo from "raiz/public";

import withAnalytics from "~/hocs/withAnalytics";

import { Container, Title, Description, Form, SubmitButton } from "./style";

class Home extends Component {
  state = {
    org: "",
  };

  handleInputChange = (e) => {
    this.setState({ org: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { org } = this.state;

    console.log(org);

    this.setState({ org: "" });
  };

  render() {
    const { org } = this.state;

    return (
      <Container>
        <Head>
          <title>Home</title>
        </Head>
        <Mylogo />
        <Title>Github Orgs</Title>
        <Description>
          Veja os membros das organizações filiadas ao github.
        </Description>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Pesquisar por uma organização"
            value={org}
            onChange={this.handleInputChange}
          />
          <Link href={`/orgs/${org}`}>
            <SubmitButton>
              <a>
                <FaArrowRight color="FFF" size={14} />
              </a>
            </SubmitButton>
          </Link>
        </Form>
      </Container>
    );
  }
}

export default withAnalytics()(Home);
