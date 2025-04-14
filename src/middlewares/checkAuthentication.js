export default function chechAuthentication(req, res, next) {
  if (req.session.user) {
    // User already logged in, redirect them
    return res.redirect("/account");
  }
  next(); // Continue to login route
}
