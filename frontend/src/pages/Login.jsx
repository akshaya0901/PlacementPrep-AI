function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>

        <p>Login to continue</p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button>Login</button>

        <p className="register-link">
          Don't have an account? Register
        </p>
      </div>
    </div>
  );
}

export default Login;