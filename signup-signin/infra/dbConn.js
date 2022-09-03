const { Database } = require("sqlite3");
const { resolve } = require("path");
const { DATABASE_PATH } = require("dotenv").config().parsed;

module.exports = new Database(resolve(DATABASE_PATH));
