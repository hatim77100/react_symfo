import React from "react";
import Anonymous from "./roles/anonymous";
import User from "./roles/user";
import Admin from "./roles/admin";

const Navbar = () => {
  if (window.user === null) {
    return <Anonymous />;
  } else if (window.user.roles[0] === "ROLE_USER") {
    return <User />;
  } else if (window.user.roles[0] === "ROLE_ADMIN") {
    return <Admin />;
  }
};

export default Navbar;
