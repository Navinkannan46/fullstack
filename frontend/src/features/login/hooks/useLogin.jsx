import { useState } from "react";
import axiosInstance from "../../../lib/api";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      if (res?.data?.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/products");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    setEmail,
    setPassword,
    loading,
    error,
    email,
    password,
  };
};

export default useLogin;
