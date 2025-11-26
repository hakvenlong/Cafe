import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const preventRefresh = () => {
    return "data will get lost"
  };
  useEffect(() => {
    window.addEventListener('beforeunload', preventRefresh);
    return () => {
      window.removeEventListener('beforeunload', preventRefresh);
    }
  }, [])
  
  const [form, setForm] = useState({
    email: "venlong096@gmail.com",
    password: "12345678"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email && form.password) {
      login({ email: form.email });
      navigate("/");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">Login</button>
        </form>

        <p className="mt-3 text-center">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
