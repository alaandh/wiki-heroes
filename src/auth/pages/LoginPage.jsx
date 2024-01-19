import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const onLogin = (event) => {
    event.preventDefault();

    if (username.length < 3) {
      setError("At least 3 characters are needed to login.");
      return;
    }
    if (username.length > 15) {
      setError("Maximum 15 characters.");
      return;
    }

    setError("");

    const lastPath = localStorage.getItem("lastPath") || "/";

    login(username);

    navigate(lastPath, {
      replace: true,
    });
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="login-page">
      <h1 className="login-text">Login</h1>
      <hr />

      <form onSubmit={onLogin}>
        <div className="input">
          <input type="text" value={username} onChange={handleChange} />
          <br />
          <button type="submit" className="btn btn-outline-primary">
            Login
          </button>
        </div>

        <br />
        {error && (
          <small className="text-danger d-flex justify-content-center">
            {error}
          </small>
        )}
      </form>
    </div>
  );
};
