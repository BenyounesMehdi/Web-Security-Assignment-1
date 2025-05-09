const users = {
  wiener: "peter",
  carlos: "matthew",
};

const failedAttempts = {};
const MAX_ATTEMPTS = 3;
const BLOCK_TIME = 60000; // 1-minute block

export default function handleLogin(req, res) {
  const { username, password } = req.body;
  const clientIp = req.ip || req.connection.remoteAddress; // Get client IP

  // Initialize failed attempts for the user if not set
  if (!failedAttempts[clientIp]) {
    failedAttempts[clientIp] = { count: 0, blockedUntil: null };
  }

  const userAttempts = failedAttempts[clientIp];

  // Check if the user is blocked
  /*if (userAttempts.blockedUntil && Date.now() < userAttempts.blockedUntil) {
    const remainingTime = Math.ceil(
      (userAttempts.blockedUntil - Date.now()) / 1000
    );
    return res.status(403).json({
      message: `Too many failed login attempts. Try again in ${remainingTime} seconds.`,
    });
  }*/

  // Check if username exists
  if (!users[username]) {
    userAttempts.count++;
    if (userAttempts.count >= MAX_ATTEMPTS) {
      userAttempts.blockedUntil = Date.now() + BLOCK_TIME; // Set block time
    }
    return res.status(401).json({ message: "Invalid username" });
  }

  // Check credentials
  if (users[username] !== password) {
    userAttempts.count++;
    if (userAttempts.count >= MAX_ATTEMPTS) {
      userAttempts.blockedUntil = Date.now() + BLOCK_TIME; // Set block time
    }
    return res.status(401).json({ message: "Invalid password" });
  }

  failedAttempts[clientIp] = { count: 0, blockedUntil: null };

  req.session.user = username;
  return res.redirect("/account");
}
