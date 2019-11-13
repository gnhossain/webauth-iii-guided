const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const { username, password } = req.headers;

  if (token) {
    const secret = process.env.JWT_SECRET || "is it secret, is it safe";

    jwt.verifiy(token,secret,(err, decodedToken) => {
      if (err){
        res.status(401).json({message: "Invalid"})
      }else{
        req.decodedJwt = decodedToken;
        next();
      }
    })
  //   Users.findBy({ username })
  //     .first()
  //     .then(user => {
  //       if (user && bcrypt.compareSync(password, user.password)) {
  //         next();
  //       } else {
  //         res.status(401).json({ message: 'Invalid Credentials' });
  //       }
  //     })
  //     .catch(error => {
  //       res.status(500).json({ message: 'Ran into an unexpected error' });
  //     });
  // } else {
  //   res.status(400).json({ message: 'No credentials provided' });
  // }
  }
};
