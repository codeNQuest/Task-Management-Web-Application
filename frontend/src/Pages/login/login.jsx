import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { authAPI } from '../../utils/api';
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
    if (generalError) setGeneralError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await authAPI.login(formData.email, formData.password);
      login(response.data.user, response.data.token);
      navigate('/dashboard');
    } catch (error) {
      setGeneralError(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="login-card">

        <div className="left-panel">
          <h4>WELCOME BACK!</h4>

          <h1>
            Sign in to continue
            <br />
            your productivity
          </h1>

          <p>
            Manage your tasks, stay organized,
            <br />
            and get more done every day.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/9068/9068755.png"
            alt="task"
          />
        </div>

        <div className="right-panel">
          <h1>Welcome Back 👋</h1>
          <p>Login to your account to continue</p>

          {generalError && <div className="error-banner">{generalError}</div>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login →'}
            </button>

            <p className="register-link">
              Don't have an account?
              <Link to="/register"> Register</Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;