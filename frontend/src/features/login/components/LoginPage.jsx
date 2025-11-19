import useLogin from "../hooks/useLogin";

const Login = () => {
  const {
    handleLogin,
    setEmail,
    setPassword,
    loading,
    error,
    email,
    password,
  } = useLogin();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white/50 rounded-lg p-8 shadow-lg max-w-xl w-full">
        <h2 className="text-center text-2xl p-2 font-semibold">Login Form</h2>
        {error && (
          <div className="bg-red-600 text-white  px-4 py-2 rounded mb-4 text-sm">
            {error}{" "}
          </div>
        )}

        <div className="w-full">
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-400 rounded p-2 mt-2 outline-0 "
          />
        </div>
        <div className="w-full">
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-400 rounded p-2 mt-2 outline-0"
          />
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            disabled={!email || !password || loading}
            className={` m-2 py-4 px-18  rounded font-semibold  text-white ${
              !email || !password || loading ? "bg-blue-300 " : "bg-blue-600"
            }`}>
            {loading ? "Loging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
