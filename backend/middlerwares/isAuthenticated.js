import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
  try {
    // Extract token from Authorization header or cookies
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: "User not authenticated." });
    }
    
    // Verify the token
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Current User Login ID :- " ,decode);
    
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Attach user ID to the request object
    req.id = decode.userId;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(500).json({ message: "Authentication failed", error: error.message });
  }
};

export default isAuthenticated;
