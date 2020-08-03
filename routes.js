const routes = require("next-routes");

module.exports = routes()
  .add("/", "home")
  .add("/orgs/:org", "users")
  .add("/users/:user", "detail");
