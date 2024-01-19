import React, { useState } from "react";
import { useAuth } from "./AuthContext";

function LoginInput() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleChange} />
      <button type="submit"></button>
    </form>
  );
}

export default LoginInput;
