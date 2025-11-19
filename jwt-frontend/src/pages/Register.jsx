import { useState } from "react";
import { postData } from "../api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = await postData("register", form);
    setMessage(data.message || JSON.stringify(data));
  };

  return (
    <div className="card">
      <h2>Register</h2>

      <form onSubmit={submitForm}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />

        <button type="submit">Register</button>
      </form>

      <p className="msg">{message}</p>
    </div>
  );
}
