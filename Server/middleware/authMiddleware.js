import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.clearCookie("jwt");
        res.locals.user = null;
      } else {
        res.locals.user = user;
      }
    });
  } else {
    res.locals.user = null;
  }

  next();
};

export default authenticateToken;
