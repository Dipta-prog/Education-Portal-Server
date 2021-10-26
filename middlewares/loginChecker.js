const jwt = require("jsonwebtoken");

const loginChecker = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
        console.log(decoded)
        const { username, userId } = decoded;
        req.username = username;
        req.userId = userId;
        next();
    } catch(err) {
        next("Authorization failure!");
    }
};

module.exports = loginChecker;