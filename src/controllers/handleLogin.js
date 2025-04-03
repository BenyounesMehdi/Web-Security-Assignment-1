const users = {
  wiener: "peter",
  carlos: "secret123",
};

const failedAttempts = {};
const MAX_ATTEMPTS = 3;
const BLOCK_TIME = 60000; // 1-minute block

export default function handleLogin(req, res) {
  const { username, password } = req.body;

  // Initialize failed attempts for the user if not set
  if (!failedAttempts[username]) {
    failedAttempts[username] = { count: 0, blockedUntil: null };
  }

  const userAttempts = failedAttempts[username];

  // Check if the user is blocked (except for carlos)
  if (username !== 'carlos' && userAttempts.blockedUntil && Date.now() < userAttempts.blockedUntil) {
    const remainingTime = Math.ceil(
      (userAttempts.blockedUntil - Date.now()) / 1000
    );
    return res.status(403).json({
      message: `Too many failed login attempts. Try again in ${remainingTime} seconds.`,
    });
  }

  // Check if username exists
  if (!users[username]) {
    userAttempts.count++;
    if (username !== 'carlos' && userAttempts.count >= MAX_ATTEMPTS) {
      userAttempts.blockedUntil = Date.now() + BLOCK_TIME;
    }
    return res.status(401).json({ message: "Invalid username" });
  }

  // Check credentials
  if (users[username] !== password) {
    userAttempts.count++;
    if (username !== 'carlos' && userAttempts.count >= MAX_ATTEMPTS) {
      userAttempts.blockedUntil = Date.now() + BLOCK_TIME;
    }
    return res.status(401).json({ message: "Invalid password" });
  }

  // Successful login - reset only this user's failed attempts
  failedAttempts[username] = { count: 0, blockedUntil: null };
  req.session.user = username;

  return res.redirect("/account");
}