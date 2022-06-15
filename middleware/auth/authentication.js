const {expressjwt} = require("express-jwt");
// console.log(jwt);

module.exports = function (opts) {
  const baseJwtConfig = {
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ["HS256"],
  };
  if (opts) {
    return expressjwt(opts);
  }
  return expressjwt(baseJwtConfig);
};