var levelup = require("levelup");

module.exports = client;

function client (param) {
  if (typeof param != 'string' && param.db) {
    return param;
  }

  return levelup(param);
}
