const sanitizeCPF = (req, res, next) => {
  const { usr } = req.body;

  // req.body.usr = usr.replace(".", "").replace(".", "").replace("-", "");
  // req.body.usr = usr.replace(/\D+/g, "");
  // req.body.usr = usr.replace(/[\.\-]/g, "");
  req.body.usr = Array.from(usr).filter(item => Number(item) || Number(item) === 0).join("");

  next();
};

module.exports = sanitizeCPF;
