import React, { Component } from "react";
import styled from "styled-components";

import Link from "next/link";
import Head from "next/head";

import Mylogo from "raiz/public";

import withAnalytics from "~/hocs/withAnalytics";

import { Container, Title, Description, Form } from "./style";

class Home extends Component {
  state = {
    org: "",
  };

  handleInputChange = (e) => {
    this.setState({ org: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const { org } = this.state;

    return (
      <Container>
        <html>
          <Head>
            <title>Home</title>
          </Head>
        </html>
        <Mylogo />
        <Title>Github Orgs</Title>
        <Description>
          Veja os membros das organizações filiadas ao github.
        </Description>

        <Form onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Pesquisar por uma organização"
            value={org}
            onChange={this.handleInputChange}
          />
        </Form>

        <Link href="/users">
          <a>Usuarios</a>
        </Link>
      </Container>
    );
  }
}

export default withAnalytics()(Home);
