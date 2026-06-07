import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/axios";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await api.post('/auth/login', formData);
    login(res.data.token, res.data.user);
    toast.success('Login successful');
    navigate('/dashboard');
  } catch (err) {
    const msg = err?.response?.data?.message || 'Login failed';
    toast.error(msg);
  } finally {
    setLoading(false);
  }
};

const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
          <h2>Welcome Back </h2>

          <p className="subtitle">
            Sign in to access your workspace
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
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

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
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