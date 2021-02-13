import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pateTitle: "join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pateTitle: "join" });
  } else {
    res.redirect(routes.home);
  }
};

export const login = (req, res) => res.render("login", { pateTitle: "login" });

export const logout = (req, res) => res.redirect(routes.home);

export const users = (req, res) => res.render("users", { pateTitle: "users" });

export const userDetail = (req, res) =>
  res.render("userDetail", { pateTitle: "userDetail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pateTitle: "editProfile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pateTitle: "changePassword" });
