import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Create Account 🎉</h2>

        <p>Join PlacementPrep AI</p>

        <input
          type="text"
          placeholder="Enter your full name"
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Create a password"
        />

        <input
          type="password"
          placeholder="Confirm your password"
        />

        <button>Create Account</button>

        <p className="register-link">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;