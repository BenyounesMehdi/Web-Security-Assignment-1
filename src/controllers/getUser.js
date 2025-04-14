export function getUser(req, res) {
  console.log("Session data :", req.session);

  if (req.session.user) {
    res.json({ username: req.session.user });
  } else {
    console.log("User not found in session.");
    res.status(401).json({ error: "Unauthorized" });
  }
}
