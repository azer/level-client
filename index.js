var levelup = require("levelup");

module.exports = client;

function client (param, options, callback) {
  if (typeof param != 'string' && param.db) {
    return param;
  }

  return levelup(param, options, callback);
}
