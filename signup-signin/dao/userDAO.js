const crypto = require("crypto");
const { ulid } = require("ulid");

class UserDAO {
  constructor(dbConn) {
    this.db = dbConn;
  }

  save(data, callback) {
    const { name, email, password } = data;
    const salt = crypto.randomBytes(32).toString("hex");
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
    const sql = `INSERT INTO users (id, name, email, hash, salt) VALUES (?, ?, ?, ?, ?)`;
    this.db.run(sql, [ulid(), name, email, hash, salt], callback);
  }

  findOne(data, callback) {
    const { email, password } = data;
    const sql = `SELECT * FROM users WHERE email = ?;`
    
    this.db.get(sql, [email], (err, data) => {
      if (data) {
        const { salt, hash, id } = data;
        const recalcHash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
        callback(err, id, hash === recalcHash);
      } else {
        callback(err, data, false);
      }
    });
  }
}

module.exports = (dbConn) => {
  return new UserDAO(dbConn);
};
