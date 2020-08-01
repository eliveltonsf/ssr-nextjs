import React from "react";

import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/users">
        <a>Usuarios</a>
      </Link>
    </div>
  );
};

export default Home;
