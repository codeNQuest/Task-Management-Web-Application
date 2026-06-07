import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Login Submitted");

  toast.success("Login Successful");
};

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="brand">
          <div className="tag">Task Management Platform</div>

          <h1>TaskFlow</h1>

          <p>
            Manage projects, track progress, collaborate with
            your team, and stay productive with a modern task
            management experience.
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back 👋</h2>

          <p className="subtitle">
            Sign in to access your workspace
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <span
                  className="password-icon"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </span>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="forgot-password"
              >
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          <div className="register-link">
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;