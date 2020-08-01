import React from "react";
import Axios from "axios";

const User = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

User.getInitialProps = async () => {
  const response = await Axios.get(
    "https://api.github.com/orgs/rocketseat/members"
  );

  return { users: response.data };
};

export default User;
