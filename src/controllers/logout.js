export default function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ message: "Error logging out" });
    }
    res.clearCookie("connect.sid"); // Clear session cookie
    res.redirect("/"); // Redirect to the home page after logout
  });
}
