import react from "react";
import axios from "axios";

import withAnalytics from "../src/hocs/withAnalytics";

const Detail = ({ user }) => {
  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} width="200" />
    </div>
  );
};

Detail.getInitialProps = async () => {
  const response = await axios.get(`htpps://api.github.com/users/eliveltonsf`);

  return { user: response.data };
};

export default withAnalytics()(Detail);
