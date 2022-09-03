class UserDAO {
  constructor(dbConn) {
    this.db = dbConn;
  }

  save() {
    console.log("saving user data...");
    this.db.run();
  }

  findOne(callback) {
    const sql = `SELECT * FROM users;`
    this.db.all(sql, callback);
  }
}

// module.exports = 
module.exports = (dbConn) => {
  return new UserDAO(dbConn);
};

