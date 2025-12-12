import { MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import PasswordToggleFieldDemo from "@/components/ui/password";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import axios from "axios";
import { login } from "@/utils/api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(login, form, { withCredentials: true });
      console.log("Login successfully", res.data);
      navigate("/");
    } catch (error) {
      console.log("Login error", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 border border-gray-300 bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Login
        </h2>

        {/* Email Field */}
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
          <MdEmail className="text-gray-600 text-xl" />
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full bg-transparent focus:outline-none text-gray-700"
            value={form.email}
            name="email"
            onChange={handleChange}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Log In
        </button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
