const getAuthorization = (req, res, next) => {
  const auth = Boolean(req.cookies.AUTH_APP);
  
  if (auth) {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = getAuthorization;
