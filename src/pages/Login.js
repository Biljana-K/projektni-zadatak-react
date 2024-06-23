import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/login/LoginForm";

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storedLoggedInInfo === 1) {
      setIsLoggedIn(true);
    }
  }, []);

  const LoginHandler = (userName, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    navigate("/products");
  };

  return <>{!isLoggedIn && <LoginForm onLogin={LoginHandler} />}</>;
}

export default LoginPage;
