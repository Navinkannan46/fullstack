import { useEffect, useState } from "react";
import axiosInstance from "../../../lib/api";

const useProducts = () => {
  const [fetchProducts, setFetchProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const res = await axiosInstance.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFetchProducts(res?.data || []);
      } catch (err) {
        setError(err?.response?.data?.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return { loading, error, fetchProducts };
};

export default useProducts;
