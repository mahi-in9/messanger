import { useState } from "react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { register } from "@/utils/api";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [cPassword, setCPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== cPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(register, form, { withCredentials: true });
      console.log("Registered successfully:", res.data);
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="flex flex-col gap-6 border border-gray-300 bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Create Account
        </h2>

        {/* Name Field */}
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
          <MdPerson className="text-gray-600 text-xl" />
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="w-full bg-transparent focus:outline-none text-gray-700"
            onChange={handleChange}
            value={form.name}
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
          <MdEmail className="text-gray-600 text-xl" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full bg-transparent focus:outline-none text-gray-700"
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
          <MdLock className="text-gray-600 text-xl" />
          <div className="flex items-center justify-between gap-2 h-9 w-full px-2 rounded-md text-gray-800 bg-transparent">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="outline-none bg-transparent w-full text-sm placeholder:text-gray-400"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="flex items-center justify-center text-gray-600 hover:text-gray-800 transition"
            >
              {showPass ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
          <MdLock className="text-gray-600 text-xl" />
          <div className="flex items-center justify-between gap-2 h-9 w-full px-2 rounded-md text-gray-800 bg-transparent">
            <input
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm your password"
              className="outline-none bg-transparent w-full text-sm placeholder:text-gray-400"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="flex items-center justify-center text-gray-600 hover:text-gray-800 transition"
            >
              {showConfirmPass ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
