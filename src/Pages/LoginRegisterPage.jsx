import { useState } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";

const LoginRegisterPage = () => {
  const [formMode, setFormMode] = useState("login");

  const toggleFormMode = () => {
    setFormMode(formMode === "login" ? "register" : "login");
  };

  return (
    <div>
      {formMode === "login" ? (
        <Login toggleFormMode={toggleFormMode} />
      ) : (
        <Register toggleFormMode={toggleFormMode} />
      )}
    </div>
  );
};

export default LoginRegisterPage;
