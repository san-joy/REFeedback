const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  try {
    const token = request.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    request.employeeData = { email: decodedToken.email, employeeId: decodedToken.employeeId };
    next();
  } catch (error) {
    response.status(401).json({ message: "You are not authenticated!" });
  }
};
