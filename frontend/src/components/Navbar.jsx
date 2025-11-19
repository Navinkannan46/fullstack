import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const logout = useLogout();
  return (
    <div className="w-full bg-gray-900 text-white py-3 px-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold">App </h1>
      <button
        onClick={logout}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
