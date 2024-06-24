import React from "react";

const LoginContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export default LoginContext;
