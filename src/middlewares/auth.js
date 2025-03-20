export function authMiddleware(req, res, next) {
  console.log("Session Middleware - Session ID:", req.sessionID);
  console.log("Session Middleware - Session Data:", req.session);

  if (!req.session || !req.session.user) {
    console.log("Redirecting to login - No valid session.");
    return res.redirect("/login");
  }
  next();
}
