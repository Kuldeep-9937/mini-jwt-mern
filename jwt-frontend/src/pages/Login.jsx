import { useState } from "react";
import { postData } from "../api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = await postData("login", form);

    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/profile";
    }

    setMessage(data.message || "Logged in!");
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <form onSubmit={submitForm}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />

        <button type="submit">Login</button>
      </form>

      <p className="msg">{message}</p>
    </div>
  );
}
